import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, ShoppingCart, Zap, Shield, Truck, ArrowLeft, Check } from "lucide-react";
import synlabProduct from "@/assets/synlab-product.jpg";

const ProductDetail = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  const product = {
    name: "SynLab",
    tagline: "The Portable Lab",
    description:
      "The first portable smart laboratory in our ecosystem. SynLab revolutionizes hands-on learning by providing a complete, modular lab experience that travels with you. Designed for safety, accessibility, and affordability.",
    price: 3999,
    originalPrice: 4999,
    discount: 25,
    rating: 4.8,
    reviewCount: 124,
    image: synlabProduct,
    features: [
      "Compact & portable design",
      "AI-powered dashboard integration",
      "Real-time data visualization",
      "Safety-first engineering",
      "Modular & expandable",
      "Upgradable"
    ],
  };

  const reviews = [
    {
      name: "Dr. Sarah Chen",
      role: "Science Educator",
      rating: 5,
      comment:
        "SynLab has transformed how we teach practical science. Students are more engaged than ever!",
      date: "2 weeks ago",
    },
    {
      name: "Prof. James Williams",
      role: "University Researcher",
      rating: 4,
      comment:
        "Great for introductory demonstrations. Looking forward to more advanced modules.",
      date: "1 month ago",
    },
  ];

  const handleBuyNow = () => {
    setShowAuthPrompt(true);
  };

  const handleAddToCart = () => {
    setShowAuthPrompt(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Auth Prompt Modal */}
      {showAuthPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Sign In Required
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              Please login or create an account to continue with your purchase.
            </p>
            <div className="flex flex-col gap-3">
              <Link to="/login">
                <Button variant="hero" size="lg" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="lg" className="w-full">
                  Create Account
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="lg"
                className="w-full"
                onClick={() => setShowAuthPrompt(false)}
              >
                Continue Browsing
              </Button>
            </div>
          </div>
        </div>
      )}

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </button>

          {/* Product Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden bg-card border border-border">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
                {/* Discount badge */}
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                  {product.discount}% OFF
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <p className="text-accent font-medium mb-2">{product.tagline}</p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "text-accent fill-accent"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-foreground font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">
                    ({product.reviewCount} reviews)
                  </span>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-bold text-foreground">
                  ₹{product.price.toFixed(2)}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  ₹{product.originalPrice.toFixed(2)}
                </span>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-foreground font-medium">Quantity:</span>
                <div className="flex items-center border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-muted transition-colors text-foreground"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-border text-foreground">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-muted transition-colors text-foreground"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="hero"
                  size="xl"
                  className="flex-1 gap-2"
                  onClick={handleBuyNow}
                >
                  <Zap className="w-5 h-5" />
                  Buy Now
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="flex-1 gap-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">1-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Truck className="w-5 h-5" />
                  <span className="text-sm">Free Shipping</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <section className="border-t border-border pt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Customer Reviews
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card/60 border border-border"
                >
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-accent fill-accent"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-foreground mb-4">"{review.comment}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-foreground font-medium">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
