import { Instagram, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Muhammed Jasil</h3>
            <p className="text-primary-foreground/80">
              Digital Marketing Executive specializing in performance marketing and ROI-driven campaigns.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Experience
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/muhammedjasil-digital-marketer/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:muhammedjasil01@gmail.com.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="mailto:muhammedjasil01@gmail.com.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth"
                aria-label="Email"
              >
                <FaWhatsapp  className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>© {currentYear} Muhammed Jasil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
