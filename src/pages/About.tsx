import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export const About = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <img src={logo} alt="Arizona Baseball Museum" className="mx-auto h-32 w-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Our Museum</h1>
            <p className="text-xl opacity-95 max-w-3xl mx-auto">
              Preserving Arizona's baseball legacy since the Cactus League began
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
                <p>
                  The Arizona Baseball Museum was established to honor the Grand Canyon State's incredible baseball heritage. From the founding of the Cactus League in 1947, when the Cleveland Indians and New York Giants first came to Arizona for spring training, to the establishment of the Arizona Diamondbacks in 1998, our state has become synonymous with America's pastime.
                </p>
                <p>
                  Arizona's perfect spring weather attracted MLB teams seeking an alternative to Florida's Grapefruit League. What started with a handful of teams has grown to 15 Major League franchises training across the Phoenix metropolitan area each spring, drawing over 2 million fans annually.
                </p>
                <p>
                  Our museum celebrates legendary moments: the Diamondbacks' miraculous 2001 World Series victory over the Yankees, Randy Johnson and Curt Schilling's dominant pitching, Luis Gonzalez's walk-off hit, and decades of Cactus League memories. We house over 8,000 artifacts including game-worn uniforms, signed memorabilia, historic photographs, and equipment from Arizona baseball's greatest moments.
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-6">Visit Us</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 9:00 AM - 5:00 PM<br />
                        Sunday: 10:00 AM - 4:00 PM<br />
                        Extended hours during Spring Training
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <MapPin className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Location</h3>
                      <p className="text-muted-foreground">
                        456 Diamond Drive<br />
                        Scottsdale, Arizona 85251<br />
                        Free parking available
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Phone</h3>
                      <p className="text-muted-foreground">
                        (480) 555-BALL<br />
                        Group tours available
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Mail className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        info@azbaseballmuseum.org<br />
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-muted/50 rounded-2xl p-8 md:p-12">
              <h2 className="text-4xl font-bold mb-6">Admission</h2>
              <div className="space-y-4 text-lg">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">General Admission:</strong> Free
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Guided Tours:</strong> Available by appointment for groups of 10 or more
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">School Programs:</strong> Free educational programs about Arizona baseball history
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Spring Training Package:</strong> Special exhibits during Cactus League season
                </p>
                <p className="text-sm text-muted-foreground mt-6">
                  The museum is supported by donations and is committed to keeping Arizona baseball history accessible to all visitors.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
