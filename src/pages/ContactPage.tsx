import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-mono font-bold mb-8 text-center">
              Get in <span className="text-accent">Touch</span>
            </h1>

            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              Have questions or need assistance? Our team is here to help. Reach out to us through any of the channels below.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-mono font-bold mb-8">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 border-2 border-border hover:border-accent transition-colors">
                    <MapPin className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-mono font-bold mb-2">Address</h3>
                      <p className="text-muted-foreground">
                        4727 Wilshire Blvd #100<br />
                        Los Angeles, CA 90010<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 border-2 border-border hover:border-accent transition-colors">
                    <Phone className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-mono font-bold mb-2">Phone</h3>
                      <p className="text-muted-foreground">
                        +1 (818) 252-9640<br />
                        +1 (818) 252-9985
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 border-2 border-border hover:border-accent transition-colors">
                    <Mail className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-mono font-bold mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        info@lendingfundsusa.com<br />
                        support@lendingfundsusa.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 border-2 border-border hover:border-accent transition-colors">
                    <Clock className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-mono font-bold mb-2">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-mono font-bold mb-8">Send us a Message</h2>

                <form className="space-y-4">
                  <Input
                    placeholder="Your name"
                    className="border-2"
                    required
                  />
                  <Input
                    placeholder="Company name"
                    className="border-2"
                  />
                  <Input
                    placeholder="Phone number"
                    type="tel"
                    className="border-2"
                    required
                  />
                  <Input
                    placeholder="Email address"
                    type="email"
                    className="border-2"
                    required
                  />
                  <Textarea
                    placeholder="Anything else you would like us to know?"
                    className="border-2 min-h-40"
                    required
                  />
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-mono">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
