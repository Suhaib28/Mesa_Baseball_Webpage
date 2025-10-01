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
    title: "Historic Stadium",
    description: "Mesa's first baseball stadium, circa 1920s",
    year: "1925"
  },
  {
    id: 2,
    image: gallery2,
    title: "Championship Team",
    description: "Local Mesa team that won the state championship",
    year: "1948"
  },
  {
    id: 3,
    image: gallery3,
    title: "Vintage Memorabilia",
    description: "Collection of historic baseball artifacts and cards",
    year: "1930s-1950s"
  },
  {
    id: 4,
    image: gallery4,
    title: "Classic Equipment",
    description: "Well-worn glove and baseball from the golden era",
    year: "1940s"
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
              A visual journey through baseball history in Mesa
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
                Our physical collection features hundreds of additional photographs, artifacts, and memorabilia. Visit us to explore the complete exhibition and experience baseball history up close.
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
