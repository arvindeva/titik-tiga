"use client";

import { roomData } from "@/data/rooms";
import { useSearchParams } from "next/navigation";
import {
  format,
  formatDistance,
  formatDistanceStrict,
  parseISO,
} from "date-fns";
import { useStore } from "@/store";
import { Button } from "../button";

import Image from "next/image";

export default function Summary() {
  const guestCount = useStore((state: any) => state.guestCount);

  const searchParams = useSearchParams();
  const roomSlug = searchParams.get("room");
  const dateFrom = searchParams.get("from");
  const dateTo = searchParams.get("to");

  const dateFormat = "iii, MMM d, yyyy";

  const room = roomData.find((x) => x.slug == roomSlug);

  const formattedDateFrom = dateFrom
    ? format(parseISO(dateFrom), dateFormat).toLowerCase()
    : null;
  const formattedDateTo = dateTo
    ? format(parseISO(dateTo), dateFormat).toLowerCase()
    : null;

  const duration =
    dateFrom && dateTo
      ? formatDistanceStrict(parseISO(dateFrom), parseISO(dateTo)).split(" ")[0]
      : null;

  const totalPrice = room && duration && parseInt(duration) * room.price;

  const formattedTotalPrice =
    totalPrice &&
    new Intl.NumberFormat("id-ID", {}).format(totalPrice).replace(/\./g, ",");

  return (
    <div className="sticky top-20 w-full border border-neutral-200">
      {room && (
        <div>
          <div>
            <Image
              alt="asd"
              className="w-full h-full"
              src={room.image}
              priority
              width="500"
              height="300"
            />
          </div>
          <div className="p-4">
            <div className="text-4xl font-semibold mb-8">
              your stay at titik tiga
            </div>
            <div className="flex flex-row gap-x-8 mb-4">
              <div>
                <div className="text-neutral-400 text-sm">check in</div>
                <div className="text-xl">after 3pm</div>
              </div>
              <div>
                <div className="text-neutral-400 text-sm">check out</div>
                <div className="text-xl">before 12pm</div>
              </div>
            </div>
            <div className="mb-4">
              {dateFrom && formattedDateFrom} - {dateTo && formattedDateTo}
            </div>
            <div>
              <div className="mb-4">
                {guestCount.adult} adult {guestCount.children} children
              </div>
            </div>
            <div className="mb-10">
              <div className="flex flex-row justify-between ">
                <div>{room.name.toLowerCase()}</div>
                <div>idr {room.price}/night</div>
              </div>
              <div>{duration} nights</div>
            </div>
            <div className="mb-8">
              <div className="flex flex-row justify-between items-center">
                <div>total</div>
                <div className="text-2xl">idr {formattedTotalPrice}</div>
              </div>
            </div>
            <Button className="w-full h-10">confirm book</Button>
          </div>
        </div>
      )}
    </div>
  );
}
