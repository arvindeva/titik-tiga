"use client";

import { useState } from "react";
import { DatePickerWithRange } from "./DatePickerWithRange";
import { Button } from "./button";

export default function HeroBanner() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="px-6 pt-14 container max-w-screen-2xl lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-200 sm:text-6xl">
          Book your stay at .titik.tiga.
        </h1>
        <p className="mt-6 text-lg leading-8 text-neutral-200 max-w-screen-md m-auto">
          Immerse yourself in the allure of Bali and create unforgettable
          memories with .titik.tiga. Impeccably designed rooms and villas offer
          you the utmost comfort and privacy, where every detail is meticulously
          curated to pamper your senses.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <DatePickerWithRange />
          <div>
            <Button>Check Availability!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
