import { Card } from "flowbite-react";
import Image from "next/image";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";

export default function CardWithDecorativeImage() {
  return (
    <div className="flex flex-col md:flex-row md:gap-28 justify-center">
      <div className="max-w-sm mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in">
        <div>
          <Image src={Image1} className="w-full" />
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Genaral
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Everything you expect and then some. Cleanings, fillings, and x-rays
            are just the beginning.
          </p>
        </div>
      </div>

      <div className="max-w-sm mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in">
        <div>
          <Image src={Image2} className="w-full" />
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cosmetic
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Discover your “wow!” factor. Invisalign, veneers, and in-office or
            take-home teeth whitening.
          </p>
        </div>
      </div>

      <div className="max-w-sm mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in">
        <div>
          <Image src={Image3} className="w-full" />
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Surgical
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            We can fix anything. Our dentists repair damaged or lost teeth with
          </p>
        </div>
      </div>
    </div>

    // <div className="flex flex-col md:flex-row md:gap-4">
    //   <Card className="rounded-3xl hover:shadow-2xl">
    //     <Image
    //       src={Image1}
    //       className="rounded-lg w-full md:h-80 md:object-cover object-contain"
    //     />
    //     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //       General
    //     </h5>
    //     <p className="font-normal text-gray-700 dark:text-gray-400">
    //       Everything you expect and then some. Cleanings, fillings, and x-rays
    //       are just the beginning.
    //     </p>
    //   </Card>

    //   <Card className="rounded-3xl hover:shadow-2xl">
    //     <Image
    //       src={Image2}
    //       className="rounded-lg w-full md:h-80 md:object-cover object-contain"
    //     />
    //     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //       Cosmetic
    //     </h5>
    //     <p className="font-normal text-gray-700 dark:text-gray-400">
    //       Discover your “wow!” factor. Invisalign, veneers, and in-office or
    //       take-home teeth whitening.
    //     </p>
    //   </Card>

    //   <Card className="rounded-3xl hover:shadow-2xl">
    //     <Image
    //       src={Image3}
    //       className="rounded-lg w-full md:h-80 md:object-cover object-contain"
    //     />
    //     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //       Surgical
    //     </h5>
    //     <p className="font-normal text-gray-700 dark:text-gray-400">
    //       We can fix anything. Our dentists repair damaged or lost teeth with
    //       cutting-edge implants and more.
    //     </p>
    //   </Card>
    // </div>
  );
}
