import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About Me
        </h2>
        <div className="w-24 h-1 gradient-hero mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a recent computer science graduate with a passion for creating intuitive, 
              user-friendly web applications. My journey in software development started with 
              a curiosity about how things work, and has evolved into a drive to build solutions 
              that make a difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive in collaborative environments and love the challenge of turning complex 
              problems into elegant, efficient code. When I'm not coding, you'll find me 
              contributing to open-source projects or exploring the latest tech trends.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="gradient-card shadow-card p-6 border-border hover:shadow-glow transition-smooth">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                  <p className="text-muted-foreground">
                    Writing maintainable, well-documented code following best practices and design patterns.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="gradient-card shadow-card p-6 border-border hover:shadow-glow transition-smooth">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Rocket className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fast Learner</h3>
                  <p className="text-muted-foreground">
                    Quick to adapt to new technologies and frameworks, always staying current with industry trends.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="gradient-card shadow-card p-6 border-border hover:shadow-glow transition-smooth">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Team Player</h3>
                  <p className="text-muted-foreground">
                    Excellent communication skills and experience working in agile development teams.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
