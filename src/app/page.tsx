import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Games } from "@/components/Games";
import { Tournaments } from "@/components/Tournaments";
import { Community } from "@/components/Community";
import { Blog } from "@/components/Blog";
import { Shop } from "@/components/Shop";
import { Modal } from "@/components/Modal";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0f]">
      <Navbar />
      <Hero />
      <Games />
      <Tournaments />
      <Community />
      <Blog />
      <Shop />
      <Footer />
      <Modal />
    </main>
  );
}
