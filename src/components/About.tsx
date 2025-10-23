import { Brain, Palette, Zap } from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "Logic & Problem Solving",
    description: "Crafting elegant solutions to complex challenges with clean, efficient code"
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Blending aesthetics with functionality to create memorable user experiences"
  },
  {
    icon: Zap,
    title: "Performance Focus",
    description: "Building fast, responsive applications that users love to interact with"
  }
];

const About = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm a developer who believes that code is not just logic—it's an art form
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mb-6">
                <skill.icon className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground font-mono">
            <span className="text-primary">const</span> philosophy ={" "}
            <span className="text-accent">"Beauty in simplicity, power in precision"</span>;
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
