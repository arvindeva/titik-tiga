import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import * as React from "react";

interface SuccessModalProps {
  children: React.ReactNode;
}

export function SuccessModal({ children }: SuccessModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[725px] p-16">
        <DialogTitle className="text-center mb-4">
          <h1 className="text-5xl w-full font-semibold">booking confirmed</h1>
        </DialogTitle>
        <DialogDescription className="text-center mb-8">
          <p className="text-2xl font-light text-neutral-200">
            we are looking forward to your visit
          </p>
        </DialogDescription>
        <div className="text-center">
          <Link href="/">
            <Button className="text-xl p-8">go to home page</Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
