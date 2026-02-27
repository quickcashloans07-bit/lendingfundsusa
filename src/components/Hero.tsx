import { Check, Zap, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative container mx-auto px-4 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img 
          src={heroBackground} 
          alt="Financial growth visualization" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-8">
          <Check className="w-4 h-4 text-success" />
          <span className="text-sm font-semibold text-success uppercase tracking-wide">Secure & Reliable Funding</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
          Fast, Secure Loans<br />
          <span className="text-accent">Made Simple</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Get approved in minutes with our streamlined process. Trusted by thousands for personal, business, and startup loans.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">Same-day approval</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">Flexible terms</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">No hidden fees</span>
          </div>
        </div>

        <Link to="/get-started">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium text-base px-8 py-6 h-auto group">
            Get started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
