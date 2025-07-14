import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

// Mock product data
const featuredProducts = [
  {
    id: "1",
    name: "Zebra DelGuard Mechanical Pencil - 0.5mm",
    brand: "Zebra",
    price: 395,
    rating: 5,
    reviewCount: 5,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=400&fit=crop",
    colors: ["Black", "Blue", "White"],
    isNew: true
  },
  {
    id: "2",
    name: "Zebra Sarasa 0.5mm Gel Ink Rollerball Pen",
    brand: "Zebra",
    price: 125,
    originalPrice: 150,
    rating: 4.8,
    reviewCount: 12,
    image: "https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?w=400&h=400&fit=crop",
    colors: ["Black", "Blue", "Red"],
    isOnSale: true
  },
  {
    id: "3",
    name: "Premium Notebook Set A5",
    brand: "Classmate",
    price: 299,
    rating: 4.5,
    reviewCount: 8,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop"
  },
  {
    id: "4",
    name: "Art Markers Professional Set",
    brand: "Faber-Castell",
    price: 1299,
    originalPrice: 1499,
    rating: 4.9,
    reviewCount: 15,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
    isOnSale: true
  },
  {
    id: "5",
    name: "Stapler Heavy Duty",
    brand: "Kangaro",
    price: 599,
    rating: 4.3,
    reviewCount: 6,
    image: "https://images.unsplash.com/photo-1586953983027-d7508a64f4bb?w=400&h=400&fit=crop"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-6 md:py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-8 gap-2 md:gap-0">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Featured Products</h2>
            <p className="text-sm md:text-base text-muted-foreground">Discover our best-selling stationery items</p>
          </div>
          <Button variant="outline" size="sm" className="w-full md:w-auto">View All</Button>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          {/* Navigation arrows for larger screens */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:shadow-xl hidden lg:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:shadow-xl hidden lg:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;