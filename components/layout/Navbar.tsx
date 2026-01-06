"use client";

import { Command } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openPalette = () => {
    const event = new KeyboardEvent("keydown", { key: "k", metaKey: true });
    document.dispatchEvent(event);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-xl font-mono font-bold tracking-tighter text-foreground">
          MTH<span className="text-primary">.DEV</span>
        </div>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-8 text-sm font-mono text-muted-foreground">
            <a href="#projects" className="hover:text-primary cursor-pointer transition-colors">Projects</a>
            <a href="#stack" className="hover:text-primary cursor-pointer transition-colors">Stack</a>
            <a href="#research" className="hover:text-primary cursor-pointer transition-colors">Research</a>
            <a href="mailto:takrim9083@gmail.com" className="hover:text-primary cursor-pointer transition-colors">Contact</a>
          </ul>

          <button
            onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true }))}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/10 border border-secondary/20 text-xs font-mono text-secondary hover:bg-secondary/20 transition-all"
          >
            <Command className="w-3 h-3" />
            <span>CMD+K</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
