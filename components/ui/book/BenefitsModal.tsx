import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/DialogWithClose";
import Link from "next/link";
import * as React from "react";

interface BenefitsModalProps {
  children: React.ReactNode;
}

const benefits = [
  "Membership points exchangable for exclusive rewards",
  "Exclusive offers with inspiring itineraries, only when booking direct",
  "A range of unique experiences to enhance your stay, accessible online",
];

export function BenefitsModal({ children }: BenefitsModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[725px] p-16">
        <DialogTitle className="mb-4 text-center">
          <h1 className="text-5xl w-full font-medium">membership benefits</h1>
        </DialogTitle>
        <DialogDescription className="">
          <div className="text-center">
            <p className="text-4xl text-neutral-200 mb-6">•••</p>
          </div>
          {benefits.map((benefit) => (
            <p className="text-xl text-neutral-200 mb-4" id={benefit}>
              {benefit.toLowerCase()}
            </p>
          ))}
          <div className="text-center">
            <p className="text-4xl text-neutral-200">•••</p>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
