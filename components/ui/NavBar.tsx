"use client";

import Link from "next/link";
import { Button } from "./button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X } from "lucide-react";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-screen-xl flex h-14 items-center">
        <Link href="/" className="mr-4 hidden md:flex">
          .titik.tiga.
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-transparent text-neutral-200 hover:bg-transparent">
                <h2 className="text-2xl">• • •</h2>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-black bg-opacity-50 h-full" side="top">
              <SheetHeader>
                <SheetTitle className="w-full text-4xl pt-11 mb-48">
                  <div className="container">.titik.tiga.</div>
                </SheetTitle>
                <SheetDescription className="w-full text-5xl">
                  <ul className="container max-w-screen-lg text-neutral-200 font-light flex flex-col gap-y-16">
                    <li>
                      <Link href="/">••• home</Link>
                    </li>
                    <li>
                      <Link href="/room">••• rooms</Link>
                    </li>
                    <li>
                      <Link href="/room">••• event</Link>
                    </li>
                    <li>
                      <Link href="/">••• contact</Link>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4"></div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button
                    className="absolute top-12 right-96 w-16 h-16 bg-transparent rounded-full text-white hover:text-black hover:duration-300 duration-300"
                    type="submit"
                  >
                    <X className="w-20 h-20" strokeWidth={2} />
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
