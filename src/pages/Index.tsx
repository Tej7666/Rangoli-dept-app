import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandShowcase from "@/components/BrandShowcase";
import Footer from "@/components/Footer";
import CartPage from "@/components/CartPage";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <BrandShowcase />
        <CartPage />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
