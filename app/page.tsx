import { Footer } from "@/sections/Footer";
import { Navigation } from "@/sections/Navigation";

export default async function Home() {
  return (
    <>
      <Navigation />
      <main className="mt-18"></main>
      <Footer />
    </>
  );
}
