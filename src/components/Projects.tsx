import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Centralized Rehab Portal",
      subtitle: "Operational Analytics & Process Optimization",
      description: "Led comprehensive data analysis of existing workflows, identifying inefficiencies and designing data-driven solutions that achieved 90% improvement in operational efficiency through stakeholder analysis and quantitative gap assessment.",
      tech: ["Python", "PowerBI", "SQL", "Excel"],
      impact: "90% efficiency improvement",
      business: "Process redesign & KPI tracking",
      award: null,
    },
    {
      title: "ScanPulse",
      subtitle: "CyberSecurity & Business Intelligence",
      description: "Conducted comprehensive market analysis and competitive benchmarking using data-driven methodologies. Developed analytical frameworks translating technical Cybersecurity metrics into strategic insights with quantified ROI potential.",
      tech: ["Python", "Tableau", "Market Research", "Data Visualization"],
      impact: "3rd Place, Innovex 2024",
      business: "Strategic analysis & value proposition",
      award: "3rd Place",
    },
    {
      title: "Safety Pin",
      subtitle: "Mobile App Analytics & UX Optimization",
      description: "Designed and implemented comprehensive analytics infrastructure using Firebase and SQLite to track user behavior patterns. Analyzed location data and engagement metrics to optimize emergency response features and service delivery.",
      tech: ["Flutter", "Firebase", "SQLite", "Data Pipelines"],
      impact: "Real-time monitoring system",
      business: "User behavior analysis",
      award: null,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Analytics Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data-driven solutions delivering measurable business impact through strategic analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group hover:shadow-elegant transition-smooth animate-scale-in border-2 hover:border-primary/50 flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-smooth mb-1">
                        {project.title}
                      </CardTitle>
                      {project.award && (
                        <div className="flex items-center gap-1 text-secondary mb-2">
                          <Trophy className="h-4 w-4" />
                          <span className="text-xs font-semibold">{project.award}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-smooth">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-smooth">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-primary/80 mb-2">{project.subtitle}</p>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="pt-4 border-t space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full gradient-nordic mt-1.5 flex-shrink-0"></span>
                        <div>
                          <span className="text-xs font-medium block">Impact:</span>
                          <span className="text-xs text-muted-foreground">{project.impact}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full gradient-gold mt-1.5 flex-shrink-0"></span>
                        <div>
                          <span className="text-xs font-medium block">Business Value:</span>
                          <span className="text-xs text-muted-foreground">{project.business}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Achievements Section */}
          <div className="mt-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-center mb-8">Recognition & Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center p-6 border-2 border-primary/20 hover:border-primary/50 transition-smooth">
                <Trophy className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h4 className="font-bold mb-2">Smart India Hackathon Winner</h4>
                <p className="text-sm text-muted-foreground">2023 National Competition</p>
              </Card>
              <Card className="text-center p-6 border-2 border-primary/20 hover:border-primary/50 transition-smooth">
                <Trophy className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h4 className="font-bold mb-2">Innovex 3rd Place</h4>
                <p className="text-sm text-muted-foreground">2024 Project Competition</p>
              </Card>
              <Card className="text-center p-6 border-2 border-primary/20 hover:border-primary/50 transition-smooth">
                <Trophy className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h4 className="font-bold mb-2">IT Quest State Champion</h4>
                <p className="text-sm text-muted-foreground">2022 First Place</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
