import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  github?: string;
  live?: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "Sign Language Recognition System",
    description: "TensorFlow + OpenCV based real-time sign language detection system with advanced computer vision capabilities",
    github: "https://github.com/ganeshsai4408/sign-language-recognition",
    tech: ["TensorFlow", "OpenCV", "Python", "MediaPipe"]
  },
  
  {
    title: "Notes App",
    description: "React.js notes application with lightning-fast 1-second search and local storage persistence",
    live: "https://notes-app-nxbn.vercel.app/",
    tech: ["React.js", "Local Storage", "Search", "Responsive"]
  },
  {
    title: "AI Ticketing System",
    description: "AI-powered ticket routing system with Inngest workflows and intelligent skill-based admin assignment",
    live: "https://ai-ticket-system-frontend-nw7b.vercel.app/",
    tech: ["AI", "Inngest", "Workflow", "Admin Routing"]
  },
  {
    title: "GenAI Discord Bot",
    description: "Node.js Discord bot powered by OpenAI for intelligent study planning and educational assistance",
    live: "https://gen-bot-web.vercel.app/",
    tech: ["Node.js", "OpenAI", "Discord API", "AI Integration"]
  },
  {
    title: "Responsive Food Ordering Web App",
    description: "A clean, responsive food ordering web application that lets users explore meals, customize selections, add items to cart, and place orders smoothly. Built to offer a seamless and intuitive user experience. This project was developed as part of an internship task to demonstrate frontend proficiency and real-world usability.",
    live: "https://react-food-order-app-swart.vercel.app/",
    tech: ["React.js","JavaScript (ES6+)","HTML5","CSS3","Context API","Vercel (Deployment)"]
  },
  {
    title: "URL Shortener Web App",
    description: "A full-stack URL shortener that generates short links for long URLs, tracks click counts, and displays all shortened URLs with stats — built using Node.js, Express, MongoDB, and EJS.",
    live: "https://url-shortner-vvaq.onrender.com",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "HTML5", "CSS3", "JavaScript"]

  },



];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, AI, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card group">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-secondary/50 text-secondary-foreground rounded-md border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;