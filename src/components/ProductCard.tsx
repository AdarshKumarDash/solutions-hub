import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import synlabProduct from "@/assets/synlab-product.jpg";

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  image: string;
  demoUrl?: string;
  productUrl: string;
}

const ProductCard = ({
  name,
  tagline,
  description,
  image,
  demoUrl = "#",
  productUrl,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-3xl overflow-hidden bg-card border border-border transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_60px_hsl(243_75%_58%/0.2)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay with buttons - visible on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent flex items-center justify-center gap-4 transition-all duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <a href={demoUrl}>
            <Button variant="glow" size="lg" className="gap-2">
              <Play className="w-4 h-4" />
              View Demo
            </Button>
          </a>
          <Link to={productUrl}>
            <Button variant="accent" size="lg" className="gap-2">
              Details
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-accent font-medium mb-3">{tagline}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

// Export the main product for use in other components
export const SynLabProduct = () => (
  <ProductCard
    name="SynLab"
    tagline="The Portable Lab"
    description="The first portable smart laboratory in our ecosystem. Safe, accessible, and affordable."
    image={synlabProduct}
    productUrl="/product/synlab"
    demoUrl="#demo"
  />
);

export default ProductCard;
