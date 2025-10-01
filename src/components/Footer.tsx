export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Mesa Historical Baseball Museum</h3>
            <p className="text-muted-foreground text-sm">
              Preserving and celebrating the rich baseball heritage of Mesa and beyond.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Visit Us</h4>
            <p className="text-muted-foreground text-sm">
              123 Baseball Way<br />
              Mesa, AZ 85201<br />
              Open Daily 9AM - 5PM
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-muted-foreground text-sm">
              Phone: (480) 555-BASE<br />
              Email: info@mesabaseballmuseum.org
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mesa Historical Baseball Museum. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
