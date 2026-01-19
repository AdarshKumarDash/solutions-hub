import { Target, Rocket, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const cards = [
    {
      icon: Target,
      title: "Our Purpose",
      description:
        "SynLab exists to reimagine how innovation, learning, and technology come together to solve real-world challenges in an accessible and meaningful way.",
    },
    {
      icon: Rocket,
      title: "Our Mission",
      description:
        "To build thoughtful, future-ready solutions and ecosystems that empower learners, creators, and institutions beyond traditional limitations.",
    },
    {
      icon: Lightbulb,
      title: "Our Approach",
      description:
        "We follow a design-first, problem-driven mindset—combining creativity, technology, and scalability while keeping simplicity, safety, and impact at the core.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Safe, accessible, and affordable solutions for real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(243_75%_58%/0.15)]"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <card.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
