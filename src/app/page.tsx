import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dog, Mountain, Home, Shield, Heart, Clock } from "lucide-react";

const services = [
  {
    icon: Dog,
    title: "Dog Walking",
    description: "Daily walks tailored to your dog's needs. Flexible scheduling with 30 or 60-minute options.",
    href: "/services#dog-walking",
  },
  {
    icon: Mountain,
    title: "Adventure Walks",
    description: "Trail hikes and outdoor adventures for energetic pups who love to explore.",
    href: "/services#adventure-walks",
  },
  {
    icon: Home,
    title: "Drop-In Visits",
    description: "Quick visits for feeding, potty breaks, and some quality playtime.",
    href: "/services#drop-ins",
  },
];

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Your pet's safety is our priority. We're fully bonded and insured.",
  },
  {
    icon: Heart,
    title: "Passionate Care",
    description: "We treat every dog like family with genuine love and attention.",
  },
  {
    icon: Clock,
    title: "Reliable Service",
    description: "Consistent scheduling you can count on, rain or shine.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Happy Dogs,{" "}
              <span className="text-primary">Happy Lives</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional dog walking and pet care services that keep your furry
              friends healthy, exercised, and tail-waggingly happy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link href="/contact">Book a Walk</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From daily walks to outdoor adventures, we offer comprehensive care
              tailored to your dog's unique needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0" asChild>
                    <Link href={service.href}>Learn more →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose JL Walks?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're more than just dog walkers—we're dedicated pet care professionals
              committed to your dog's wellbeing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Give Your Dog the Best?
            </h2>
            <p className="text-lg opacity-90">
              Schedule a meet-and-greet today and see why dogs love JL Walks.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
