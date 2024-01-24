"use client";

import HeroBanner from "@/components/ui/rooms/HeroBanner";
import NavBar from "@/components/ui/NavBar";
import RoomListing from "@/components/ui/rooms/RoomListing";
import { useStore } from "@/store";
import LoadingDots from "@/components/ui/LoadingDots";

export default function Rooms() {
  const status = useStore((state: any) => state.status);
  return (
    <main>
      <NavBar />
      <HeroBanner />
      {status === "loading" ? (
        <div className="flex flex-col items-center px-6 pt-6 container max-w-screen-2xl lg:px-8 gap-16 mb-10 mt-10">
          <LoadingDots />
        </div>
      ) : (
        <RoomListing />
      )}
    </main>
  );
}
