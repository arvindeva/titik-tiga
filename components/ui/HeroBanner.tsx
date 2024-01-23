"use client";

import { useState } from "react";
import { DatePickerWithRange } from "./DatePickerWithRange";
import { Button } from "./button";
import { GuestsPicker } from "./GuestsPicker";
import { Label } from "@/components/ui/label";

export default function HeroBanner() {
  return (
    <div className="px-6 pt-6 container max-w-screen-2xl lg:px-8">
      <div className="text-center">
        <h1 className="text-9xl font-bold tracking-tight text-white sm:text-9xl mb-10">
          . . .
        </h1>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-10">
          <span>Book your stay at </span>
          <span className="font-light">.titik.tiga.</span>
        </h1>
        {/* <p className="mt-6 text-lg leading-8 text-neutral-500 max-w-screen-md m-auto">
          Immerse yourself in the allure of Bali and create unforgettable
          memories with .titik.tiga. Our impeccably designed rooms offer you the
          utmost comfort and privacy, where every detail is meticulously curated
          to pamper your senses.
        </p> */}
        <div className="mt-10 hidden md:flex md:flex-row text-start justify-center gap-x-2 mb-2">
          <Label className="w-[260px] pl-6">Add dates</Label>
          <Label className="w-[260px] pl-6 ">Add guests</Label>
          <Label className="w-[260px]"> </Label>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-x-2 mb-6 sm:mb-20">
          <div className="flex flex-col mb-2 sm:mb-0">
            <DatePickerWithRange />
          </div>
          <div className="flex flex-col mb-2 sm:mb-0">
            <GuestsPicker />
          </div>
          <div className="flex flex-col mb-2 sm:mb-0">
            <Button className="w-[260px]">Check Availability</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
