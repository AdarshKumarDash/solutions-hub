import { SynLabProduct } from "./ProductCard";

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Products Preview
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions designed to solve real-world problems
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <SynLabProduct />
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            More products coming soon. Stay tuned!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
