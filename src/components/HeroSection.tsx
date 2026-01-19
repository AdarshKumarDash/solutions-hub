import heroIllustration from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(260_30%_15%)_0%,_hsl(230_25%_8%)_70%)]" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Rethinking{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                Problem-Driven
              </span>{" "}
              Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              SynLab is building a new-age innovation ecosystem where safety, 
              accessibility, and affordability come together seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#products">
                <button className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_40px_hsl(243_75%_58%/0.4)] hover:opacity-90">
                  Explore Products
                </button>
              </a>
              <a href="#about">
                <button className="w-full sm:w-auto px-8 py-4 rounded-lg border border-border bg-transparent text-foreground font-semibold text-lg transition-all duration-300 hover:bg-muted">
                  Learn More
                </button>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <img
              src={heroIllustration}
              alt="SynLab Innovation Ecosystem"
              className="relative rounded-2xl shadow-2xl w-full max-w-lg mx-auto lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
