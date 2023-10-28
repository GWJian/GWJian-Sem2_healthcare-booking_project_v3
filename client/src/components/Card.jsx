import { Card } from "flowbite-react";
import Image from "next/image";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";

export default function CardWithDecorativeImage() {
  return (
    <div className="flex flex-col md:flex-row md:gap-4">
      {/* need hlp for remove padding */}
      <div className="hover:shadow-2xl mb-3">
        <Card className="rounded-3xl">
          <Image src={Image1} className="rounded-lg w-full h-80 object-cover" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            General
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Everything you expect and then some. Cleanings, fillings, and x-rays
            are just the beginning.
          </p>
        </Card>
      </div>

      <div className="hover:shadow-2xl mb-3">
        <Card className="rounded-3xl">
          <Image src={Image2} className="rounded-lg w-full h-80 object-cover" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cosmetic
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Discover your “wow!” factor. Invisalign, veneers, and in-office or
            take-home teeth whitening.
          </p>
        </Card>
      </div>

      <div className="hover:shadow-2xl mb-3">
        <Card className="rounded-3xl">
          <Image src={Image3} className="rounded-lg w-full h-80 object-cover" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Surgical
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            We can fix anything. Our dentists repair damaged or lost teeth with
            cutting-edge implants and more.
          </p>
        </Card>
      </div>
    </div>
  );
}
