import React, { useEffect, useState } from "react";
import Image from "next/image";
import HeaderImg from "../assets/Header.jpg";
import { Button } from "flowbite-react";
import Link from "next/link";
import localforage from "localforage";

export default function Header() {
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

  return (
    <div className="relative h-screen ">
      <Image
        src={HeaderImg}
        alt="Header"
        layout="fill"
        objectFit="cover"
        className=""
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="absolute inset-0 flex items-center justify-start md:ms-28 custom-375:ms-5">
        <div className="flex flex-col">
          <h1 className="text-white lg:text-2xl font-bold md:text-sm">
            TRUSTED TECH CENTER DENTISTS
          </h1>
          <p className="text-white lg:text-5xl md:text-3xl sm:text-2xl">Exceptional care for all ages</p>
          <div className="mt-5">
            <button className="rounded-full p-2 px-3 text-white bg-yellow-400 hover:bg-yellow-600">
              {auth ? (
                <Link href="/appoiment" className="text-xs md:text-base" >Booking Now</Link>
              ) : (
                <Link href="/login" className="text-xs md:text-base" >Login</Link>
              )}
            </button>
          </div>
          <p className="text-white lg:text-2xl mt-5 md:text-1xl text-sm">OR CALL (000) XXX-XXXX</p>
        </div>
      </div>
    </div>
  );
}
