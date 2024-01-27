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
import { motion } from "framer-motion";

export default function NavBar() {
  const list = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
      x: 100,
      transition: {
        when: "afterChildren",
      },
    },
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-screen-xl flex h-14 items-center">
        <Link href="/" className="mr-4 hidden md:flex text-xl">
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
              <motion.div initial="hidden" animate="visible" variants={list}>
                <SheetHeader>
                  <SheetTitle>
                    <div className="container w-full text-4xl pt-11 mb-32 flex flex-row justify-between">
                      <motion.div variants={list}>.titik.tiga.</motion.div>
                      <SheetClose asChild>
                        <Button
                          className="w-16 h-16 bg-transparent rounded-full text-white hover:text-black hover:duration-300 duration-300"
                          type="submit"
                        >
                          <X className="w-20 h-20" strokeWidth={2} />
                        </Button>
                      </SheetClose>
                    </div>
                  </SheetTitle>
                  <SheetDescription className="w-full text-3xl md:text-5xl">
                    <ul className="container max-w-screen-lg text-neutral-200 font-light flex flex-col gap-y-16">
                      <motion.li variants={list}>
                        <SheetClose asChild>
                          <Link href="/">••• home</Link>
                        </SheetClose>
                      </motion.li>
                      <motion.li variants={list}>
                        <SheetClose asChild>
                          <Link href="/rooms">••• rooms</Link>
                        </SheetClose>
                      </motion.li>
                      <motion.li variants={list}>
                        <SheetClose asChild>
                          <Link href="/events">••• events</Link>
                        </SheetClose>
                      </motion.li>
                      <motion.li variants={list}>
                        <SheetClose asChild>
                          <Link href="/contact">••• contact</Link>
                        </SheetClose>
                      </motion.li>
                    </ul>
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4"></div>
                <SheetFooter></SheetFooter>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
