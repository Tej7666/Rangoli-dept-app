import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  colors?: string[];
  isNew?: boolean;
  isOnSale?: boolean;
}

const ProductCard = ({
  name,
  brand,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  colors = [],
  isNew = false,
  isOnSale = false,
}: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Card className="group hover:shadow-hover transition-all duration-300 overflow-hidden">
      <div className="relative">
        {(isNew || isOnSale) && (
          <div className="absolute top-2 left-2 z-10 flex gap-1">
            {isNew && <Badge variant="secondary">NEW</Badge>}
            {isOnSale && <Badge variant="destructive">SALE</Badge>}
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white/90"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium">{brand}</p>
          <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          
          <div className="flex items-center space-x-1">
            {renderStars(rating)}
            <span className="text-sm text-muted-foreground">({reviewCount})</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">₹{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{originalPrice}
              </span>
            )}
          </div>
          
          {colors.length > 0 && (
            <div className="flex items-center space-x-1">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
            </div>
          )}
          
          <Button className="w-full mt-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;