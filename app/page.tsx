"use client";

import NavBar from "@/components/ui/NavBar";
import { Button } from "@/components/ui/button";
import ScrollDownIcon from "@/components/ui/ScrollDownIcon";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroBanner from "@/components/ui/home/HeroBanner";
import LoadingDots from "@/components/ui/LoadingDots";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroBanner />
    </main>
  );
}
