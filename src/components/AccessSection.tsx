import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const AccessSection = () => {
  const [activeTab, setActiveTab] = useState<"register" | "login">("register");

  return (
    <section id="access" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(260_30%_15%)_0%,_hsl(230_25%_8%)_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Started
            </h2>
            <p className="text-muted-foreground">
              Create an account to access dashboards, tutorials, and future products.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "register"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              Register
            </button>
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "login"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              Login
            </button>
          </div>

          {/* Form */}
          <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-8">
            {activeTab === "register" ? (
              <form className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Name"
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone"
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Password"
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <Link to="/terms" className="text-accent hover:underline">
                      Terms & Conditions
                    </Link>
                  </label>
                </div>
                <Link to="/register">
                  <Button variant="hero" size="lg" className="w-full mt-4">
                    Register
                  </Button>
                </Link>
              </form>
            ) : (
              <form className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Password"
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <label htmlFor="remember" className="text-sm text-muted-foreground">
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-accent hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Link to="/login">
                  <Button variant="hero" size="lg" className="w-full mt-4">
                    Login
                  </Button>
                </Link>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
