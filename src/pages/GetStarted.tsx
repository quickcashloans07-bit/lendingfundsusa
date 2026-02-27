import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, User, Building, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const loanTypes = [
  {
    icon: User,
    title: "Personal Loan",
    description: "Customized funding for personal aspirations with flexible terms and competitive rates.",
    features: ["$5,000 - $50,000", "Quick approval", "Flexible repayment"],
    link: "/apply/personal",
  },
  {
    icon: Rocket,
    title: "Startup Loan",
    description: "Specialized financing for new ventures with support for early-stage businesses.",
    features: ["$10,000 - $100,000", "Startup-friendly terms", "Business guidance"],
    link: "/apply/startup",
  },
  {
    icon: Building,
    title: "Business Loan",
    description: "Strategic funding for established enterprises enabling growth and expansion.",
    features: ["$25,000 - $500,000", "Competitive rates", "Scalable solutions"],
    link: "/apply/business",
  },
];

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center">
              Get <span className="text-accent">Started</span>
            </h1>
            
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              Choose the loan type that best fits your needs and start your application today. Our streamlined process makes getting funded simple and fast.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {loanTypes.map((loan, index) => (
                <Card key={index} className="border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <loan.icon className="w-12 h-12 text-accent mb-4" />
                    <CardTitle className="text-2xl font-bold">{loan.title}</CardTitle>
                    <CardDescription className="text-base">
                      {loan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                      {loan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={loan.link}>
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium group">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="border-2 border-accent bg-accent/5 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">01</div>
                  <h3 className="font-bold mb-2">Fill Application</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete our simple online form in minutes
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">02</div>
                  <h3 className="font-bold mb-2">Get Decision</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive approval decision same day
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">03</div>
                  <h3 className="font-bold mb-2">Receive Funds</h3>
                  <p className="text-sm text-muted-foreground">
                    Sign contract and get funded quickly
                  </p>
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

export default GetStarted;
