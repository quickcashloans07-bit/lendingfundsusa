import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import personalLoanImg from "@/assets/personal-loan.jpg";
import startupLoanImg from "@/assets/startup-loan.jpg";
import businessLoanImg from "@/assets/business-loan.jpg";

const products = [
  {
    title: "Personal Loan",
    description: "Customized funding designed to support personal aspirations, ensuring financial flexibility.",
    image: personalLoanImg,
    type: "personal",
  },
  {
    title: "Startup Loan",
    description: "Specialized financial aid igniting new ventures, offering support for early-stage businesses to flourish.",
    image: startupLoanImg,
    type: "startup",
  },
  {
    title: "Business Loan",
    description: "Strategic financial assistance fueling established enterprises, enabling growth, and expansion.",
    image: businessLoanImg,
    type: "business",
  },
];

const LoanProducts = () => {
  return (
    <section className="container mx-auto px-4 py-20 bg-muted/30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <Card key={index} className="border-2 border-border hover:border-accent transition-all duration-300 overflow-hidden group hover:shadow-2xl hover:shadow-accent/20 hover:scale-105">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
            </div>
            <CardHeader>
              <CardTitle className="font-mono text-2xl">{product.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-6">
                {product.description}
              </CardDescription>
              <Link to={`/apply/${product.type}`}>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-mono transition-all duration-300 hover:shadow-lg hover:shadow-accent/30">
                  Apply now
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LoanProducts;
