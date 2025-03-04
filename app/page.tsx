import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Multirow from "@/components/Multirow";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Multirow />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
