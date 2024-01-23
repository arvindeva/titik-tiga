"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Grid2X2,
  PersonStanding,
  Speaker,
  Bath,
  LampDesk,
  Clapperboard,
  Coffee,
} from "lucide-react";

interface HotelCardProps {
  name: string;
  price: string;
  image: string;
  description: string;
}

export default function HotelCard({
  name,
  price,
  image,
  description,
}: HotelCardProps) {
  return (
    <Card className="flex sm:flex-row flex-col w-full max-w-screen-xl border rounded-md">
      <div className="sm:w-7/12 overflow-hidden">
        <Image
          alt={name}
          className="w-full h-full object-cover hover:scale-125 transition-all"
          src={image}
          priority
          width="700"
          height="500"
        />
      </div>
      <div className="flex flex-col justify-between sm:w-5/12 p-2">
        <div>
          <CardHeader className="text-2xl font-semibold">{name}</CardHeader>
          <CardContent className="text-sm text-gray-400 dark:text-gray-400">
            <div className="mb-10">{description}</div>
            <div className="flex flex-row  gap-x-10 gap-y-3 mb-10 text-sm text-gray-200 dark:text-gray-200 flex-wrap">
              <div className="flex flex-row gap-x-2">
                <PersonStanding />
                <div>2 guests</div>
              </div>
              <div className="flex flex-row gap-x-2">
                <Grid2X2 />
                <div>27m</div>
              </div>

              <div className="flex flex-row gap-x-2">
                <Speaker />
                <div>Bose speaker</div>
              </div>
              <div className="flex flex-row gap-x-2">
                <Bath />
                <div>Bathtub</div>
              </div>
              <div className="flex flex-row gap-x-2">
                <LampDesk />
                <div>Workdesk</div>
              </div>
              <div className="flex flex-row gap-x-2">
                <Clapperboard />
                <div>Netflix</div>
              </div>
              <div className="flex flex-row gap-x-1">
                <Coffee />
                <div>Tea/Coffee making</div>
              </div>
            </div>
            <div className="mb-16 underline">more info</div>
          </CardContent>
        </div>
        <div>
          <CardFooter className="flex flex-col items-start">
            <div className="flex flex-row text-2xl justify-end mb-6 w-full">
              <div>{price}</div>
            </div>
            <div className="flex flex-col w-full">
              <Button size="sm">Book Now</Button>
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
