import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <img src={logo} alt="Arizona Baseball Museum" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground text-sm">
              Preserving and celebrating Arizona's rich baseball heritage since the Cactus League era.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Visit Us</h4>
            <p className="text-muted-foreground text-sm">
              456 Diamond Drive<br />
              Scottsdale, AZ 85251<br />
              Open Daily 9AM - 5PM
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-muted-foreground text-sm">
              Phone: (480) 555-BALL<br />
              Email: info@azbaseballmuseum.org
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Arizona Baseball Museum. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
