import RoomCard from "@/components/ui/rooms/RoomCard";

const hotelData = [
  {
    id: 1,
    name: "titik tiga room",
    price: "idr 2,250,000/night",
    image: "/images/rooms/titik-dua-room.jpg",
    description:
      "Cozy rooms with handcrafted furniture, floor-to-ceiling windows, a choice of king-size or twin beds featuring artisanal rugs, runners, and curated amenities, celebrating Indonesian craftsmanship.",
  },
  {
    id: 2,
    name: "Aksen Room",
    price: "IDR 2,750,000/night",
    image: "/images/rooms/aksen-room.jpg",
    description:
      "A homage to the Balinese culture, Aksen features red brick surrounding the room interior, creating a sense of place in a traditional Balinese home",
  },
  {
    id: 3,
    name: "Jeda Room",
    price: "IDR 2,750,000/night",
    image: "/images/rooms/jeda-room.jpg",
    description:
      "With its play on head-to-toe mirrors, where the toilet is cheekily hidden behind it, and an open plan interior, Jeda offers a tranquil space to enjoy yoga or mini workouts in the comfort of your own room.",
  },
  {
    id: 4,
    name: "Alinea Room",
    price: "IDR 2,750,000/night",
    image: "/images/rooms/alinea-room.jpg",
    description:
      "The room features unique design details such as a hidden minibar behind a head-to-toe mirror and a quirky lantern made out of recycled banana leaves, handcrafted by local artisans",
  },
  {
    id: 5,
    name: "Frasa Room",
    price: "IDR 2,750,000/night",
    image: "/images/rooms/frasa-room.jpg",
    description:
      "Frasa features an exposed bathtub right in the middle of the living room, a place where couples can enjoy each other’s company while admiring the verdant jungle views",
  },
];

export default function HotelListing() {
  return (
    <div className="flex flex-col items-center px-6 pt-6 container max-w-screen-2xl lg:px-8 gap-16 mb-10">
      {hotelData.map((hotel) => {
        return (
          <RoomCard
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
