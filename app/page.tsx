import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Research } from "@/components/sections/Research";
import { Navbar } from "@/components/layout/Navbar";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col font-sans pb-8">
      <Navbar />
      <CommandPalette />
      <Hero />
      <Projects />
      <TechStack />
      <Research />
      <Footer />
    </main>
  );
}
