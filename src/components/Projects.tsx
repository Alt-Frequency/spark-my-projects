import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online shopping platform with user authentication, product management, and payment integration.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task tracker with real-time updates, drag-and-drop interface, and team collaboration features.",
      tech: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location search, forecasts, and beautiful data visualizations.",
      tech: ["React", "Tailwind CSS", "OpenWeather API", "Chart.js"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for portfolios with markdown support and dynamic page generation.",
      tech: ["Vue.js", "Express", "MongoDB", "Markdown"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured Projects
        </h2>
        <div className="w-24 h-1 gradient-hero mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="gradient-card shadow-card border-border hover:shadow-glow transition-smooth group"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-border hover:bg-primary/10 transition-smooth"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="gradient-hero hover:shadow-glow transition-smooth"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
