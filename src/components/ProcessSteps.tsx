const steps = [
  {
    number: "01",
    title: "Online application",
    description: "Get up and running in no time by creating a free account. Register only with your email address.",
  },
  {
    number: "02",
    title: "Same-day decision",
    description: "Go through the summaries for each of your options, taking note of which ones check.",
  },
  {
    number: "03",
    title: "Sign your contract",
    description: "Effortlessly finalize your agreement online, ensuring a smooth and prompt funding process for you.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="container mx-auto px-4 py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Easy 3-step funding solution
        </h2>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row gap-6 items-start p-8 border-2 border-border bg-card hover:border-accent transition-all duration-300 hover:shadow-lg rounded-lg group"
            >
              <div className="text-7xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors duration-300">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">{step.title}</h3>
                <p className="text-muted-foreground text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
