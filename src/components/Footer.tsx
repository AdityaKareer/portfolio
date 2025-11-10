import { Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t py-12 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Aditya Kareer</h3>
              <p className="text-sm text-muted-foreground">
                Data Science Graduate • Strategy & Analytics
              </p>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/aditya-kareer-a88397159"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-smooth"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/adityakareer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-smooth"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:adityakareer01@gmail.com"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-smooth"
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Aditya Kareer. Designed with precision and passion.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
