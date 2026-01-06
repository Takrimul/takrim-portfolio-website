import ServiceMeshBackground from "../background/ServiceMesh";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <ServiceMeshBackground />
      
      <div className="z-10 text-center space-y-4 max-w-4xl px-4 animate-in fade-in zoom-in duration-1000">
        <h2 className="text-primary text-xl md:text-2xl font-mono tracking-widest">
          MD TAKRIMUL HASAN
        </h2>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-foreground">
          HIGH-CONCURRENCY
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            ARCHITECT
          </span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-mono mt-4">
          Engineering Scalable Financial Ecosystems & High-Performance Backends.
        </p>
        
        <div className="flex gap-4 justify-center mt-8">
           <a href="#projects" className="px-6 py-3 bg-primary/10 border border-primary text-primary hover:bg-primary/20 transition-all font-mono rounded inline-block">
             View System Designs
           </a>
           <a href="/resume.pdf" download className="px-6 py-3 border border-muted text-foreground hover:bg-muted/20 transition-all font-mono rounded inline-block">
             Download CV
           </a>
        </div>
      </div>
    </section>
  );
}
