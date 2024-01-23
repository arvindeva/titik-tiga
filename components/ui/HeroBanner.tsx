"use client";

import { useState } from "react";
import { DatePickerWithRange } from "./DatePickerWithRange";
import { Button } from "./button";
import { GuestsPicker } from "./GuestsPicker";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "./card";

export default function HeroBanner() {
  return (
    <div className="px-6 pt-6 container max-w-screen-2xl lg:px-8 lg:pb-8">
      <div className="text-center">
        <h1 className="text-9xl font-bold tracking-tight text-white sm:text-9xl mb-10">
          . . .
        </h1>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-10">
          <span>book your stay at </span>
          <span className="font-light">.titik.tiga.</span>
        </h1>
        {/* <p className="mt-6 text-lg leading-8 text-neutral-500 max-w-screen-md m-auto">
          Immerse yourself in the allure of Bali and create unforgettable
          memories with .titik.tiga. Our impeccably designed rooms offer you the
          utmost comfort and privacy, where every detail is meticulously curated
          to pamper your senses.
        </p> */}
        <Card className="m-auto  w-full lg:w-[879px] h-full lg:h-[120px] rounded-none border-neutral-400 border sm:border-2 mb-10">
          <div className="mt-6 hidden lg:flex lg:flex-row text-start justify-center gap-x-2 mb-2">
            <Label className="w-[260px] pl-6 text-white">add dates</Label>
            <Label className="w-[260px] pl-6 text-white">add guests</Label>
            <Label className="w-[260px] text-white"> </Label>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-x-2 mb-6 sm:mb-12">
            <div className="flex flex-col mb-2 sm:mb-0">
              <DatePickerWithRange />
            </div>
            <div className="flex flex-col mb-2 sm:mb-0">
              <GuestsPicker />
            </div>
            <div className="flex flex-col mb-2 sm:mb-0">
              <Button
                className="w-[260px] bg-white text-black"
                variant="outline"
              >
                check availability
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
