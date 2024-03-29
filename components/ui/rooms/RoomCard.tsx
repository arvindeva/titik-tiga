"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { DateRange } from "react-day-picker";
import {
  Grid2X2,
  PersonStanding,
  Speaker,
  Bath,
  LampDesk,
  Clapperboard,
  Coffee,
} from "lucide-react";
import Link from "next/link";
import { addDays, format } from "date-fns";

interface RoomCardProps {
  date: DateRange | undefined;
  slug: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function RoomCard({
  date,
  slug,
  name,
  price,
  image,
  description,
}: RoomCardProps) {
  function dateRangeToQueryParams(dateRange: DateRange | undefined): string {
    if (dateRange?.from !== undefined && dateRange?.to !== undefined) {
      return `from=${format(dateRange?.from, "yyyy-MM-dd")}&to=${format(
        dateRange?.to,
        "yyyy-MM-dd"
      )}`;
    }
    return "qwe";
  }

  return (
    <Card className="flex sm:flex-row flex-col w-full max-w-screen-xl rounded-none">
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
      <div className="flex flex-col justify-between sm:w-5/12 p-2 border border-neutral-200 border md:border-l-0">
        <div>
          <CardHeader className="text-2xl font-semibold">
            {name.toLowerCase()}
          </CardHeader>
          <CardContent className="text-sm text-gray-400 dark:text-gray-400">
            <div className="mb-10">{description.toLowerCase()}</div>
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
                <div>bose speaker</div>
              </div>
              <div className="flex flex-row gap-x-2">
                <Bath />
                <div>bathtub</div>
              </div>
              <div className="flex flex-row gap-x-2">
                <LampDesk />
                <div>workdesk</div>
              </div>
              <div className="flex flex-row gap-x-2">
                <Clapperboard />
                <div>netflix</div>
              </div>
              <div className="flex flex-row gap-x-1">
                <Coffee />
                <div>tea/coffee making</div>
              </div>
            </div>
            <div className="mb-16 underline">more info</div>
          </CardContent>
        </div>
        <div>
          <CardFooter className="flex flex-col items-start">
            <div className="flex flex-row text-2xl justify-end mb-6 w-full">
              <div>
                idr{" "}
                {new Intl.NumberFormat("id-ID", {})
                  .format(price)
                  .replace(/\./g, ",")}
                /night
              </div>
            </div>
            <div className="flex flex-col w-full">
              <Link
                className="flex flex-col w-full"
                href={`/book?room=${slug}&${dateRangeToQueryParams(date)}`}
              >
                <Button size="sm">book now</Button>
              </Link>
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
