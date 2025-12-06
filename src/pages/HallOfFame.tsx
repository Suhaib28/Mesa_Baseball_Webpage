import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Star, Award, Trophy } from "lucide-react";

const hallOfFameClasses = [
  {
    year: 2020,
    inductees: [
      { name: "Allan H. 'Bud' Selig", role: "MLB Commissioner", description: "Led MLB for 16 years. Retired Jackie Robinson's number 42 across all of baseball in 1997." },
      { name: "Tony Gwynn", role: "Player - San Diego Padres", description: "Mr. Padre won 8 NL batting titles and retired with a .338 lifetime average. Hall of Fame 2007." },
      { name: "Alan 'Al' Siebert", role: "Facilities Superintendent", description: "30-year career maintaining Peoria Sports Complex, the first shared spring training facility." },
      { name: "Billy Williams", role: "Player - Chicago Cubs", description: "Sweet-swinging outfielder, 6-time All-Star, 1972 NL batting champion. Hall of Fame 1987." },
      { name: "Vida Blue", role: "Player - Oakland A's", description: "1971 AL MVP and Cy Young winner. Key member of three consecutive World Series champions." },
      { name: "Vin Scully", role: "Broadcaster", description: "Legendary voice of the Dodgers for 67 years. Ford C. Frick Award winner." },
    ]
  },
  {
    year: 2019,
    inductees: [
      { name: "Ken Griffey Jr.", role: "Player - Mariners/Reds", description: "The Kid was a 13-time All-Star with 630 home runs. Hall of Fame 2016 with record 99.32% of votes." },
      { name: "Ferguson 'Fergie' Jenkins", role: "Player - Chicago Cubs", description: "1971 Cy Young winner with 284 career wins and 3,192 strikeouts. Hall of Fame 1991." },
      { name: "Bobby Freeman", role: "Baseball Organist", description: "Official organist for the Arizona Diamondbacks since 1998, preserving ballpark tradition." },
      { name: "Roland Hemond", role: "Executive", description: "70-year career including GM for White Sox and Orioles. Created the Arizona Fall League." },
      { name: "Robin Yount", role: "Player - Milwaukee Brewers", description: "Two-time AL MVP who spent entire 20-year career with the Brewers. Hall of Fame 1999." },
    ]
  },
  {
    year: 2018,
    inductees: [
      { name: "Frank Robinson", role: "Player/Manager", description: "Only player to win MVP in both leagues. First African American manager in MLB. Hall of Fame 1982." },
      { name: "Gaylord Perry", role: "Player - Giants/Indians", description: "First pitcher to win Cy Young in both leagues. 314 career wins. Hall of Fame 1991." },
      { name: "Bob Uecker", role: "Broadcaster", description: "Mr. Baseball - Brewers broadcaster since 1971. Ford C. Frick Award 2003." },
      { name: "Yosh Kawano", role: "Clubhouse Manager", description: "65 years with the Chicago Cubs. Released from WWII internment camp through baseball connections." },
      { name: "Derrick Moore", role: "Vendor", description: "'Lemonade, Lemonade Like Grandma Made!' Legendary vendor entertaining fans since the 1980s." },
    ]
  },
  {
    year: 2017,
    inductees: [
      { name: "Ernie Banks", role: "Player - Chicago Cubs", description: "Mr. Cub - 512 home runs, two-time MVP. First African American player for the Cubs. Hall of Fame 1977." },
      { name: "Larry Doby", role: "Player - Cleveland Indians", description: "First African American in the American League. First to play in Arizona's Cactus League in 1948. Hall of Fame 1998." },
      { name: "Monte Irvin", role: "Player - New York Giants", description: "Among first four players to integrate Arizona spring training in 1949. Hall of Fame 1973." },
      { name: "Willie Mays", role: "Player - Giants", description: "The Say Hey Kid - 660 home runs, 24-time All-Star. Spent 13 spring training seasons in Arizona. Hall of Fame 1979." },
    ]
  },
  {
    year: 2016,
    inductees: [
      { name: "Del Webb", role: "Owner - New York Yankees", description: "Brought the Yankees to Arizona in 1951. Helped establish the Cactus League's prestige." },
      { name: "Gene Autry", role: "Owner - Los Angeles Angels", description: "The Singing Cowboy owned the Angels from 1961-1988. Moved the team to Tempe Diablo Stadium." },
      { name: "Robert Brinton", role: "Mesa Hohokams President", description: "Instrumental in keeping MLB in Arizona. Led the 2012 Keep the Cubs bond election." },
      { name: "Jim Bruner", role: "Civic Leader", description: "Key player in bringing the Arizona Diamondbacks to life. His vote funded the county-owned stadium." },
    ]
  },
  {
    year: 2014,
    inductees: [
      { name: "Dwight 'Pat' Patterson", role: "Mesa Rancher", description: "Brought the Cubs to Mesa in 1952 and again in 1979. First chairman of the Hohokams." },
      { name: "Horace Stoneham", role: "Owner - Giants", description: "Moved the Giants to Phoenix in 1947, helping start the Cactus League." },
      { name: "Bill Veeck Jr.", role: "Owner - Cleveland Indians", description: "Moved the Indians to Tucson in 1947, co-founding the Cactus League." },
      { name: "Gov. Rose Mofford", role: "Arizona Governor", description: "Saved spring training in Arizona when Florida threatened to lure teams away in the late 1980s." },
      { name: "Ted & Alice Sliger", role: "Buckhorn Baths Owners", description: "Their mineral springs resort became a pre-spring training ritual for Giants players." },
      { name: "Hi Corbett", role: "Arizona State Senator", description: "Convinced Bill Veeck to bring the Indians to Tucson. The ballpark was named after him." },
    ]
  },
];

export const HallOfFame = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-primary-foreground/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="text-primary-foreground" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Cactus League Hall of Fame</h1>
            <p className="text-xl opacity-95 max-w-3xl mx-auto">
              Honoring the players, executives, and community leaders who shaped Arizona baseball history
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            {hallOfFameClasses.map((classYear) => (
              <section key={classYear.year} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Award className="text-secondary" size={28} />
                  </div>
                  <h2 className="text-4xl font-bold">Class of {classYear.year}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {classYear.inductees.map((inductee, index) => (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <Star className="text-secondary mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h3 className="text-xl font-bold">{inductee.name}</h3>
                          <p className="text-sm text-secondary font-medium">{inductee.role}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed pl-8">
                        {inductee.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            <div className="bg-muted/50 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Visit the Hall of Fame Display</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                See plaques, memorabilia, and artifacts from all Cactus League Hall of Fame inductees at our museum. The complete collection features photos, uniforms, and personal items donated by inductees and their families.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HallOfFame;
