import { techStack } from "@/lib/data";

export function TechStack() {
  return (
    <section className="py-24 px-6 relative z-10 bg-background/50 backdrop-blur-3xl" id="stack">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">
          TECHNICAL <span className="text-primary">ARSENAL</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full">
            {/* Core Backend - Large Block */}
            <div className="col-span-1 md:col-span-2 row-span-2 p-6 rounded-xl border border-white/10 bg-white/5 relative overflow-hidden group hover:border-primary/50 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-6xl font-bold select-none group-hover:opacity-20 transition-opacity">
                    BACKEND
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Core Backend</h3>
                <div className="flex flex-wrap gap-2">
                    {techStack.backend.map(t => (
                        <span key={t} className="bg-black/40 border border-white/10 px-3 py-1.5 rounded-md font-mono text-sm text-muted-foreground hover:text-white hover:border-primary/50 transition-colors">
                            {t}
                        </span>
                    ))}
                </div>
                <div className="mt-8 text-sm text-muted-foreground">
                    Deep expertise in building robust, improved scalable server-side applications using Spring Boot ecosystem and Java.
                </div>
            </div>

            {/* Distributed Systems */}
            <div className="col-span-1 md:col-span-2 p-6 rounded-xl border border-white/10 bg-white/5 relative group hover:border-primary/50 transition-all">
                <h3 className="text-xl font-bold mb-4 text-secondary">Distributed Systems</h3>
                <div className="flex flex-wrap gap-2">
                    {techStack.distributed.map(t => (
                        <span key={t} className="bg-black/40 border border-white/10 px-3 py-1.5 rounded-md font-mono text-sm text-muted-foreground hover:text-white hover:border-secondary/50 transition-colors">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Database */}
            <div className="col-span-1 p-6 rounded-xl border border-white/10 bg-white/5 group hover:border-primary/50 transition-all">
                <h3 className="text-lg font-bold mb-4 text-foreground">Database</h3>
                 <div className="flex flex-wrap gap-2">
                    {techStack.database.map(t => (
                        <span key={t} className="bg-black/40 border border-white/10 px-2 py-1 rounded-md font-mono text-xs text-muted-foreground hover:text-white transition-colors">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

             {/* Frontend */}
             <div className="col-span-1 p-6 rounded-xl border border-white/10 bg-white/5 group hover:border-primary/50 transition-all">
                <h3 className="text-lg font-bold mb-4 text-foreground">Frontend</h3>
                 <div className="flex flex-wrap gap-2">
                    {techStack.frontend.map(t => (
                        <span key={t} className="bg-black/40 border border-white/10 px-2 py-1 rounded-md font-mono text-xs text-muted-foreground hover:text-white transition-colors">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Problem Solving Badge */}
            <div className="col-span-1 md:col-span-4 p-6 rounded-xl border border-primary/20 bg-primary/5 flex items-center justify-between group hover:bg-primary/10 transition-colors">
                <div>
                     <h3 className="text-lg font-bold text-primary">Problem Solving</h3>
                     <p className="text-sm text-muted-foreground">Top-tier algorithmic skills on Codeforces, LeetCode, LightOJ.</p>
                </div>
                <div className="text-3xl font-mono font-bold text-foreground">
                    500+<span className="text-primary text-sm ml-1">SOLVED</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
