import Link from "next/link";
import { Button } from "@/components/ui/button";

interface UnderConstructionProps {
  pageName: string;
}

export default function UnderConstruction({
  pageName,
}: UnderConstructionProps) {
  return (
    <div className="px-6 pt-6 container max-w-screen-xl lg:px-8 lg:pb-8">
      <div className="flex flex-col text-center align-center mt-48">
        <h1 className="text-6xl font-bold mb-24">{`${pageName} page is under construction`}</h1>
        <Link href="/rooms">
          <Button
            className="h-20 w-96 text-2xl border-white mb-24"
            variant="outline"
          >
            view available rooms
          </Button>
        </Link>
      </div>
    </div>
  );
}
