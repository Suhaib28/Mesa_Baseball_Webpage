import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Image, BookOpen, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-baseball.jpg";

export const Home = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Mesa Historical Baseball Museum
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95">
            Celebrating America's pastime through the lens of Mesa's rich baseball heritage
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/about">
              <Button variant="hero" size="lg" className="text-lg">
                Explore Our Story <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/gallery">
              <Button variant="outline" size="lg" className="text-lg bg-card/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-card/30">
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Discover Baseball History</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link to="/about" className="group">
            <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300 h-full">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-muted-foreground">
                Learn about the museum's origins and the history of baseball in Mesa.
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
                Browse historic photographs and memorabilia from baseball's golden era.
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
                Stay updated with museum news, exhibitions, and community events.
              </p>
            </div>
          </Link>

          <Link to="/trivia" className="group">
            <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300 h-full">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Baseball Trivia</h3>
              <p className="text-muted-foreground">
                Test your baseball knowledge with our interactive trivia challenge.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Plan Your Visit</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Experience the nostalgia and excitement of baseball history. We're open daily and admission is free!
          </p>
          <Link to="/about">
            <Button variant="hero" size="lg" className="text-lg bg-card text-primary hover:bg-card/90">
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
