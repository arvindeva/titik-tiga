import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-screen-xl flex h-14 items-center">
        <Link href="/" className="mr-4 hidden md:flex">
          .titik.tiga.
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <h2 className="text-2xl">• • •</h2>
        </div>
      </div>
    </header>
  );
}
