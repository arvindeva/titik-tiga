import NavBar from "@/components/ui/NavBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="container max-w-screen-xl mt-4">
        <div className="px-6 pt-6 container max-w-screen-2xl lg:px-8">
          <div className="text-center">
            <h1 className="text-9xl tracking-tight text-white sm:text-9xl mb-10">
              . . .
            </h1>
            <h1 className="text-6xl font-bold tracking-tight text-white sm:text-9xl mb-10">
              .titik.tiga.
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-200 sm:text-6xl mb-10">
              website under construction
            </h1>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl mb-10">
              <Link href="/book">
                <Button
                  className="h-20 w-96 text-2xl border-white"
                  variant="outline"
                >
                  book now
                </Button>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
