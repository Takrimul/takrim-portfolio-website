import { projects } from "@/lib/data";
import { Server, Database, Share2, Shield, Zap } from "lucide-react";

const getIcon = (tech: string) => {
    switch(tech) {
        case "Spring Boot": return <Server className="w-4 h-4" />;
        case "PostgreSQL": return <Database className="w-4 h-4" />;
        case "Kafka": return <Share2 className="w-4 h-4" />;
        case "Redis": return <Zap className="w-4 h-4" />;
        default: return <Shield className="w-4 h-4" />;
    }
};

export function Projects() {
  return (
    <section className="py-24 px-6 bg-background relative z-10" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                SYSTEM <span className="text-primary">ARCHITECTURES</span>
            </h2>
            <div className="h-1 w-20 bg-primary"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
                Selected works detailing high-performance financial systems and enterprise SaaS solutions.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
                key={idx} 
                className="group relative bg-[#0f0f0f] border border-white/5 hover:border-primary/50 transition-all duration-300 rounded-xl overflow-hidden flex flex-col h-full"
            >
              {/* Card Header (Architecture Diagram Header) */}
              <div className="p-6 border-b border-white/5 bg-white/[0.02]">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono text-primary px-2 py-1 bg-primary/10 rounded">
                        {project.category.toUpperCase()}
                    </span>
                    <div className="flex gap-2">
                        {/* Traffic Lights / Status indicators */}
                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
              </div>
              
              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col gap-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                </p>
                
                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 text-xs font-mono text-muted-foreground/80 bg-black/20 p-4 rounded-lg border border-white/5">
                    <div>
                        <span className="block text-[10px] uppercase opacity-50 mb-1">Architecture</span>
                        <span className="text-foreground">{project.specs.architecture}</span>
                    </div>
                    <div>
                        <span className="block text-[10px] uppercase opacity-50 mb-1">Scale</span>
                        <span className="text-foreground">{project.specs.scale}</span>
                    </div>
                </div>

                {/* Key Features List (Terminal Style) */}
                <div className="space-y-2">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Key Modules</span>
                    <ul className="space-y-1">
                        {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-xs text-muted-foreground font-mono">
                                <span className="mr-2 text-primary">➜</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
              </div>

              {/* Card Footer (Tech) */}
              <div className="p-4 border-t border-white/5 bg-white/[0.02] mt-auto">
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                        <div key={i} className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-muted-foreground group-hover:text-white transition-colors">
                            {getIcon(t)}
                            {t}
                        </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
