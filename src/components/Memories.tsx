const Memories = () => {
  const memories = [
    {
      emoji: "🎈",
      title: "First Hello",
      description: "When I first met you, I knew you were someone special"
    },
    {
      emoji: "🌸",
      title: "Beautiful Moments",
      description: "Every moment we share becomes a treasured memory"
    },
    {
      emoji: "🌟",
      title: "Your Laughter",
      description: "The sound of your laughter is my favorite melody"
    },
    {
      emoji: "🎀",
      title: "Little Things",
      description: "The way you notice the small things makes life magical"
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative z-10">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-primary animate-fadeInUp">
        Our Precious Memories 🎀
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
        {memories.map((memory, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 backdrop-blur-sm border border-border animate-fadeInUp hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
          >
            <div className="text-5xl mb-4">{memory.emoji}</div>
            <h3 className="text-2xl font-semibold mb-3 text-accent">
              {memory.title}
            </h3>
            <p className="text-muted-foreground">
              {memory.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Memories;
