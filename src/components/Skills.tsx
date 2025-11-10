import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const technicalSkills = [
    "Python", "SQL", "PowerBI", "Tableau", "Advanced Excel",
    "Pandas", "NumPy", "Matplotlib", "Seaborn", "Git/GitHub",
    "Firebase", "SQLite", "Flutter", "Statistical Analysis", "Predictive Modeling"
  ];

  const businessSkills = [
    "Strategic Analysis", "Stakeholder Management", "Business Intelligence",
    "KPI Tracking", "Dashboard Development", "Data Storytelling",
    "Market Research", "Competitive Analysis", "Agile Methodologies",
    "Process Optimization", "Executive Presentations", "Workshop Facilitation"
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            Technical & Business Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="animate-slide-in">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <span className="w-2 h-8 gradient-nordic rounded-full mr-3"></span>
                  Data Analytics & Tools
                </h3>
                <p className="text-muted-foreground">
                  Advanced technical capabilities for data analysis and visualization
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-primary/10 text-primary hover:bg-primary hover:text-white transition-smooth cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Business Skills */}
            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <span className="w-2 h-8 gradient-gold rounded-full mr-3"></span>
                  Business Capabilities
                </h3>
                <p className="text-muted-foreground">
                  Strategic thinking and leadership for organizational success
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {businessSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-secondary/20 text-foreground hover:bg-secondary hover:text-secondary-foreground transition-smooth cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
