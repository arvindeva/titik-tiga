import HeroBanner from "@/components/ui/rooms/HeroBanner";
import NavBar from "@/components/ui/NavBar";
import RoomListing from "@/components/ui/rooms/RoomListing";

export default function Book() {
  return (
    <main>
      <NavBar />
      <HeroBanner />
      <RoomListing />
    </main>
  );
}
