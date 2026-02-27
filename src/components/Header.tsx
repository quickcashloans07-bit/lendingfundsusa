import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import lendingFundsUsaLogo from "@/assets/lendingfundsusa-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0">
          <img src={lendingFundsUsaLogo} alt="LendingFundsUSA - Easy and Affordable Financing" className="h-28 md:h-36 lg:h-40 w-auto object-contain flex-shrink-0" loading="eager" />
        </Link>
        
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link to="/about" className="text-sm hover:text-accent transition-colors whitespace-nowrap">About</Link>
          <Link to="/how-it-works" className="text-sm hover:text-accent transition-colors whitespace-nowrap">How it Works</Link>
          <Link to="/faq" className="text-sm hover:text-accent transition-colors whitespace-nowrap">FAQ's</Link>
          <Link to="/login" className="text-sm hover:text-accent transition-colors whitespace-nowrap">Login</Link>
          <Link to="/contact" className="text-sm hover:text-accent transition-colors whitespace-nowrap">Contact</Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/get-started" className="flex-shrink-0">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-mono whitespace-nowrap">
              Get started
            </Button>
          </Link>
          
          <button 
            className="md:hidden flex-shrink-0 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/about" 
              className="text-sm hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-sm hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </Link>
            <Link 
              to="/faq" 
              className="text-sm hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ's
            </Link>
            <Link 
              to="/login" 
              className="text-sm hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/contact" 
              className="text-sm hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
