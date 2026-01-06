
export function Research() {
  return (
    <section className="py-24 px-6 relative z-10" id="research">
       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                    ACADEMIC <span className="text-primary">FOCUS</span>
                </h2>
                <div className="space-y-6">
                    <div className="border-l-2 border-primary/50 pl-6">
                        <h3 className="text-xl font-bold text-foreground">B.Sc. in Computer Science & Engineering</h3>
                        <p className="text-sm text-muted-foreground font-mono mt-1">Shahjalal University of Science and Technology (SUST)</p>
                        <p className="text-primary font-mono mt-2">CGPA 3.59</p>
                    </div>
                    <div className="border-l-2 border-white/10 pl-6">
                        <h3 className="text-xl font-bold text-foreground">Higher Secondary Certificate</h3>
                        <p className="text-sm text-muted-foreground font-mono mt-1">Notre Dame College</p>
                        <p className="text-muted-foreground font-mono mt-2">GPA 5.00</p>
                    </div>
                </div>
            </div>

            {/* Thesis Spotlight Card */}
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:opacity-75 transition-opacity opacity-50"></div>
                <div className="relative bg-black border border-white/10 p-8 rounded-2xl overflow-hidden">
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded mb-4 inline-block">THESIS SPOTLIGHT</span>
                    <h3 className="text-2xl font-bold mb-4 text-white">Analyzing Causes of Depression using Deep Learning</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        A research study leveraging Natural Language Processing (NLP) and Deep Learning models to identify depression markers in social media text data.
                    </p>
                    <div className="flex gap-2">
                         <span className="text-xs border border-white/10 px-2 py-1 rounded text-muted-foreground">Python</span>
                         <span className="text-xs border border-white/10 px-2 py-1 rounded text-muted-foreground">NLP</span>
                         <span className="text-xs border border-white/10 px-2 py-1 rounded text-muted-foreground">TensorFlow</span>
                    </div>
                </div>
            </div>
       </div>
    </section>
  );
}
