"use client";

import HeroBanner from "@/components/ui/rooms/HeroBanner";
import NavBar from "@/components/ui/NavBar";
import RoomListing from "@/components/ui/rooms/RoomListing";
import { useStore } from "@/store";

export default function Rooms() {
  const setLoading = useStore((state: any) => state.setLoading);
  const status = useStore((state: any) => state.status);
  return (
    <main>
      <NavBar />
      <HeroBanner />
      <RoomListing />
      <div className="fixed top-24 left-10">{status}</div>
      <div className="fixed top-36 left-10" onClick={setLoading}>
        ASDASDSAD
      </div>
    </main>
  );
}
