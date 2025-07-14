import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BrandShowcase = () => {
  return (
    <section className="py-6 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Shop By Brand</h2>
          <p className="text-sm md:text-base text-muted-foreground">Explore premium stationery from trusted brands</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-8">
          {/* Zebra Brand Feature */}
          <Card className="lg:col-span-2 overflow-hidden group hover:shadow-hover transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-r from-red-50 to-red-100 h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent">
                  <div className="h-full flex items-center p-8">
                    <div className="space-y-4">
                      <div className="bg-white/90 inline-block px-4 py-2 rounded-lg">
                        <h3 className="text-2xl font-bold text-primary">FIND ZEN IN YOUR PEN</h3>
                      </div>
                      <div className="bg-primary text-white inline-block px-6 py-3 rounded-lg">
                        <h2 className="text-4xl font-bold">ZEBRA</h2>
                      </div>
                      <Button className="mt-4 group-hover:translate-x-1 transition-transform">
                        Explore Now
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/20 to-transparent">
                  <img
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop"
                    alt="Zebra Products"
                    className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Other Brands */}
          <div className="space-y-6">
            <Card className="hover:shadow-hover transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Faber-Castell</h3>
                  <p className="text-muted-foreground mb-4">Premium Art Supplies</p>
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                    Shop Now
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-hover transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Pilot</h3>
                  <p className="text-muted-foreground mb-4">Writing Instruments</p>
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                    Shop Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Popular Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
          {[
            { name: "Staedtler", logo: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop" },
            { name: "Pentel", logo: "https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?w=100&h=100&fit=crop" },
            { name: "Parker", logo: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=100&h=100&fit=crop" },
            { name: "Sakura", logo: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=100&h=100&fit=crop" },
            { name: "Uni-ball", logo: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=100&h=100&fit=crop" },
            { name: "Maped", logo: "https://images.unsplash.com/photo-1586953983027-d7508a64f4bb?w=100&h=100&fit=crop" }
          ].map((brand, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <p className="text-sm font-medium group-hover:text-primary transition-colors">
                  {brand.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
