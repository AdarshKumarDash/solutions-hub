import { Cpu, LayoutDashboard, FlaskConical, GraduationCap } from "lucide-react";

const EcosystemSection = () => {
  const ecosystemItems = [
    {
      icon: Cpu,
      title: "Hardware",
      description:
        "Crafting intelligent, modular hardware systems that feel powerful yet simple—designed to travel anywhere, evolve over time, and inspire hands-on discovery.",
    },
    {
      icon: LayoutDashboard,
      title: "Dashboard",
      description:
        "Building unified digital dashboards that transform raw data into clarity, with future-ready AI integration for insights, guidance, and smarter decision-making.",
    },
    {
      icon: FlaskConical,
      title: "Experiments",
      description:
        "Enabling guided and open-ended experimentation that encourages curiosity, creativity, and real-world problem solving beyond textbooks.",
    },
    {
      icon: GraduationCap,
      title: "Learning",
      description:
        "Creating immersive learning journeys where theory meets practice, empowering users to learn by doing, failing, improving, and mastering concepts.",
    },
  ];

  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The SynLab Ecosystem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete ecosystem designed for innovation and discovery
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystemItems.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-b from-card to-card/50 border border-border overflow-hidden transition-all duration-500 hover:border-accent/50 hover:-translate-y-2"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
