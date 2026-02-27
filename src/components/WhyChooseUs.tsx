import { Zap, Layers, Shield } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Speed",
    description: "Swift approvals ensuring your business stays ahead in crucial decisions.",
  },
  {
    icon: Layers,
    title: "Flexibility",
    description: "Tailored solutions adapting seamlessly to your evolving business.",
  },
  {
    icon: Shield,
    title: "Confidence",
    description: "Reliable support fostering trust, providing assurance for your aspirations.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Reasons to choose our lending specialists
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-16">
          We're here if you need help finding a solution to match your personal needs. Fast access to flexible funding solutions to support cash flow and business growth.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="border-l-4 border-accent pl-6 py-4 hover:pl-8 transition-all duration-300 group">
              <benefit.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
