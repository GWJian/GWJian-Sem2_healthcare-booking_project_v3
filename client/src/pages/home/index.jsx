import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { getOverallRating, getAllRatings } from "@/pages/api/rating";
import AddUpdateRating from "@/components/rating/AddUpdateRating";
import localforage from "localforage";
import Google_Map from "@/components/MapBox";
import { IconMap2, IconClockHour2 } from "@tabler/icons-react";
import CardWithDecorativeImage from "@/components/Card";
import Header from "@/components/Header";
import Boarder from "@/components/Boarder";

export default function Home() {
  //===== check is user login start =====
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      const token = await localforage.getItem("token");
      if (token) {
        setAuth(token);
      }
    };
    getToken();
  }, []);
  //===== check is user login end =====

  // ======== Fetch overall rating ==========
  const { data: overallRatingData } = useQuery(
    "overallRating",
    getOverallRating
  );
  // console.log(overallRatingData);
  // console.log(overallRatingData?.overallRating);
  // ======== Fetch overall rating end ==========

  // ======== Fetch all ratings ==========
  const { data: ratingsData } = useQuery("ratings", getAllRatings);
  // console.log(ratingsData);
  // console.log(ratingsData?.ratings);
  // console.log(ratingsData?.ratings[0].customer.name);
  // ======== Fetch all ratings end ==========

  return (
    <section>
      <div>
        <Header />
      </div>
      <div className="m-20">
        <h2 className="text-center xl:text-5xl lg:text-4xl sm:text-2xl font-bold mb-5">
          Comprehensive care, one convenient location
        </h2>
        <CardWithDecorativeImage />
      </div>{" "}
      *
      <div className="m-20">
        <Boarder />
      </div>
      <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
        <div className="flex-1">
          <div className="max-w-lg">
            <h3 className="font-semibold text-indigo-600">HealthCare Center</h3>
            <h1>All Ratings: {overallRatingData?.overallRating}</h1>
            <ReactStars
              count={5} // Number of stars
              size={50} // Size of stars
              activeColor="#ffd700" // Color of active (filled) stars
              edit={false} // Make the stars read-only
              value={overallRatingData?.overallRating} // Set the initial rating value
            />

            <div> {auth && <AddUpdateRating />}</div>

            <div className="flex-1 mt-12 md:mt-0">
              <ul className="space-y-4 divide-y overflow-y-auto max-h-[400px]">
                {/* The max-h-[400px] class sets a maximum height for the list */}
                {ratingsData?.ratings.map((item) => (
                  <li className="py-5" key={item._id}>
                    <summary className="flex items-center justify-between font-semibold text-gray-700">
                      {item.customer.username}
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                      Ratings: {item.rating}
                      <ReactStars
                        count={5} // Number of stars
                        size={30} // Size of stars
                        activeColor="#ffd700" // Color of active (filled) stars
                        edit={false} // Make the stars read-only
                        value={item.rating} // Set the initial rating value
                      />
                    </p>
                    {/* Display the AddUpdateRating component only if the user is authenticated and the rating belongs to the current user */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-1 sm:mt-8 lg:mt-0">
          <p className="font-semibold text-2xl text-indigo-600">Visit Us</p>
          <p className="mt-3 text-gray-600 leading-relaxed font-bold">
            We're conveniently located in the heart of George Town, Penang.Find
            us at 2, Lebuh Acheh, George Town, 10300 George Town, Pulau Pinang.
          </p>

          <div className="mt-5 flex items-center">
            <IconMap2 size={50} />
            <p className="ml-2">
              2, LEBUH ACHEH, GEORGE TOWN, 10300 GEORGE TOWN, PULAU PINANG
            </p>
          </div>

          <div className="mt-5 flex items-center">
            <IconClockHour2 size={50} />
            <p className="ml-2">Monday - Friday: 8:30 AM - 5:30 PM</p>
          </div>

          <div className="mt-5 pb-32 ">
            <Google_Map />
          </div>
        </div>
      </div>
    </section>
  );
}
