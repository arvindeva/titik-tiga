"use client";

import { roomData } from "@/data/rooms";
import { useSearchParams } from "next/navigation";
import { format, parseISO } from "date-fns";
import Image from "next/image";

export default function Summary() {
  const searchParams = useSearchParams();
  const roomSlug = searchParams.get("room");
  const dateFrom = searchParams.get("from");
  const dateTo = searchParams.get("to");

  const room = roomData.find((x) => x.slug == roomSlug);

  const formattedDateFrom = dateFrom
    ? format(parseISO(dateFrom), "MM/dd/yyyy")
    : null;
  const formattedDateTo = dateTo
    ? format(parseISO(dateTo), "MM/dd/yyyy")
    : null;

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
              height="500"
            />
          </div>
          <div className="p-2">
            <div>{room?.id}</div>
            <div>{room?.slug}</div>
            <div>{room?.name}</div>
            <div>{room?.price}</div>
            <div>{room?.image}</div>
          </div>
        </div>
      )}

      <div className="">Summary</div>

      {dateFrom && <div>{formattedDateFrom}</div>}
      {dateTo && <div>{formattedDateTo}</div>}
    </div>
  );
}
