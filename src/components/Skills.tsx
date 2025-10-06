import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = {
    "Languages": ["JavaScript", "TypeScript", "Python", "Java", "HTML/CSS"],
    "Frontend": ["React", "Next.js", "Tailwind CSS", "Redux", "Vue.js"],
    "Backend": ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    "Tools": ["Git", "Docker", "AWS", "VS Code", "Figma"]
  };

  return (
    <section id="skills" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills & Technologies
        </h2>
        <div className="w-24 h-1 gradient-hero mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-primary/20 transition-smooth border-border"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
