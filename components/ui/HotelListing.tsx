import HotelCard from "@/components/ui/HotelCard";

export default function HotelListing() {
  return (
    <div className="flex flex-col items-center px-6 pt-6 container max-w-screen-2xl lg:px-8 gap-16">
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
    </div>
  );
}
