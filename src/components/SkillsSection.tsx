const skills = {
  languages: ["Python", "JavaScript", "HTML", "CSS"],
  frameworks: ["React.js", "TensorFlow", "OpenCV", "MediaPipe"],
  tools: ["Firebase", "Node.js", "Express.js", "Git"]
};

const SkillsSection = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="space-y-12">
          <div className="portfolio-card">
            <h3 className="text-xl font-semibold mb-6 text-center">Languages</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.languages.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="portfolio-card">
            <h3 className="text-xl font-semibold mb-6 text-center">Frameworks & Libraries</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.frameworks.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="portfolio-card">
            <h3 className="text-xl font-semibold mb-6 text-center">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.tools.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;