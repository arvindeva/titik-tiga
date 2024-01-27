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
import { SuccessModal } from "./SuccessModal";

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
      ? formatDistanceStrict(parseISO(dateFrom), parseISO(dateTo), {
          unit: "day",
        }).split(" ")[0]
      : null;

  const totalPrice = room && duration && parseInt(duration) * room.price;

  const formattedTotalPrice =
    totalPrice &&
    new Intl.NumberFormat("id-ID", {}).format(totalPrice).replace(/\./g, ",");

  const formattedNightlyPrice =
    room?.price &&
    new Intl.NumberFormat("id-ID", {}).format(room.price).replace(/\./g, ",");

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
            <div className="">
              {dateFrom && formattedDateFrom} - {dateTo && formattedDateTo}
            </div>
            <div>
              <div className="mb-4">
                {guestCount.adult} adult
                {guestCount.adult > 1 ? <span>s</span> : null}{" "}
                {guestCount.children > 1 ? (
                  <span>{guestCount.children} children</span>
                ) : guestCount.children === 1 ? (
                  <span>1 child</span>
                ) : null}
              </div>
            </div>
            <div className="mb-10">
              <div className="flex flex-row justify-between ">
                <div>{room.name.toLowerCase()}</div>
                <div>idr {formattedNightlyPrice}/night</div>
              </div>
              <div>{duration} nights</div>
            </div>
            <div className="mb-8">
              <div className="flex flex-row justify-between items-center">
                <div className="text-3xl">total</div>
                <div className="text-3xl font-semibold">
                  idr {formattedTotalPrice}
                </div>
              </div>
            </div>
            <SuccessModal>
              <Button className="w-full h-10">confirm book</Button>
            </SuccessModal>
          </div>
        </div>
      )}
    </div>
  );
}
