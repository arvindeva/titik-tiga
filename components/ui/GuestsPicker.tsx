import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { UserRound } from "lucide-react";
import { useState } from "react";

export function GuestsPicker() {
  const [guestCount, setGuestCount] = useState({
    adult: 2,
    children: 0,
    room: 1,
  });

  const adultClickHandler = (type: "-" | "+") => {
    setGuestCount({
      ...guestCount,
      adult: type === "-" ? guestCount.adult - 1 : guestCount.adult + 1,
    });
  };
  const childrenClickHandler = (type: "-" | "+") => {
    setGuestCount({
      ...guestCount,
      children:
        type === "-" ? guestCount.children - 1 : guestCount.children + 1,
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          id="date"
          className={cn(
            "w-[260px] justify-center border-neutral-200 text-left rounded-none font-normal"
          )}
        >
          <UserRound className="mr-2 h-4 w-4" />
          <div>
            {guestCount.adult} adult • {guestCount.children} children • 1 room
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 rounded-none border-neutral-200">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">add guests</h4>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center gap-4">
              <Label className="w-1/2" htmlFor="width">
                adult
              </Label>
              <div className="w-1/2 flex flex-row justify-between h-8 align-center items-center">
                <div
                  className="flex justify-center items-center h-8 w-8 border-white border cursor-pointer"
                  onClick={() => adultClickHandler("-")}
                >
                  -
                </div>
                <div>{guestCount.adult}</div>
                <Button
                  className="flex justify-center items-center h-8 w-8 border-white border cursor-pointer p0 bg-transparent text-neutral-200 hover:text-black"
                  onClick={() => adultClickHandler("+")}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center gap-4">
              <Label className="w-1/2" htmlFor="width">
                children
              </Label>
              <div className="w-1/2 flex flex-row justify-between h-8 align-center items-center">
                <div
                  className="flex justify-center items-center h-8 w-8 border-white border cursor-pointer"
                  onClick={() => childrenClickHandler("-")}
                >
                  -
                </div>
                <div>{guestCount.children}</div>
                <Button
                  className="flex justify-center items-center h-8 w-8 border-white border cursor-pointer p0 bg-transparent text-neutral-200 hover:text-black"
                  onClick={() => childrenClickHandler("+")}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
