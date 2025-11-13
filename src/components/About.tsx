import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Users, DollarSign } from "lucide-react";

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay?: number;
}

const StatCard = ({ icon, value, label, delay = 0 }: StatProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-soft hover-lift"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        {inView ? value : "0"}
      </div>
      <div className="text-muted-foreground text-center font-medium">{label}</div>
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl  mx-auto leading-relaxed">
            I’m a Professional Digital Marketing Executive, with over 2.5 years of experience. I specialize in performance marketing, SEO, and paid ad campaigns that deliver measurable growth and consistent lead generation. Skilled in crafting For sales-driven strategies that enhance online visibility and conversions.

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon={<Users className="w-8 h-8" />}
            value="25+"
            label="Happy Clients"
            delay={100}
          />
          <StatCard
            icon={<TrendingUp className="w-8 h-8" />}
            value="25,000+"
            label="Leads Generated"
            delay={200}
          />
          <StatCard
            icon={<DollarSign className="w-8 h-8" />}
            value="₹2.5 Cr"
            label="Revenue Driven"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};
