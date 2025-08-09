import { Card, CardContent } from "@/components/ui/card";
import { Plane, Building, Package, Train, Bus, Shield, Headphones, CreditCard } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Book domestic and international flights with best prices and instant confirmation",
    color: "bg-travel-blue"
  },
  {
    icon: Building,
    title: "Hotel Booking",
    description: "Choose from thousands of hotels worldwide with verified reviews and photos",
    color: "bg-travel-teal"
  },
  {
    icon: Package,
    title: "Holiday Packages",
    description: "Customized vacation packages including flights, hotels, and activities",
    color: "bg-travel-orange"
  },
  {
    icon: Train,
    title: "Train Booking",
    description: "Book train tickets across India with real-time availability and quick booking",
    color: "bg-primary"
  },
  {
    icon: Bus,
    title: "Bus Booking",
    description: "Comfortable bus travel with top operators and convenient boarding points",
    color: "bg-accent"
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive travel insurance for worry-free journeys and peace of mind",
    color: "bg-travel-blue"
  }
];

const features = [
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your travel needs"
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your data and payments are protected with industry-standard security"
  },
  {
    icon: CreditCard,
    title: "Easy Payment",
    description: "Multiple payment options including EMI, wallets, and bank transfers"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Services Grid */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Travel Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for your perfect trip, all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-0 shadow-soft cursor-pointer">
                <CardContent className="p-6">
                  <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="bg-gradient-card rounded-2xl p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Why Choose TripMaker?
            </h3>
            <p className="text-muted-foreground">
              Your trusted travel partner with millions of satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;