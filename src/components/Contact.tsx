import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <div className="w-24 h-1 gradient-hero mx-auto mb-12 rounded-full" />

        <Card className="gradient-card shadow-glow p-8 md:p-12 border-border text-center">
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm currently looking for new opportunities and would love to hear from you. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              size="lg"
              className="gradient-hero hover:shadow-glow transition-smooth"
              asChild
            >
              <a href="mailto:alex.chen@example.com">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary hover:bg-primary/10 transition-smooth"
              asChild
            >
              <a href="/resume.pdf" download>
                <FileText className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6 pt-8 border-t border-border">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
