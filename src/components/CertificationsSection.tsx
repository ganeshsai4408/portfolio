import { Award, Calendar, Trophy, Users } from "lucide-react";

interface Certification {
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: React.ReactNode;
}

const certifications: Certification[] = [
  {
    title: "Microsoft Azure AI Engineer Associate",
    organization: "ICT Academy",
    date: "March 2025",
    description: "Completed AI deployment training on Azure. Certified with B grade.",
    icon: <Award className="w-6 h-6" />
  },
  {
    title: "TechFiesta 2K23 Hackathon – 2nd Place",
    organization: "TechFiesta",
    date: "2023",
    description: "Won 2nd place in 24hr tech hackathon.",
    icon: <Trophy className="w-6 h-6" />
  },
  {
    title: "TEDx Marketing Committee Member",
    organization: "TEDx",
    date: "2023",
    description: "Managed promo/engagement strategy for TEDx event.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Street Cause – Lead Marketer",
    organization: "Street Cause",
    date: "2023",
    description: "Led marketing for two major community events.",
    icon: <Users className="w-6 h-6" />
  }
];

const CertificationsSection = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition and certifications that showcase my commitment to continuous learning and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="portfolio-card group">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="font-medium">{cert.organization}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {cert.date}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;