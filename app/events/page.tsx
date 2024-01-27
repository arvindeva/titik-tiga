import NavBar from "@/components/ui/NavBar";
import UnderConstruction from "@/components/ui/UnderConstruction";
import FadeIn from "@/components/FadeIn";

export default function Events() {
  return (
    <main>
      <NavBar />
      <FadeIn>
        <UnderConstruction pageName="events" />
      </FadeIn>
    </main>
  );
}
