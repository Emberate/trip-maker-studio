import SearchTabs from "./SearchTabs";
import heroImage from "@/assets/hero-beach.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Beautiful tropical destination" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Journey
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Discover amazing destinations, book flights, hotels, and create unforgettable memories with the best travel deals
          </p>
        </div>

        {/* Search Component */}
        <SearchTabs />
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/20 to-transparent" />
    </section>
  );
};

export default HeroSection;