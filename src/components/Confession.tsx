import AnimatedBear from "./AnimatedBear";

const Confession = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-secondary/30 relative z-10">
      <div className="max-w-3xl w-full bg-card rounded-3xl p-12 shadow-2xl animate-fadeInUp">
        <div className="mx-auto mb-8 flex justify-center gap-4">
          <AnimatedBear size="md" variant="blush" />
          <AnimatedBear size="md" variant="love" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-accent">
          A Little Confession 💕
        </h2>
        
        <div className="space-y-6 text-center text-lg text-foreground">
          <p className="leading-relaxed">
            I wanted to create this special place to tell you something important...
          </p>
          
          <p className="text-2xl font-semibold text-primary">
            You make every day brighter just by being you ✨
          </p>
          
          <p className="leading-relaxed">
            Your presence in my life is like sunshine on a cloudy day, like the first bloom of spring, 
            like the warmth of a cozy blanket on a cold night.
          </p>
          
          <p className="leading-relaxed">
            Thank you for being the amazing person you are. Never forget how special you are 
            and how much you mean to me.
          </p>
          
          <div className="pt-6 flex justify-center gap-3">
            <span className="text-3xl animate-float" style={{ animationDelay: '0s' }}>🧸</span>
            <span className="text-3xl animate-float" style={{ animationDelay: '0.3s' }}>💗</span>
            <span className="text-3xl animate-float" style={{ animationDelay: '0.6s' }}>🧸</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Confession;
