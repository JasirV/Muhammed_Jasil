import { GraduationCap, Award } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface EducationItemProps {
  icon: React.ReactNode;
  title: string;
  institution: string;
  year: string;
  delay?: number;
}

const EducationCard = ({ icon, title, institution, year, delay = 0 }: EducationItemProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-card rounded-xl p-6 shadow-soft hover-lift ${
        inView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-muted-foreground font-medium mb-1">{institution}</p>
          <p className="text-sm text-accent">{year}</p>
        </div>
      </div>
    </div>
  );
};

export const Education = () => {
  const certifications = [
    "Perfomance marketing mastery course",
    "Google Analytics",
    "Google search Ads Certification",
    "Fundamentals of Digital Marketing by Google",
    "Google display Ads Certification",
    "Diploma in Digital Marketing"
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <EducationCard
            icon={<GraduationCap className="w-6 h-6" />}
            title="Bachelor of Commerce"
            institution="University of Calicut"
            year="2019 - 2022"
            delay={100}
          />
          <EducationCard
            icon={<GraduationCap className="w-6 h-6" />}
            title="Diploma in Digital Marketing"
            institution="Spyrosys Digital Marketing Training Institute"
            year="2022"
            delay={200}
          />
        </div>

        {/* Certifications */}
        <div className="bg-card rounded-2xl p-8 shadow-soft animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-accent" />
            <h3 className="text-2xl font-bold">Professional Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth"
              >
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
