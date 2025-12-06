import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Image, BookOpen, Trophy, Star, Users } from "lucide-react";
import logo from "@/assets/logo.png";

export const Home = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        {/* Hero Section - Logo Centered */}
        <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-primary/90">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary-foreground rounded-full" />
            <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-primary-foreground rounded-full" />
            <div className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-primary-foreground rounded-full" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="mb-8 animate-fade-in">
              <img 
                src={logo} 
                alt="Arizona Baseball Museum" 
                className="mx-auto h-48 md:h-64 w-auto drop-shadow-2xl"
              />
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-primary-foreground/95">
              Celebrating over 75 years of Cactus League history and Arizona's passion for America's pastime
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/about">
                <Button variant="hero" size="lg" className="text-lg bg-card text-primary hover:bg-card/90">
                  Plan Your Visit <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="outline" size="lg" className="text-lg bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Arizona Baseball Legacy */}
        <section className="py-20 container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Arizona Baseball Legacy</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            From the founding of the Cactus League in 1947 to hosting 15 MLB teams today, Arizona has become the heart of spring training baseball.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-card rounded-xl border border-border">
              <div className="text-5xl font-bold text-secondary mb-2">1947</div>
              <p className="text-muted-foreground">Year the Cactus League was founded in Arizona</p>
            </div>
            <div className="text-center p-8 bg-card rounded-xl border border-border">
              <div className="text-5xl font-bold text-primary mb-2">15</div>
              <p className="text-muted-foreground">MLB teams train in Arizona each spring</p>
            </div>
            <div className="text-center p-8 bg-card rounded-xl border border-border">
              <div className="text-5xl font-bold text-secondary mb-2">2M+</div>
              <p className="text-muted-foreground">Fans attend Cactus League games annually</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Explore the Museum</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link to="/about" className="group">
                <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300 h-full">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <BookOpen className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                  <p className="text-muted-foreground">
                    Discover Arizona's baseball journey from desert diamonds to world-class facilities.
                  </p>
                </div>
              </Link>

              <Link to="/gallery" className="group">
                <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300 h-full">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Image className="text-secondary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Photo Gallery</h3>
                  <p className="text-muted-foreground">
                    Browse historic photographs from the Diamondbacks, Cactus League, and more.
                  </p>
                </div>
              </Link>

              <Link to="/news" className="group">
                <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300 h-full">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Calendar className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">News & Events</h3>
                  <p className="text-muted-foreground">
                    Stay updated with museum news, exhibitions, and Cactus League events.
                  </p>
                </div>
              </Link>

              <Link to="/trivia" className="group">
                <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300 h-full">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Trophy className="text-secondary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Arizona Trivia</h3>
                  <p className="text-muted-foreground">
                    Test your knowledge of Arizona baseball history and legends.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Arizona Baseball Highlights */}
        <section className="py-20 container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Arizona Baseball Highlights</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Star className="text-secondary" size={28} />
                <h3 className="text-2xl font-bold">Arizona Diamondbacks</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Arizona's MLB team since 1998, the Diamondbacks won the World Series in just their 4th season - the fastest expansion team to win a championship.
              </p>
              <p className="text-sm text-muted-foreground">2001 World Series Champions</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-primary" size={28} />
                <h3 className="text-2xl font-bold">Spring Training Capital</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                The Cactus League draws more than 2 million fans each February and March, generating over $600 million for Arizona's economy annually.
              </p>
              <p className="text-sm text-muted-foreground">15 MLB Teams • 10 Stadiums</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Experience Arizona Baseball History</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
              From Randy Johnson's dominance to the Cactus League's golden days, discover the stories that shaped Arizona baseball. Free admission!
            </p>
            <Link to="/about">
              <Button variant="hero" size="lg" className="text-lg bg-card text-secondary hover:bg-card/90">
                Visit Information
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
