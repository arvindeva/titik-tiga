"use client";

import NavBar from "@/components/ui/NavBar";
import { Button } from "@/components/ui/button";
import ScrollDownIcon from "@/components/ui/ScrollDownIcon";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function HeroBanner() {
  const list = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.2,
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
    <div className="container max-w-screen-xl mt-4">
      <div className="px-6 pt-6 container max-w-screen-2xl lg:px-8 mt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          className="text-center"
        >
          <div>
            <motion.div className="flex flex-row align-center justify-center space-x-6 md:space-x-12 mb-16">
              <motion.div
                variants={list}
                className="flex flex-col align-center justify-center text-2xl md:text-4xl h-24 w-24 md:h-36 md:w-36 bg-white rounded-full text-black"
              >
                titik
              </motion.div>
              <motion.div
                variants={list}
                className="flex flex-col align-center justify-center text-2xl md:text-4xl h-24 w-24 md:h-36 md:w-36 bg-white rounded-full text-black"
              >
                tiga
              </motion.div>
              <motion.div
                variants={list}
                className="flex flex-col align-center justify-center text-2xl md:text-4xl h-24 w-24 md:h-36 md:w-36 bg-white rounded-full text-black"
              >
                ubud
              </motion.div>
            </motion.div>
          </div>
          <motion.h1
            variants={list}
            className="text-2xl font-bold tracking-tight text-neutral-200 md:text-6xl mb-16"
          >
            website under construction
          </motion.h1>
          <motion.div variants={list}>
            <Link href="/rooms">
              <Button
                className="h-20 w-96 text-2xl border-white mb-24"
                variant="outline"
              >
                view available rooms
              </Button>
            </Link>
          </motion.div>
          <div>
            <div className="flex justify-center gap-6 p-8">
              <motion.div variants={list}>
                <SocialIcon
                  url="https://www.instagram.com/titikduaubud/"
                  bgColor="white"
                  fgColor="black"
                />
              </motion.div>
              <motion.div variants={list}>
                <SocialIcon
                  url="https://www.facebook.com/titikduaubud/"
                  bgColor="white"
                  fgColor="black"
                />
              </motion.div>
              <motion.div variants={list}>
                <SocialIcon
                  url="https://wa.me/6281139603939"
                  bgColor="white"
                  fgColor="black"
                  network="whatsapp"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
