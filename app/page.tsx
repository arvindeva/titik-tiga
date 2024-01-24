import NavBar from "@/components/ui/NavBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="container max-w-screen-xl mt-4">
        <div className="px-6 pt-6 container max-w-screen-2xl lg:px-8 mt-32">
          <div className="text-center">
            <div className="flex flex-row align-center justify-center space-x-12 mb-16">
              <div className="flex flex-col align-center justify-center text-4xl h-36 w-36 bg-white rounded-full text-black">
                titik
              </div>
              <div className="flex flex-col align-center justify-center text-4xl h-36 w-36 bg-white rounded-full text-black">
                tiga
              </div>
              <div className="flex flex-col align-center justify-center text-4xl h-36 w-36 bg-white rounded-full text-black">
                ubud
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-neutral-200 sm:text-6xl mb-10">
              website under construction
            </h1>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl mb-10">
              <Link href="/room">
                <Button
                  className="h-20 w-96 text-2xl border-white"
                  variant="outline"
                >
                  view available rooms
                </Button>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
