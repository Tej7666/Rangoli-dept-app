import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import whatsappLogo from "@/assets/WhatsApp Image 2025-07-14 at 14.22.28.jpeg";
import logo88E0 from "@/assets/88E0AA42-E918-4B68-AA07-00A0651EC458_4_5005_c.jpeg";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={whatsappLogo} alt="WhatsApp Logo" className="h-8 w-8 rounded" />
              <img src={logo88E0} alt="New Logo" className="h-8 w-auto rounded" />
            </div>
            <p className="text-muted-foreground">
              Your one-stop destination for all stationery needs. Quality products from trusted brands at unbeatable prices.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                "About Us",
                "Contact Us",
                "Shipping Info",
                "Returns & Exchanges",
                "Size Guide",
                "Privacy Policy",
                "Terms of Service"
              ].map((link) => (
                <div key={link}>
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                    {link}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">Categories</h4>
            <div className="space-y-2">
              {[
                "Pens & Pencils",
                "Notebooks",
                "Art Supplies",
                "Office Supplies",
                "Craft Materials",
                "School Supplies",
                "Desk Accessories"
              ].map((category) => (
                <div key={category}>
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                    {category}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">+91 7775003614</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">hello@rangolidepartmentt.in</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                <span className="text-sm">Marketyard, Ganesh Nagar, Sangamner, Maharashtra 422605</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h5 className="font-medium">Newsletter</h5>
              <p className="text-sm text-muted-foreground">Subscribe for offers and updates</p>
              <div className="flex space-x-2">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Scooboo. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>We accept:</span>
            <span className="font-medium">Visa • Mastercard • UPI • Net Banking</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;