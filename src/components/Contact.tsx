import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Drive Impact
              <span className="block mt-2 bg-clip-text text-transparent gradient-nordic">
                Through Data & Strategy
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
              Available from mid-January 2026 for opportunities in Sweden. Seeking roles where I can leverage data analytics and strategic thinking to deliver measurable business results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-scale-in">
            <Button
              variant="outline"
              className="h-20 flex-col gap-2 hover:border-primary hover:bg-primary/10 transition-smooth group"
              asChild
            >
              <a href="mailto:adityakareer01@gmail.com">
                <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-smooth" />
                <span className="text-sm">Email Me</span>
              </a>
            </Button>
            
            <Button
              variant="outline"
              className="h-20 flex-col gap-2 hover:border-primary hover:bg-primary/10 transition-smooth group"
              asChild
            >
              <a href="https://linkedin.com/in/aditya-kareer-a88397159" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-smooth" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </Button>
            
            <Button
              variant="outline"
              className="h-20 flex-col gap-2 hover:border-primary hover:bg-primary/10 transition-smooth group"
              asChild
            >
              <a href="tel:+46764502883">
                <Github className="h-6 w-6 text-primary group-hover:scale-110 transition-smooth" />
                <span className="text-sm">+46 76 450 2883</span>
              </a>
            </Button>
            
            <Button
              variant="outline"
              className="h-20 flex-col gap-2 hover:border-primary hover:bg-primary/10 transition-smooth group"
            >
              <MapPin className="h-6 w-6 text-primary group-hover:scale-110 transition-smooth" />
              <span className="text-sm">Stockholm, SE</span>
            </Button>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-elegant animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-4">Seeking Opportunities</h3>
            <p className="text-muted-foreground mb-6">
              Data Analyst, Business Intelligence, Strategy Consulting, or Analytics roles where I can deliver strategic insights and measurable business impact. Available from mid-January 2026.
            </p>
            <Button size="lg" className="gradient-nordic text-white border-0 shadow-elegant" asChild>
              <a href="mailto:adityakareer01@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
