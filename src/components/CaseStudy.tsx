import { TrendingUp, Target, DollarSign, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useInView } from "react-intersection-observer";
import caseStudyDashboard from "@/assets/case-study-dashboard.jpg";

interface MetricProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  progress: number;
  delay?: number;
}

const MetricCard = ({ icon, label, value, progress, delay = 0 }: MetricProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-card rounded-xl p-6 shadow-soft hover-lift transition-all ${inView ? "animate-fade-in-up" : "opacity-0"
        }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
          {icon}
        </div>
        <div>
          <div className="text-sm text-muted-foreground">{label}</div>
          <div className="text-2xl font-bold text-gradient">{value}</div>
        </div>
      </div>
      <Progress value={inView ? progress : 0} className="h-2" />
    </div>
  );
};

export const CaseStudy = () => {
  return (
    <section id="case-studies" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Case Study 
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Scaling Brand Visibility & ROI Through Ads and SEO
          </p>
        </div>

        {/* Overview Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <div className="relative animate-scale-in">
            <div className="rounded-2xl overflow-hidden shadow-strong hover-lift">
              <img
                src={caseStudyDashboard}
                alt="Analytics Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <p className="text-muted-foreground leading-relaxed">
              Executed a full-funnel digital marketing strategy combining paid ads and SEO to
              scale brand performance. Managed Meta and Google Ads campaigns, achieving consistent
              ROI improvements, and implemented on-page + content SEO to increase organic
              visibility across high-intent keywords.
            </p>

            <div className="space-y-6">
              {/* Step 1️⃣ */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Performance Marketing</h4>
                  <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1">
                    <li>Managed 30+ ad campaigns on Meta and Google.</li>
                    <li>Generated over 25,000 qualified leads with a 45% lower CPC.</li>
                    <li>Achieved up to 3.5x ROAS through creative testing and audience optimization.</li>
                  </ul>
                </div>
              </div>

              

              {/* Step 3️⃣ */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">SEO & Content Growth (Media Market Project)</h4>
                  <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1">
                    <li>
                      Ranked #1–3 positions for high-value keywords like “Bose distributor in Dubai”
                      and “Electronics Distributor UAE”.
                    </li>
                    <li>Improved impressions to 6K+ and achieved 194 website clicks in 11 days.</li>
                    <li>
                      Built backlinks via Medium articles and GEO optimization for AI-driven search engines.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Step 2️⃣ */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">E-commerce & Lead Funnels</h4>
                  <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1">
                    <li>Ran conversion-focused campaigns (catalog, video, and retargeting).</li>
                    <li>Improved checkout conversion rate with optimized creatives and landing pages.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Metric Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            icon={<TrendingUp className="w-6 h-6" />}
            label="ROAS Improvement"
            value="3.5x"
            progress={85}
            delay={100}
          />
          <MetricCard
            icon={<Target className="w-6 h-6" />}
            label="CPC Reduction"
            value="45%"
            progress={75}
            delay={200}
          />
          <MetricCard
            icon={<Users className="w-6 h-6" />}
            label="Leads Generated"
            value="25,000+"
            progress={95}
            delay={300}
          />
          <MetricCard
            icon={<DollarSign className="w-6 h-6" />}
            label="Revenue Growth"
            value="₹2.5 Cr"
            progress={90}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};
