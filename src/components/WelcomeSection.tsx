const WelcomeSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative z-10">
      <div className="animate-fadeInUp" style={{ animationDelay: '0.2s', opacity: 0 }}>
        <div className="w-64 h-64 mb-8">
          <iframe 
            src="https://lottie.host/embed/69a1c742-31e1-11ef-ac34-c30bc61540a8/4HxQTZk3IC.json"
            style={{ border: 'none', width: '100%', height: '100%' }}
          />
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
