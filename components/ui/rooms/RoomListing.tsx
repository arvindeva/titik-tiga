import RoomCard from "@/components/ui/rooms/RoomCard";
import { DateRange } from "react-day-picker";
import { roomData } from "@/data/rooms";

interface RoomListingProps {
  date: DateRange | undefined;
}

export default function HotelListing({ date }: RoomListingProps) {
  return (
    <div className="flex flex-col items-center px-6 pt-6 container max-w-screen-2xl lg:px-8 gap-16 mb-10">
      {roomData.map((hotel) => {
        return (
          <RoomCard
            date={date}
            slug={hotel.slug}
            name={hotel.name}
            price={hotel.price}
            image={hotel.image}
            description={hotel.description}
            key={hotel.id}
          />
        );
      })}
    </div>
  );
}
