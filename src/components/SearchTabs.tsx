import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users, Plane, Building, Train, Bus, Search } from "lucide-react";

const SearchTabs = () => {
  const [activeTab, setActiveTab] = useState("flights");

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 w-full max-w-md mx-auto mb-8 bg-white/10 backdrop-blur-sm">
          <TabsTrigger value="flights" className="data-[state=active]:bg-white data-[state=active]:text-primary">
            <Plane className="h-4 w-4 mr-2" />
            Flights
          </TabsTrigger>
          <TabsTrigger value="hotels" className="data-[state=active]:bg-white data-[state=active]:text-primary">
            <Building className="h-4 w-4 mr-2" />
            Hotels
          </TabsTrigger>
          <TabsTrigger value="trains" className="data-[state=active]:bg-white data-[state=active]:text-primary">
            <Train className="h-4 w-4 mr-2" />
            Trains
          </TabsTrigger>
          <TabsTrigger value="buses" className="data-[state=active]:bg-white data-[state=active]:text-primary">
            <Bus className="h-4 w-4 mr-2" />
            Buses
          </TabsTrigger>
        </TabsList>

        <Card className="bg-white/95 backdrop-blur-sm shadow-large border-0">
          <CardContent className="p-6">
            <TabsContent value="flights" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">FROM</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Delhi (DEL)" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">TO</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Mumbai (BOM)" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">DEPARTURE</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="date" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">TRAVELLERS</Label>
                  <Select>
                    <SelectTrigger>
                      <Users className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="1 Traveller" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Traveller</SelectItem>
                      <SelectItem value="2">2 Travellers</SelectItem>
                      <SelectItem value="3">3 Travellers</SelectItem>
                      <SelectItem value="4">4+ Travellers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-gradient-accent hover:opacity-90 text-white border-0 shadow-medium">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="hotels" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">DESTINATION</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Goa, India" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">CHECK-IN</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="date" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">CHECK-OUT</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="date" className="pl-10" />
                  </div>
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-gradient-accent hover:opacity-90 text-white border-0 shadow-medium">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="trains" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">FROM</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="New Delhi" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">TO</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Mumbai Central" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">DEPARTURE</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="date" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">CLASS</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Classes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Classes</SelectItem>
                      <SelectItem value="ac1">AC First Class</SelectItem>
                      <SelectItem value="ac2">AC 2 Tier</SelectItem>
                      <SelectItem value="ac3">AC 3 Tier</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-gradient-accent hover:opacity-90 text-white border-0 shadow-medium">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="buses" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">FROM</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Delhi" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">TO</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Manali" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">DEPARTURE</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="date" className="pl-10" />
                  </div>
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-gradient-accent hover:opacity-90 text-white border-0 shadow-medium">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
};

export default SearchTabs;