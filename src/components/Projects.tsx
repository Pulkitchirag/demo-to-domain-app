import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Neural Canvas",
    description: "AI-powered creative platform blending machine learning with artistic expression",
    tags: ["React", "TensorFlow", "WebGL"],
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Pulse Analytics",
    description: "Real-time data visualization dashboard with elegant, intuitive interfaces",
    tags: ["TypeScript", "D3.js", "Node.js"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Echo Commerce",
    description: "Modern e-commerce platform with seamless user experience and smart recommendations",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    gradient: "from-pink-500 to-rose-500"
  }
];

const Projects = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Featured Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Selected projects that showcase the intersection of creativity and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </Button>
                  <Button size="sm" variant="secondary" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-muted rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
