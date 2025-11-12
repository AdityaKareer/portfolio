import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional workspace" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
            Aditya Kareer
          </h2>
          
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            Available to Start: Mid-January 2026 • Stockholm, Sweden
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Transforming Data Into Business Value
            <span className="block mt-2 bg-clip-text text-transparent gradient-nordic">
              Strategic Impact
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Data Science graduate combining advanced analytics with business strategy to deliver measurable results and drive data-driven decision-making.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gradient-nordic text-white border-0 shadow-elegant group" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button size="lg" variant="ghost" className="text-primary hover:bg-primary/10" asChild>
              <a href="mailto:adityakareer01@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary">90%</div>
              <div className="text-sm text-muted-foreground mt-1">Process Efficiency Gain</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground mt-1">National Awards</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary">2027</div>
              <div className="text-sm text-muted-foreground mt-1">Master's Completion</div>
            </div>
          </div>
        </div>
      </div>
      

    </section>
  );
};
