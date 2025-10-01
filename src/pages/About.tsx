import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export const About = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Our Museum</h1>
            <p className="text-xl opacity-95 max-w-3xl">
              Preserving the legacy of baseball in Mesa since 1985
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
                <p>
                  The Mesa Historical Baseball Museum was established in 1985 by a group of passionate baseball enthusiasts and local historians who recognized the need to preserve Mesa's unique baseball heritage. What started as a small collection of memorabilia has grown into one of Arizona's premier baseball history institutions.
                </p>
                <p>
                  Mesa has been home to spring training since 1952, when the Chicago Cubs first arrived. Over the decades, the city has welcomed numerous Major League teams, creating a rich tapestry of baseball history that spans generations. Our museum chronicles this incredible journey through carefully curated exhibits, rare photographs, and authentic artifacts.
                </p>
                <p>
                  Today, we house over 5,000 items in our collection, from vintage uniforms and equipment to signed baseballs and historic photographs. Our mission is to educate, inspire, and celebrate the timeless connection between baseball and the community of Mesa.
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
                        Closed major holidays
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
                        123 Baseball Way<br />
                        Mesa, Arizona 85201<br />
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
                        (480) 555-BASE<br />
                        Tour bookings available
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
                        info@mesabaseballmuseum.org<br />
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
                  <strong className="text-foreground">School Programs:</strong> Free educational programs for K-12 students
                </p>
                <p className="text-sm text-muted-foreground mt-6">
                  The museum is supported by donations and is committed to keeping baseball history accessible to all visitors.
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
