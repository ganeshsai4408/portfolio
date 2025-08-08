import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const contactLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ganeshsaibendre4408@gmail.com",
      href: "mailto:ganeshsaibendre4408@gmail.com"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "ganeshsai4408",
      href: "https://github.com/ganeshsai4408"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "ganesh-sai-bendre",
      href: "https://www.linkedin.com/in/ganesh-sai-bendre-929a9b2a4/"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((contact, index) => (
            <Button
              key={index}
              variant="outline"
              className="portfolio-card h-auto p-6 flex-col gap-4 border-border/50 hover:border-primary/50"
              onClick={() => window.open(contact.href, '_blank')}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                {contact.icon}
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground mb-1">{contact.label}</div>
                <div className="text-sm text-muted-foreground">{contact.value}</div>
              </div>
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </Button>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <span className="text-primary font-medium">React.js</span>
            <span>+</span>
            <span className="text-primary font-medium">Tailwind CSS</span>
            <span>+</span>
            <span className="text-primary font-medium">TypeScript</span>
          </div>
          <div className="mt-2 text-xs text-muted-foreground/60">
            © 2024 Ganesh Sai Bendre. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;