import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Award, TrendingUp, CheckCircle, FileText, CreditCard, TrendingUp as Growth, MousePointer, Scale } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import preparationImg from "@/assets/preparation-consultation.jpg";
import guidanceImg from "@/assets/guidance-consultation.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative container mx-auto px-4 py-20 overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-20">
            <img 
              src={aboutHero} 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              About <span className="text-accent">LendingFundsUSA</span>
            </h1>
            
            <div className="space-y-8 text-lg text-muted-foreground">
              <p>
                LendingFundsUSA is a leading financial services provider dedicated to empowering individuals and businesses with tailored lending solutions. Since our inception, we've been committed to making financing accessible, transparent, and efficient - with trust at the core of everything we do.
              </p>
              
              <p>
                Our mission is to unlock financial success through trusted expertise and personalized services. We understand that every financial journey is unique, which is why we offer customized solutions that adapt to your specific needs and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="border-2 border-border bg-card/80 backdrop-blur-sm p-8 hover:border-accent transition-all duration-300 hover:shadow-lg group">
                <Target className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide swift, flexible, and reliable financing solutions that help our clients achieve their goals with confidence.
                </p>
              </div>

              <div className="border-2 border-border bg-card/80 backdrop-blur-sm p-8 hover:border-accent transition-all duration-300 hover:shadow-lg group">
                <Users className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-3">Our Team</h3>
                <p className="text-muted-foreground">
                  A dedicated group of financial experts committed to delivering personalized support and strategic guidance every step of the way.
                </p>
              </div>

              <div className="border-2 border-border bg-card/80 backdrop-blur-sm p-8 hover:border-accent transition-all duration-300 hover:shadow-lg group">
                <Award className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-3">Our Values</h3>
                <p className="text-muted-foreground">
                  Trust, transparency, and excellence drive everything we do. We believe in building lasting relationships with our clients.
                </p>
              </div>

              <div className="border-2 border-border bg-card/80 backdrop-blur-sm p-8 hover:border-accent transition-all duration-300 hover:shadow-lg group">
                <TrendingUp className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-3">Our Growth</h3>
                <p className="text-muted-foreground">
                  With thousands of successful funding solutions delivered, we continue to expand our services and impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Meet Our Expert Team
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              Our experienced professionals are dedicated to helping you achieve your financial goals with personalized guidance and expertise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-2 border-border bg-card hover:border-accent transition-all duration-300 hover:shadow-lg group overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={team1} 
                    alt="Robert Chen - Chief Executive Officer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Robert Chen</h3>
                  <p className="text-accent font-medium mb-3">Chief Executive Officer</p>
                  <p className="text-muted-foreground text-sm">
                    With over 20 years in financial services, Robert leads our vision of making lending accessible and transparent for everyone.
                  </p>
                </div>
              </div>

              <div className="border-2 border-border bg-card hover:border-accent transition-all duration-300 hover:shadow-lg group overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={team2} 
                    alt="David Martinez - Head of Lending"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">David Martinez</h3>
                  <p className="text-accent font-medium mb-3">Head of Lending</p>
                  <p className="text-muted-foreground text-sm">
                    David specializes in crafting customized loan solutions, ensuring each client receives the best possible financing options.
                  </p>
                </div>
              </div>

              <div className="border-2 border-border bg-card hover:border-accent transition-all duration-300 hover:shadow-lg group overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={team3} 
                    alt="Sarah Williams - Client Relations Director"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah Williams</h3>
                  <p className="text-accent font-medium mb-3">Client Relations Director</p>
                  <p className="text-muted-foreground text-sm">
                    Sarah ensures every client receives exceptional service and support throughout their entire lending journey with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] overflow-hidden rounded-lg border-2 border-border shadow-lg">
                  <img 
                    src={preparationImg} 
                    alt="Professional consultation and preparation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold mb-6">
                  Preparation <span className="text-accent">Made Simple</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  We guide you through every step to ensure you're fully prepared for your loan application.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors">
                    <FileText className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Business Type</h3>
                      <p className="text-muted-foreground">Identify your business structure and requirements for optimal loan matching.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors">
                    <CreditCard className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Credit Score Review</h3>
                      <p className="text-muted-foreground">We help you understand your credit standing and improvement opportunities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">ID & Documentation</h3>
                      <p className="text-muted-foreground">Secure document verification process ensuring your information is protected.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  Expert <span className="text-accent">Guidance</span>
                </h2>
                <p className="text-2xl text-accent font-medium mb-8">
                  Advice tailored for your success
                </p>
                <p className="text-muted-foreground text-lg mb-8">
                  Our experienced team provides comprehensive support throughout your financial journey, ensuring you make informed decisions every step of the way.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors">
                    <Growth className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Business Growth Strategies</h3>
                      <p className="text-muted-foreground">Personalized financial advice to help scale your business effectively.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors">
                    <MousePointer className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Hassle-free Online Application</h3>
                      <p className="text-muted-foreground">Simple, streamlined process that saves you time and effort.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors">
                    <Scale className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Legal Consultation</h3>
                      <p className="text-muted-foreground">Expert legal guidance ensuring compliance and protection of your interests.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-lg border-2 border-border shadow-lg">
                  <img 
                    src={guidanceImg} 
                    alt="Business consultation and expert guidance"
                    className="w-full h-full object-cover"
                  />
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

export default About;
