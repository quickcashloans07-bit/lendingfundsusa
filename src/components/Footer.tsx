import { Link } from "react-router-dom";
import lendingFundsUsaLogo from "@/assets/lendingfundsusa-logo.png";
import { Shield, Lock, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity mb-4">
              <img src={lendingFundsUsaLogo} alt="LendingFundsUSA - Easy and Affordable Financing" className="h-28 md:h-32 lg:h-36 w-auto object-contain" />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Easy and Affordable Financing. Your trusted partner for personal, business, and startup loans.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground">256-bit SSL Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground">Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground">Trusted by 10,000+</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
              <Link to="/how-it-works" className="hover:text-accent transition-colors">How It Works</Link>
              <Link to="/faq" className="hover:text-accent transition-colors">FAQs</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/apply/personal" className="hover:text-accent transition-colors">Verify Now</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LendingFundsUSA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
