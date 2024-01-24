import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="grid grid-cols-6 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="col-span-4 space-y-8 lg:space-y-10">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl">
          Book Your Stay
        </h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="check-in">Check-in Date</Label>
            <Input id="check-in" required type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="check-out">Check-out Date</Label>
            <Input id="check-out" required type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="guests">Number of Guests</Label>
            <Input id="guests" required type="number" />
          </div>
          <Button className="w-full" type="submit">
            Reserve
          </Button>
        </form>
      </div>
      <div className="col-span-2 space-y-8 lg:space-y-10">
        <img
          alt="Room Image"
          className="aspect-video w-full overflow-hidden rounded-xl object-cover"
          height="365"
          src="/placeholder.svg"
          width="650"
        />
        <div className="space-y-4 md:space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl">
              Deluxe Suite
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our Deluxe Suite offers a spacious room with a beautiful view of
              the city. The room includes a king-sized bed, a modern ensuite,
              and complimentary breakfast.
            </p>
          </div>
          <div className="space-x-4">
            <div className="text-3xl font-bold">$250/night</div>
          </div>
        </div>
      </div>
    </div>
  );
}
