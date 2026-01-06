"use client";

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-black/90 border-t border-primary/20 backdrop-blur-md z-50 h-8 flex items-center justify-center font-mono text-[10px] md:text-xs">
      <div className="text-muted-foreground flex gap-4">
        <span>© {new Date().getFullYear()} Md Takrimul Hasan</span>
        <span className="text-primary/50">|</span>
        <span className="text-muted-foreground/70">System Status: <span className="text-green-500">ONLINE</span></span>
      </div>
    </footer>
  );
}
