export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-screen-2xl flex h-14 items-center">
        <div className="mr-4 hidden md:flex">.titik.tiga.</div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <h2 className="text-2xl">• • •</h2>
        </div>
      </div>
    </header>
  );
}
