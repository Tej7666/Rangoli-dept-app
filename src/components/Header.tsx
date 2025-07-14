import { useState } from "react";
import { Search, ShoppingCart, User, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo.png";

const categories = [
  {
    name: "Stationery",
    items: ["Pens & Pencils", "Notebooks", "Files & Folders", "Sticky Notes"]
  },
  {
    name: "Office Supplies",
    items: ["Desk Accessories", "Storage", "Paper", "Calculators"]
  },
  {
    name: "Art Supplies",
    items: ["Drawing", "Painting", "Crafting", "Sketching"]
  },
  {
    name: "Craft Material",
    items: ["Glue & Tape", "Scissors", "Rulers", "Cutting Tools"]
  }
];

const Header = () => {
  const [cartCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4">
        {/* Top Row */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Scooboo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold text-primary">SCOOBOO</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-8 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 h-12"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Navigation Row */}
        <div className="border-t py-3">
          <nav className="flex items-center space-x-8">
            {categories.map((category) => (
              <DropdownMenu key={category.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1">
                    <span>{category.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuGroup>
                    {category.items.map((item) => (
                      <DropdownMenuItem key={item}>
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
            <Button variant="ghost">Best Sellers</Button>
            <Button variant="ghost">Shop By Brand</Button>
            <Button variant="ghost">Popular on Reels</Button>
            <Button variant="ghost">Back to School</Button>
            <Button variant="ghost" className="text-primary">Clearance</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;