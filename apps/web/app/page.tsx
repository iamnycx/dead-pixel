import Hero from "./components/hero";
import IconsSection from "./components/icons/icons-section";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <IconsSection />
    </>
  );
}
