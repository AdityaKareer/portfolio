import innovationIcon from "@/assets/innovation-icon.jpg";
import businessIcon from "@/assets/business-icon.jpg";
import techIcon from "@/assets/tech-icon.jpg";

export const About = () => {
  const strengths = [
    {
      icon: techIcon,
      title: "Data Analytics Expertise",
      description: "Advanced proficiency in Python, SQL, PowerBI, and Tableau for transforming complex datasets into actionable insights.",
    },
    {
      icon: businessIcon,
      title: "Strategic Consulting",
      description: "Proven ability to collaborate with senior stakeholders, diagnose operational challenges, and deliver data-driven recommendations.",
    },
    {
      icon: innovationIcon,
      title: "Business Intelligence",
      description: "Expert in dashboard development, KPI tracking, and translating technical analytics into clear business value.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Data-Driven Solutions.
            <span className="block mt-2 text-primary">Strategic Impact.</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Currently pursuing Master's in Data Science at Stockholm University, I combine advanced analytical capabilities with business strategy expertise. My approach transforms complex data into clear insights that drive measurable results and informed decision-making.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {strengths.map((strength, index) => (
            <div
              key={strength.title}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <img 
                  src={strength.icon} 
                  alt={strength.title}
                  className="w-20 h-20 object-contain mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{strength.title}</h3>
              <p className="text-muted-foreground text-center text-balance">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
