import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HotelCard() {
  return (
    <Card className="flex sm:flex-row flex-col w-full max-w-7xl border rounded-md">
      <div className="sm:w-3/5">
        <Image
          alt="Aksen Room"
          className="w-full h-full object-cover"
          src="/images/aksen-room.jpg"
          priority
        />
      </div>
      <div className="sm:w-2/5 p-2 space-y-1">
        <CardHeader className="text-lg font-semibold">Aksen Room</CardHeader>
        <CardContent className="text-sm text-gray-500 dark:text-gray-400">
          A homage to the Balinese culture, Aksen features red brick surrounding
          the room interior, creating a sense of place in a traditional Balinese
          home.
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <div className="text-lg font-semibold mb-2">IDR 2,750,000/night</div>
          <div className="mb-10">more info</div>
          <div className="flex flex-col w-full">
            <Button size="sm">Book Now</Button>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
