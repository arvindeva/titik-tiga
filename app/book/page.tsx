import NavBar from "@/components/ui/NavBar";
import BookingForm from "@/components/ui/book/BookingForm";

export default function Book() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-row pt-12 container w-full max-w-screen-xl gap-x-4">
        <div className="w-3/5 p-2">
          <h1 className="text-4xl font-semibold mb-8">••• guest details</h1>
          <BookingForm />
        </div>
        <div className="sticky top-20 w-2/5 ">
          <div className="sticky top-20 w-full border border-neutral-200 p-2">
            <div className="">Your booking</div>
          </div>
        </div>
      </div>
    </div>
  );
}
