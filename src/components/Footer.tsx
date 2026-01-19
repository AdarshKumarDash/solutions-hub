import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="text-2xl font-bold text-foreground">
            <span className="text-accent">Syn</span>Lab
          </Link>
          
          <div className="flex gap-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#ecosystem" className="text-muted-foreground hover:text-foreground transition-colors">
              Ecosystem
            </a>
            <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
              Products
            </a>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © 2024 SynLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
