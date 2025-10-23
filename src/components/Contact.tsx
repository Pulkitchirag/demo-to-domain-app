import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

const Contact = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Let's Create Together</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Have a project in mind? Let's bring your ideas to life with code and creativity
          </p>

          <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground px-12 mb-12">
            <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Get in Touch
          </Button>

          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="glass w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-primary" />
              </a>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground font-mono">
              <span className="text-primary">&copy;</span> 2025{" "}
              <span className="text-foreground">Crafted with passion</span>
              <span className="text-accent"> and precision</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
