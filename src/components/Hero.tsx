import { Code2, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg animate-gradient opacity-20"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex justify-center mb-6 animate-fade-in">
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">Available for work</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="gradient-text">Where Logic</span>
          <br />
          <span className="gradient-text">Meets Emotion</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Every click, every line of code —{" "}
          <span className="text-foreground font-medium">a pulse of creativity</span>{" "}
          crafted with passion
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </span>
          </Button>
          <Button size="lg" variant="outline" className="glass hover:bg-card/50 px-8">
            Get in Touch
          </Button>
        </div>

        {/* Code snippet decoration */}
        <div className="mt-16 font-mono text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <span className="text-primary">&lt;</span>
          <span className="text-secondary">crafted</span>
          <span className="text-primary">&gt;</span>
          <span className="text-accent"> with passion </span>
          <span className="text-primary">&lt;/</span>
          <span className="text-secondary">crafted</span>
          <span className="text-primary">&gt;</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
