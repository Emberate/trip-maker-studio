import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin } from "lucide-react";
import santoriniImage from "@/assets/santorini.jpg";
import himalayasImage from "@/assets/himalayas.jpg";
import rainforestImage from "@/assets/rainforest.jpg";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    country: "Greece",
    image: santoriniImage,
    rating: 4.8,
    price: "₹45,000",
    description: "Beautiful island with stunning sunsets"
  },
  {
    id: 2,
    name: "Himalayas, Nepal",
    country: "Nepal",
    image: himalayasImage,
    rating: 4.9,
    price: "₹35,000",
    description: "Majestic mountain ranges and trekking"
  },
  {
    id: 3,
    name: "Costa Rica",
    country: "Central America",
    image: rainforestImage,
    rating: 4.7,
    price: "₹55,000",
    description: "Tropical paradise with rich biodiversity"
  }
];

const PopularDestinations = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Destinations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover amazing places around the world with our curated travel packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden border-0 shadow-medium hover:shadow-large transition-all duration-300 cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-gradient-accent text-white px-3 py-1 rounded-full">
                  <span className="font-semibold">Starting {destination.price}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{destination.country}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {destination.name}
                </h3>
                <p className="text-muted-foreground">
                  {destination.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;