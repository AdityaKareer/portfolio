import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  const education = [
    {
      year: "2025 - 2027",
      degree: "Master's Degree in Data Science",
      subtitle: "Decision Analysis and Statistics",
      institution: "Stockholm University, Sweden",
      description: "Focus on Strategic Analytics, Business Intelligence, and Data-Driven Decision Making. Expected graduation June 2027.",
      highlights: [
        "Advanced statistical analysis and predictive modeling",
        "Strategic business intelligence and analytics",
        "Machine learning and data-driven decision frameworks"
      ]
    },
    {
      year: "2022 - 2025",
      degree: "Bachelor's Degree in Information Technology",
      subtitle: "Business Systems Focus",
      institution: "Don Bosco Institute of Technology, India",
      description: "Graduated May 2025 with strong academic performance. Foundation in technical systems with business integration.",
      highlights: [
        "Strong academic performance across all domains",
        "Business systems integration and analytics",
        "Multiple national-level competition wins"
      ]
    }
  ];

  const experience = {
    year: "February 2024",
    role: "Strategy & Technology Consultant (Intern)",
    company: "Jubilee Carrier LLP, Mumbai",
    description: "Collaborated with senior business stakeholders to diagnose operational challenges and develop data-driven strategic recommendations for executive decision-making.",
    achievements: [
      "Led end-to-end implementation of AI-powered automation delivering 90% reduction in manual processing time",
      "Conducted rigorous data analysis, performance tracking, and iterative optimization",
      "Coordinated cross-functional project initiatives and managed deliverables",
      "Created executive-level reports synthesizing complex technical data into actionable business insights"
    ]
  };

  const certifications = [
    "BCG Strategy Consulting Job Simulation",
    "Data-Driven Consulting Frameworks",
    "Process Automation Methodologies"
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience & Education
            </h2>
            <p className="text-lg text-muted-foreground">
              Combining academic excellence with hands-on strategic consulting
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-3 h-8 gradient-nordic rounded-full mr-3"></span>
              Professional Experience
            </h3>
            
            <div className="relative pl-8 border-l-2 border-primary/30 animate-slide-in">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full gradient-nordic"></div>
              
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {experience.year}
                </span>
              </div>
              
              <h4 className="text-2xl font-bold mb-1">{experience.role}</h4>
              <p className="text-lg text-primary mb-3">{experience.company}</p>
              <p className="text-muted-foreground mb-4">{experience.description}</p>
              
              <ul className="space-y-2">
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-3 h-8 gradient-gold rounded-full mr-3"></span>
              Education
            </h3>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="relative pl-8 border-l-2 border-secondary/30 animate-slide-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full gradient-gold"></div>
                  
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-secondary/20 text-foreground text-sm font-medium rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                  <p className="text-sm font-medium text-secondary mb-1">{edu.subtitle}</p>
                  <p className="text-lg text-primary/90 mb-3">{edu.institution}</p>
                  <p className="text-muted-foreground mb-4 text-sm">{edu.description}</p>
                  
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-center">Professional Development</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <Badge
                  key={cert}
                  variant="secondary"
                  className="px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-smooth text-sm"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
