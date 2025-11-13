import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-fade-in" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">      
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Muhammed Jasil</span>
            </h1>
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Digital Marketer + Perfomance Marketing Executive
            </div>
            {/* <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Driving ROI through Meta, Google & TikTok Ads for eCommerce and Lead Gen.
            </p> */}
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="group shadow-medium hover:shadow-strong transition-smooth"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              
              {/* <Button 
                size="lg" 
                variant="outline"
                className="group hover-lift"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button> */}
            </div>
            
            <div className="flex items-center gap-4 pt-6">
              <a 
                href="https://www.linkedin.com/in/muhammedjasil-digital-marketer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm font-medium">Connect on LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="relative animate-scale-in">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-strong hover-lift">
                <img 
                  src={profilePhoto} 
                  alt="Muhammed Jasil" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
