import { useInView } from "react-intersection-observer";

interface SkillProps {
  icon: string; // ✅ now takes image URL instead of ReactNode
  name: string;
  category: string;
  delay?: number;
}

const SkillCard = ({ icon, name, category, delay = 0 }: SkillProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`group bg-card rounded-xl p-6 shadow-soft hover-lift cursor-pointer ${
        inView ? "animate-scale-in" : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center ">
        {/* ✅ Image logo instead of Lucide icon */}
        <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center overflow-hidden group-hover:bg-accent transition-smooth group-hover:scale-110">
          <img
            src={icon}
            alt={name}
            className=" object-contain group-hover:brightness-0 group-hover:invert transition-all"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>
      </div>
    </div>
  );
};

export const Skills = () => {
  const skills = [
    {
      icon: "/logos/meta-ads.png",
      name: "Meta Ads",
      category: "Social Media Marketing",
    },
    {
      icon: "/logos/google-ads.png",
      name: "Google Ads",
      category: "PPC Advertising",
    },
    {
      icon: "/logos/Mailchimp.png",
      name: "Mailchimp",
      category: "Email Marketing",
    },
    {
      icon: "/logos/seo.png",
      name: "SEO",
      category: "Organic Growth",
    },
    {
      icon: "/logos/analytics.png",
      name: "Google Analytics",
      category: "Analytics & Tracking",
    },
    {
      icon: "/logos/gtm.png",
      name: "GTM",
      category: "Tag Management",
    },
    {
      icon: "/logos/canva.png",
      name: "Canva",
      category: "Design",
    },
    {
      icon: "/logos/premiere-pro.png",
      name: "Premiere Pro",
      category: "Video Editing",
    },
  ];

const tools = [
  "Facebook Business Manager",
  "Google Ads Manager",
  "TikTok Ads Manager",
  "Snapchat Ads Manager",
  "Google Tag Manager",
  "Google Analytics 4",
  "Ahrefs",
  "SEMrush",
  "Canva Pro",
  "Adobe Premiere Pro",
  "Meta Pixel",
  "Shopify",
  "WordPress",
  "Mailchimp",
  "Clarity by Microsoft",
];


  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Tools</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise across the full digital marketing spectrum
          </p>
        </div>

        {/* Core Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} delay={index * 50} />
          ))}
        </div>

        {/* Tools & Platforms */}
        <div
          className="bg-card rounded-2xl p-8 shadow-soft animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-smooth cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
