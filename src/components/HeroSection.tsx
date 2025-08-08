import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="gradient-text">Ganesh Sai Bendre</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Aspiring Full Stack Dev & AI Enthusiast
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground/80 font-light italic">
                Turning caffeine and code into cool stuff.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="gradient-button"
                onClick={() => {
                  // Create a link to download the resume
                  const link = document.createElement('a');
                  link.href = '/GaneshBendre(1).pdf';
                  link.download = 'GaneshBendre(1).pdf';
                  link.click();
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden hero-glow">
                <img
                  src={profileImage}
                  alt="Ganesh Sai Bendre"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -inset-4 bg-accent-gradient rounded-3xl opacity-20 blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;