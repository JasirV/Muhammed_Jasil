import { Building2, Calendar } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  index: number;
}

const ExperienceItem = ({ title, company, period, description, index }: ExperienceItemProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`relative pl-8 pb-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/30" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-4 h-4 -ml-[7px] rounded-full bg-accent border-4 border-background shadow-medium" />
      
      {/* Content card */}
      <div className="bg-card rounded-2xl p-6 shadow-soft hover-lift">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building2 className="w-4 h-4" />
              <span className="font-medium">{company}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-accent bg-accent/10 px-4 py-2 rounded-full">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{period}</span>
          </div>
        </div>
        
        <ul className="space-y-2">
          {description.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground">
              <span className="text-accent mt-1">▪</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Experience = () => {
  const experiences = [
    {
      title: "Senior Digital Marketing Executive",
      company: "Adzpire Advertising",
      period: "2024 - Present",
      description: [
        "Managing Meta Ads, Google Ads, and TikTok campaigns for 10+ clients across sales and lead generation",
        "Achieved 3x ROAS improvement through strategic campaign optimization and audience targeting",
        "Implemented conversion tracking, GTM, and GA4 for data-driven decision making",
        "Led creative strategy development resulting in 40% higher engagement rates"
      ]
    },
    {
      title: "Digital Marketing Executive",
      company: "Britfort Academy",
      period: "2022 - 2023",
      description: [
        "Managed end-to-end digital marketing campaigns generating  qualified leads",
        "Optimized Meta and Google Ads resulting in 50% reduction in cost per lead",
        "Created high-converting landing pages with A/B testing strategies",
        "Developed SEO strategies improving organic traffic by 200%"
      ]
    },
    {
  title: "Freelance Digital Marketing",
  company: "",
  period: "",
  description: [
    "Specialized in performance marketing across Meta and Google Ads, focusing on lead generation and sales growth",
    "Managed ad campaigns that delivered qualified leads and  improve in conversion rates.",
    "Implemented data-backed optimizations to reduce CPA and scale high-performing campaigns",
    "Worked on eCommerce projects involving campaign setup, product listing optimization, and dynamic remarketing strategies"
  ]
}

  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            2.5+ years of driving results through performance marketing and data-driven strategies
          </p>
        </div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
