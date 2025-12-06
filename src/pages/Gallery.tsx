import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const galleryItems = [
  {
    id: 1,
    image: gallery1,
    title: "Cactus League Origins",
    description: "Early spring training in Arizona when the Cleveland Indians arrived",
    year: "1947"
  },
  {
    id: 2,
    image: gallery2,
    title: "Diamondbacks World Series",
    description: "Historic moments from Arizona's championship run against the Yankees",
    year: "2001"
  },
  {
    id: 3,
    image: gallery3,
    title: "Arizona Baseball Memorabilia",
    description: "Collection of historic artifacts from Cactus League and D-backs history",
    year: "1947-Present"
  },
  {
    id: 4,
    image: gallery4,
    title: "Spring Training Classic",
    description: "Vintage equipment from Arizona's early baseball days",
    year: "1950s"
  },
];

export const Gallery = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl opacity-95 max-w-3xl">
              A visual journey through Arizona's baseball history
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <span className="text-sm font-semibold bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <div className="bg-muted/50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">See More in Person</h2>
              <p className="text-muted-foreground text-lg">
                Our physical collection features hundreds of additional photographs from the Diamondbacks, Cactus League teams, and Arizona's rich baseball heritage. Visit us to explore the complete exhibition.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
