import Lottie from "lottie-react";

const WelcomeSection = () => {
  // Placeholder - replace with actual Lottie JSON
  const bearAnimation = {
    v: "5.7.4",
    fr: 30,
    ip: 0,
    op: 60,
    w: 500,
    h: 500,
    nm: "Bear Waving",
    ddd: 0,
    assets: [],
    layers: []
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative z-10">
      <div className="animate-fadeInUp" style={{ animationDelay: '0.2s', opacity: 0 }}>
        <div className="w-48 h-48 mb-8 animate-pulse-soft">
          <Lottie animationData={bearAnimation} loop={true} />
        </div>
      </div>
      
      <h1 
        className="text-5xl md:text-7xl font-bold text-center mb-6 text-accent animate-fadeInUp"
        style={{ animationDelay: '0.4s', opacity: 0 }}
      >
        Hello Beautiful! 🧸
      </h1>
      
      <p 
        className="text-xl md:text-2xl text-center text-muted-foreground max-w-2xl animate-fadeInUp"
        style={{ animationDelay: '0.6s', opacity: 0 }}
      >
        Welcome to a little corner of the internet made just for you, filled with love, hugs, and teddy bear cuddles 💕
      </p>
      
      <div 
        className="mt-8 flex gap-4 animate-fadeInUp"
        style={{ animationDelay: '0.8s', opacity: 0 }}
      >
        <span className="text-4xl animate-float" style={{ animationDelay: '0s' }}>🎀</span>
        <span className="text-4xl animate-float" style={{ animationDelay: '0.5s' }}>💝</span>
        <span className="text-4xl animate-float" style={{ animationDelay: '1s' }}>✨</span>
      </div>
    </section>
  );
};

export default WelcomeSection;
