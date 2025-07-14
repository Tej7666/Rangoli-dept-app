import { useState } from "react";
import { Search, ShoppingCart, Menu, ChevronDown, User } from "lucide-react";
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
import whatsappLogo from "@/assets/WhatsApp Image 2025-07-14 at 14.22.28.jpeg";
import logo88E0 from "@/assets/88E0AA42-E918-4B68-AA07-00A0651EC458_4_5005_c.jpeg";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";

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
        {/* Desktop Header */}
        <div className="hidden md:flex flex-col gap-2 md:flex-row md:items-center md:justify-between py-4">
          {/* Logo */}
          <div className="flex items-center min-w-0 pl-0 w-full md:w-auto" style={{flexBasis: 0, flexGrow: 1}}>
            <img src={whatsappLogo} alt="WhatsApp Logo" className="h-12 w-12 md:h-16 md:w-16 rounded flex-shrink-0" style={{marginLeft: 1}} />
            <div className="flex-1 min-w-0">
              <img src={logo88E0} alt="New Logo" className="w-full max-w-xs md:max-w-lg h-10 md:h-16 object-fill rounded mx-2 md:mx-6" />
            </div>
          </div>

          {/* Search Bar - desktop only */}
          <div className="w-full md:flex-1 md:mx-8 md:max-w-xl mt-2 md:mt-0 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 h-10 md:h-12"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center justify-end gap-4 mt-2 md:mt-0">
            <Button variant="ghost" size="icon" className="h-10 w-10 md:h-12 md:w-12">
              <User className="h-6 w-6 md:h-8 md:w-8" />
            </Button>
            <Button variant="ghost" size="icon" className="relative h-10 w-10 md:h-12 md:w-12">
              <ShoppingCart className="h-6 w-6 md:h-8 md:w-8" />
              {cartCount > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 md:h-6 md:w-6 flex items-center justify-center text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden h-14 flex items-center px-0 w-full relative justify-between">
          {/* Left: Hamburger + WhatsApp logo */}
          <div className="flex items-center gap-2">
            {/* Hamburger menu flush left */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-14 w-14 p-0 flex items-center justify-center -ml-4">
                  <Menu className="!h-9 !w-9" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-3/4 max-w-xs">
                <div className="flex items-center justify-between px-4 py-3 border-b">
                  <img src={whatsappLogo} alt="WhatsApp Logo" className="h-8 w-8 rounded" />
                  <img src={logo88E0} alt="New Logo" className="!h-15 w-auto object-contain rounded" />
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <span className="sr-only">Close</span>
                      <Menu className="h-6 w-6 rotate-45" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col divide-y">
                  <Button variant="ghost" className="justify-start w-full rounded-none py-4">Stationery</Button>
                  <Button variant="ghost" className="justify-start w-full rounded-none py-4">Office Supplies</Button>
                  <Button variant="ghost" className="justify-start w-full rounded-none py-4">Art Supplies</Button>
                  <Button variant="ghost" className="justify-start w-full rounded-none py-4">Craft Material</Button>
                  <Button variant="ghost" className="justify-start w-full rounded-none py-4">Best Sellers</Button>
                  <Button variant="ghost" className="justify-start w-full rounded-none py-4">Shop By Brand</Button>
                  <Button variant="ghost" className="justify-start w-full rounded-none py-4">Popular on Reels</Button>
                  <Button variant="ghost" className="justify-start w-full rounded-none py-4">Back to School</Button>
                  <Button variant="ghost" className="justify-start w-full rounded-none py-4">Clearance</Button>
                </nav>
              </SheetContent>
            </Sheet>
            <img src={whatsappLogo} alt="WhatsApp Logo" className="!h-9 !w-9 rounded" />
          </div>
          {/* Center: logo88E0 (absolute for perfect centering) */}
          <div className="absolute !pl-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none">
            <img src={logo88E0} alt="New Logo" className="!h-10 !w-auto max-w-[200px] object-contain" />
          </div>
          {/* Right: User + Cart icons */}
          <div className="flex items-center gap-2 ml-auto">
            <Button variant="ghost" size="icon" className="h-10 w-10 p-0 flex items-center justify-center">
              <User className="!h-9 !w-9" />
            </Button>
            <Button variant="ghost" size="icon" className="relative h-10 w-10 p-0 flex items-center justify-center">
              <ShoppingCart className="!h-9 !w-9" />
              {cartCount > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
        {/* Search Bar below header - rounded, only on mobile */}
        <div className="relative px-2 mt-1 block md:hidden">
          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 pt-4 pb-4 mt-4 mb-4 !h-10 w-full rounded-full bg-gray-100 border-none shadow-sm"
          />
        </div>

        {/* Navigation Row - Desktop only */}
        <div className="border-t py-3 hidden md:block">
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