"use client";

import NavBar from "@/components/ui/NavBar";
import { Button } from "@/components/ui/button";
import ScrollDownIcon from "@/components/ui/ScrollDownIcon";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const list = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.6,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
      transition: {
        when: "afterChildren",
      },
    },
  };

  return (
    <main>
      <NavBar />
      <div className="container max-w-screen-xl mt-4">
        <div className="px-6 pt-6 container max-w-screen-2xl lg:px-8 mt-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            className="text-center"
          >
            <div>
              <motion.div className="flex flex-row align-center justify-center space-x-12 mb-16">
                <motion.div
                  variants={list}
                  className="flex flex-col align-center justify-center text-4xl h-36 w-36 bg-white rounded-full text-black"
                >
                  titik
                </motion.div>
                <motion.div
                  variants={list}
                  className="flex flex-col align-center justify-center text-4xl h-36 w-36 bg-white rounded-full text-black"
                >
                  tiga
                </motion.div>
                <motion.div
                  variants={list}
                  className="flex flex-col align-center justify-center text-4xl h-36 w-36 bg-white rounded-full text-black"
                >
                  ubud
                </motion.div>
              </motion.div>
            </div>
            <motion.h1
              variants={list}
              className="text-4xl font-bold tracking-tight text-neutral-200 sm:text-6xl mb-16"
            >
              website under construction
            </motion.h1>
            <motion.div variants={list}>
              <Link href="/room">
                <Button
                  className="h-20 w-96 text-2xl border-white mb-16"
                  variant="outline"
                >
                  view available rooms
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={list} className="block">
              <ScrollDownIcon />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
