"use client";
import * as React from "react";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";
import HeroBanner from "@/components/ui/rooms/HeroBanner";
import NavBar from "@/components/ui/NavBar";
import RoomListing from "@/components/ui/rooms/RoomListing";
import { useStore } from "@/store";
import LoadingDots from "@/components/ui/LoadingDots";

export default function Rooms() {
  const status = useStore((state: any) => state.status);
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(Date.now()),
    to: addDays(new Date(Date.now()), 3),
  });
  return (
    <main>
      <NavBar />
      <HeroBanner date={date} setDate={setDate} />
      {status === "loading" ? (
        <div className="flex flex-col items-center px-6 pt-6 container max-w-screen-2xl lg:px-8 gap-16 mb-10 mt-10">
          <LoadingDots />
        </div>
      ) : (
        <RoomListing date={date} />
      )}
    </main>
  );
}
