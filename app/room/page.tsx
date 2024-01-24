import { Calendar } from "@/components/ui/calendar";
import HeroBanner from "@/components/ui/HeroBanner";
import NavBar from "@/components/ui/NavBar";
import HotelListing from "@/components/ui/HotelListing";

export default function Book() {
  return (
    <main>
      <NavBar />
      <HeroBanner />
      <HotelListing />
    </main>
  );
}
