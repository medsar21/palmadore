import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import heroImage1 from "@/assets/hero-chocolate.jpg";
import heroImage2 from "@/assets/product-1.jpg";
import heroImage3 from "@/assets/product-2.jpg";
import heroImage4 from "@/assets/product-3.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  const slides = [
    {
      image: heroImage1,
      title: "Palmador Chocolatier",
      subtitle: "L'Art du Chocolat Raffiné",
      description: "Créations artisanales pour vos moments exceptionnels"
    },
    {
      image: heroImage2,
      title: "Palmador Chocolatier",
      subtitle: "L'Art du Chocolat Raffiné",
      description: "Créations artisanales pour vos moments exceptionnels"
    },
    {
      image: heroImage3,
      title: "Palmador Chocolatier",
      subtitle: "L'Art du Chocolat Raffiné",
      description: "Créations artisanales pour vos moments exceptionnels"
    },
    {
      image: heroImage4,
      title: "Palmador Chocolatier",
      subtitle: "L'Art du Chocolat Raffiné",
      description: "Créations artisanales pour vos moments exceptionnels"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleDiscoverClick = () => {
    navigate('/products');
  };

  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={`Palmador Chocolatier - ${slide.title}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Image précédente"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Image suivante"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-3 sm:px-4 text-white">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-2xl">
            {slides[currentSlide].title}
            <span className="block text-white mt-1 sm:mt-2 drop-shadow-lg font-light text-lg sm:text-xl md:text-2xl lg:text-3xl">
              {slides[currentSlide].subtitle}
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 text-white font-light drop-shadow-lg px-3 sm:px-6 py-2 sm:py-3 rounded-lg">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleDiscoverClick}
              className="bg-gradient-to-r from-chocolate to-chocolate/90 hover:from-chocolate/90 hover:to-chocolate/80 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 shadow-elegant transition-all duration-300 hover:scale-105 hover:shadow-2xl text-sm sm:text-base"
            >
              Découvrir nos chocolats
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-copper to-copper/90 hover:from-copper/90 hover:to-copper/80 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 shadow-elegant transition-all duration-300 hover:scale-105 hover:shadow-2xl text-sm sm:text-base"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contactez-nous
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-10 flex space-x-1 sm:space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-accent scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#produits"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
      >
        <ChevronDown className="h-8 w-8 text-white drop-shadow-lg" />
      </a>
    </section>
  );
};

export default Hero;
