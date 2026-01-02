import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dog, Mountain, Home, Check } from "lucide-react";

const services = [
  {
    id: "dog-walking",
    icon: Dog,
    title: "Dog Walking",
    subtitle: "Daily exercise for a happy pup",
    description:
      "Our signature dog walking service provides your furry friend with the exercise, mental stimulation, and socialization they need. Whether your dog needs a quick potty break or a longer adventure, we've got you covered.",
    features: [
      "30 or 60-minute walk options",
      "Flexible scheduling - weekdays and weekends",
      "GPS tracking so you know the route",
      "Photo updates after each walk",
      "Fresh water provided",
      "Individual or small group walks available",
    ],
    pricing: "Starting at $25/walk",
  },
  {
    id: "adventure-walks",
    icon: Mountain,
    title: "Adventure Walks",
    subtitle: "For the explorer in your dog",
    description:
      "Take your dog's walk to the next level with our Adventure Walks. We'll take your pup to local trails, parks, and outdoor spaces for an extended exploration session. Perfect for high-energy dogs who love to sniff, explore, and run.",
    features: [
      "90-minute to 2-hour adventures",
      "Trail hikes and nature walks",
      "Off-leash time (where permitted and safe)",
      "Small group adventures with compatible dogs",
      "Swimming opportunities (seasonal)",
      "Multiple photo and video updates",
    ],
    pricing: "Starting at $45/adventure",
  },
  {
    id: "drop-ins",
    icon: Home,
    title: "Drop-In Visits",
    subtitle: "Quick check-ins when you're away",
    description:
      "Can't make it home for lunch? Need someone to let your dog out while you're stuck at work? Our drop-in visits provide your dog with a potty break, some love, and peace of mind for you.",
    features: [
      "15 or 30-minute visit options",
      "Potty breaks and yard time",
      "Feeding and fresh water",
      "Medication administration available",
      "Mail and package pickup",
      "Quick playtime and cuddles",
    ],
    pricing: "Starting at $18/visit",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Professional pet care tailored to your dog's unique needs. From
              daily walks to outdoor adventures, we've got your pup covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <Card className="overflow-hidden">
                  <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    <div className="md:w-1/3 bg-primary/5 p-8 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                        <service.icon className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <CardDescription className="text-base">
                          {service.subtitle}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                        <div>
                          <h4 className="font-semibold mb-3">What's Included:</h4>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {service.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start space-x-2 text-sm"
                              >
                                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <span className="text-lg font-semibold text-primary">
                            {service.pricing}
                          </span>
                          <Button asChild>
                            <Link href="/contact">Book Now</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Not Sure What You Need?</h2>
            <p className="text-muted-foreground">
              Every dog is different. Let's chat about your pup's needs and find
              the perfect care plan together.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Schedule a Meet & Greet</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
