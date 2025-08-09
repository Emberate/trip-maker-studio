import { Button } from "@/components/ui/button";
import { Plane, User, Menu, Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-hero rounded-lg">
            <Plane className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            TripMaker
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Flights
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Hotels
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Holiday Packages
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Trains
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Buses
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="hidden md:flex">
            <User className="h-4 w-4 mr-2" />
            Login/Signup
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;