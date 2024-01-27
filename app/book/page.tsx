import NavBar from "@/components/ui/NavBar";
import BookingForm from "@/components/ui/book/BookingForm";
import Summary from "@/components/ui/book/Summary";
import { Suspense } from "react";
import FadeIn from "@/components/FadeIn";

export default function Book() {
  return (
    <div>
      <NavBar />
      <FadeIn>
        <div className="flex flex-col md:flex-row pt-12 container w-full max-w-screen-xl gap-x-4">
          <div className="w-full md:w-3/5 p-2">
            <h1 className="text-6xl font-semibold mb-8">••• your details</h1>
            <BookingForm />
          </div>
          <div className="w-full sticky top-20 md:w-2/5 ">
            <Suspense>
              <Summary />
            </Suspense>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
