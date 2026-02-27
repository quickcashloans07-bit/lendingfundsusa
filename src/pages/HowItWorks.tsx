import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, CheckCircle, FileCheck, DollarSign, Shield, Lock, Building2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import regionsLogo from "@/assets/regions-logo.png";
import navyFederalLogo from "@/assets/navy-federal-logo.png";
import bankOfAmericaLogo from "@/assets/bank-of-america-logo.png";
import chaseLogo from "@/assets/chase-logo.png";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Submit Application",
    description: "Complete our simple online application form with your basic information and funding requirements. The process takes just a few minutes.",
  },
  {
    icon: CheckCircle,
    number: "02",
    title: "Document Verification",
    description: "Our team reviews your application and may request additional documents. We ensure a thorough yet efficient verification process.",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Approval Decision",
    description: "Receive a same-day decision on your application. Our advanced systems enable quick assessment while maintaining accuracy.",
  },
  {
    icon: DollarSign,
    number: "04",
    title: "Receive Funds",
    description: "Once approved, sign your contract electronically and receive your funds quickly. We prioritize speed without compromising security.",
  },
];

const HowItWorks = () => {
  const [consentChecked, setConsentChecked] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-mono font-bold mb-8 text-center">
              How It <span className="text-accent">Works</span>
            </h1>
            
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              Our streamlined process makes getting funded simple and fast. From application to funding, we've designed every step with your convenience in mind.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="flex flex-col md:flex-row gap-6 items-start p-8 border-2 border-border bg-card hover:border-accent transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <step.icon className="w-16 h-16 text-accent" />
                    <div className="text-6xl font-mono font-bold text-accent/20">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-mono font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 border-2 border-accent bg-accent/5">
              <h3 className="text-2xl font-mono font-bold mb-4">Why Our Process Works</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <span>Fast processing with same-day decisions on most applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <span>Transparent communication throughout the entire process</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <span>Secure digital document handling and e-signature capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <span>Dedicated support team available to answer your questions</span>
                </li>
              </ul>
            </div>

            {/* Bank Authentication Trust Section */}
            <div className="mt-16 p-8 border-2 border-trust-primary bg-card">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-trust-primary" />
                <h3 className="text-3xl font-mono font-bold">Bank Authentication</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  In accordance with Federal Deposit Insurance Corporation (FDIC) guidelines and the Gramm-Leach-Bliley Act (GLBA), 
                  we utilize secure bank authentication protocols to verify your identity and financial information. By proceeding, 
                  you authorize LendingFundsUSA to access your banking data through encrypted channels for the sole purpose of 
                  loan application verification and creditworthiness assessment. Your data is protected under 256-bit SSL encryption 
                  and is never shared with third parties without your explicit consent.
                </p>

                <div className="flex items-start gap-3 p-4 bg-muted/50 border border-border rounded-lg">
                  <Checkbox 
                    id="consent" 
                    checked={consentChecked}
                    onCheckedChange={(checked) => setConsentChecked(checked as boolean)}
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                    I agree to the terms and authorize verification of my banking information in accordance with applicable 
                    federal regulations including the Fair Credit Reporting Act (FCRA) and consent to the electronic disclosure 
                    of my financial data for loan processing purposes.
                  </label>
                </div>

                {/* Bank Logos */}
                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4 text-center">Trusted Banking Partners</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
                    <div className="flex flex-col items-center gap-2 p-4 border border-border rounded-lg bg-background/50 hover:border-accent transition-colors w-full h-24">
                      <img src={chaseLogo} alt="Chase Bank" className="h-12 w-auto object-contain" />
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 border border-border rounded-lg bg-background/50 hover:border-accent transition-colors w-full h-24">
                      <img src={bankOfAmericaLogo} alt="Bank of America" className="h-12 w-auto object-contain" />
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 border border-border rounded-lg bg-background/50 hover:border-accent transition-colors w-full h-24">
                      <img src={navyFederalLogo} alt="Navy Federal Credit Union" className="h-12 w-auto object-contain" />
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 border border-border rounded-lg bg-background/50 hover:border-accent transition-colors w-full h-24">
                      <img src={regionsLogo} alt="Regions Bank" className="h-12 w-auto object-contain" />
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="pt-6 border-t border-border">
                  <div className="flex flex-wrap justify-center gap-8 items-center">
                    <div className="flex items-center gap-2 text-trust-primary">
                      <Lock className="w-6 h-6" />
                      <span className="text-sm font-semibold">256-bit SSL</span>
                    </div>
                    <div className="flex items-center gap-2 text-trust-primary">
                      <Shield className="w-6 h-6" />
                      <span className="text-sm font-semibold">Secure Site</span>
                    </div>
                    <div className="flex items-center gap-2 text-trust-primary">
                      <CheckCircle className="w-6 h-6" />
                      <span className="text-sm font-semibold">Data Encrypted</span>
                    </div>
                    <div className="flex items-center gap-2 text-trust-primary">
                      <Shield className="w-6 h-6" />
                      <span className="text-sm font-semibold">FDIC Guidelines</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
