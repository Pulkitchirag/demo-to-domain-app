import Lottie from "lottie-react";

const Confession = () => {
  // Placeholder - replace with actual Lottie JSON for bear holding heart
  const bearHeartAnimation = {
    v: "5.7.4",
    fr: 30,
    ip: 0,
    op: 60,
    w: 500,
    h: 500,
    nm: "Bear with Heart",
    ddd: 0,
    assets: [],
    layers: []
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-secondary/30 relative z-10">
      <div className="max-w-3xl w-full bg-card rounded-3xl p-12 shadow-2xl animate-fadeInUp">
        <div className="w-40 h-40 mx-auto mb-8 animate-pulse-soft">
          <Lottie animationData={bearHeartAnimation} loop={true} />
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
