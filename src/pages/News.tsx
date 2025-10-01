import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Spring Training Exhibition Opens March 1st",
    date: "February 15, 2025",
    category: "Exhibition",
    excerpt: "Join us for our annual Spring Training exhibition featuring rare photographs and memorabilia from Mesa's rich spring training history. Special opening ceremony at 10 AM."
  },
  {
    id: 2,
    title: "Youth Baseball Camp Registration Now Open",
    date: "February 10, 2025",
    category: "Community",
    excerpt: "Our popular summer youth baseball camp is back! Former professional players will coach kids ages 8-14 in fundamentals and baseball history. Limited spots available."
  },
  {
    id: 3,
    title: "New Vintage Uniform Collection Acquired",
    date: "January 28, 2025",
    category: "Acquisition",
    excerpt: "The museum has acquired a collection of 15 vintage Mesa baseball uniforms dating from 1930-1960. These rare pieces will be on display starting in March."
  },
  {
    id: 4,
    title: "Documentary Screening: Mesa Baseball Legacy",
    date: "January 15, 2025",
    category: "Event",
    excerpt: "Free screening of the award-winning documentary exploring Mesa's role in baseball history. Director Q&A session to follow. Thursday, February 20th at 7 PM."
  },
];

export const News = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl opacity-95 max-w-3xl">
              Stay informed about museum events, exhibitions, and baseball history
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {newsItems.map((item) => (
                <article
                  key={item.id}
                  className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold bg-secondary/10 text-secondary px-4 py-1.5 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={16} />
                      <time>{item.date}</time>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors">
                    {item.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item.excerpt}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-4">
                <div className="bg-primary-foreground/10 p-3 rounded-lg">
                  <Clock className="text-primary-foreground" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Newsletter Signup</h2>
                  <p className="text-lg opacity-95 mb-6">
                    Subscribe to our monthly newsletter to receive updates about exhibitions, events, and baseball history stories directly to your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
                    />
                    <button className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-lg transition-colors">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-sm opacity-80 mt-3">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default News;
