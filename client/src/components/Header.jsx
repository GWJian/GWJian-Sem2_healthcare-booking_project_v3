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
    <div className="relative h-screen">
      <Image
        src={HeaderImg}
        alt="Header"
        layout="fill"
        objectFit="cover"
        className=""
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="absolute inset-0 flex items-center justify-start lg:ms-36 ">
        <div className="flex flex-col">
          <h1 className="text-white text-2xl font-bold">
            TRUSTED DENVER TECH CENTER DENTISTS
          </h1>
          <p className="text-white text-5xl">Exceptional care for all ages</p>
          <div>
            <Button pill color="warning" className="mt-5">
              {auth ? (
                <Link href="/appoiment">Booking Now</Link>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </Button>
          </div>
          <p className="text-white text-2xl mt-5">OR CALL (000) XXX-XXXX</p>
        </div>
      </div>
    </div>
  );
}
