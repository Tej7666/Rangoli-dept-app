import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const heroSlides = [
  {
    id: 1,
    title: "BRAND width Full!!!",
    subtitle: "Every Stationery Brand You Love, At One Place.",
    image: heroBanner,
    cta: "Shop Now"
  },
  {
    id: 2,
    title: "Back to School Sale",
    subtitle: "Get up to 50% off on all school supplies",
    image: heroBanner,
    cta: "Explore Deals"
  },
  {
    id: 3,
    title: "Premium Art Supplies",
    subtitle: "Professional quality materials for artists",
    image: heroBanner,
    cta: "Shop Art"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-[300px] md:h-[500px] overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="h-full bg-black/20 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl text-center mx-auto animate-fade-in px-2 md:px-0">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                      <span className="text-primary">BRAND</span>
                      <span className="text-foreground">width Full!!!</span>
                    </h2>
                    <p className="text-base md:text-xl mb-4 md:mb-8 text-foreground">
                      {slide.subtitle}
                    </p>
                    <Button size="sm" className="text-base md:text-lg px-4 md:px-8 py-2 md:py-3">
                      {slide.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-primary" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;