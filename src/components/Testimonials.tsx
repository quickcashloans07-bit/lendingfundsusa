import { Card, CardContent } from "@/components/ui/card";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    quote: "As a small business, their funding fueled our vision, leading to expansion. Grateful for their instrumental support in our journey to success.",
    name: "Jessica Martinez",
    title: "CEO, TechStart Solutions",
    image: testimonial1,
  },
  {
    quote: "Their financial aid was pivotal, fueling our rapid growth. They understood our needs, providing strategic support crucial for our scaling journey.",
    name: "Michael Thompson",
    title: "Founder, Growth Ventures",
    image: testimonial2,
  },
  {
    quote: "Their funding empowered our innovations, enabling us to introduce groundbreaking products. Their support pushed us towards innovation and excellence.",
    name: "Emily Johnson",
    title: "VP of Operations, NextGen Corp",
    image: testimonial3,
  },
];

const Testimonials = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-mono font-bold mb-16 text-center">
          Real stories of businesses
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 group">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent/50 group-hover:border-accent transition-colors duration-300 flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-mono font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
