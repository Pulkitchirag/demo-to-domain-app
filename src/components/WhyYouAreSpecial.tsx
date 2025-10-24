import { Heart, Sparkles, Star } from "lucide-react";

const WhyYouAreSpecial = () => {
  const reasons = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Your Smile",
      description: "It lights up my entire world and makes everything better"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Your Kindness",
      description: "The way you care about everyone around you is absolutely beautiful"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Your Uniqueness",
      description: "Everything about you is special and makes you who you are"
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-secondary/30 relative z-10">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-primary animate-fadeInUp">
        Why You're Special 💖
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.2}s`, opacity: 0 }}
          >
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-accent mx-auto">
              {reason.icon}
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4 text-accent">
              {reason.title}
            </h3>
            <p className="text-center text-muted-foreground">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyYouAreSpecial;
