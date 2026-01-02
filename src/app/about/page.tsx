import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, MapPin } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Genuine Love for Dogs",
    description:
      "We're not just in it for the walks—we genuinely love spending time with dogs. Each pup we care for becomes part of our extended family.",
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description:
      "Fully insured, background-checked, and trained in pet first aid. We take our responsibility to your pet seriously.",
  },
  {
    icon: Users,
    title: "Personalized Care",
    description:
      "No two dogs are the same. We customize our services to match your dog's energy level, preferences, and needs.",
  },
  {
    icon: MapPin,
    title: "Local & Reliable",
    description:
      "Based right here in your community, we're committed to being a reliable partner in your pet care routine.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">About JL Walks</h1>
            <p className="text-lg text-muted-foreground">
              More than a dog walking service—we're your partner in keeping your
              furry family member happy and healthy.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                JL Walks was founded with a simple belief: every dog deserves
                quality care and attention, even when their owners can't be
                there. What started as helping neighbors with their pets has
                grown into a full-service dog walking and pet care business.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We understand that your dog is family. That's why we treat every
                walk, every visit, and every adventure as an opportunity to
                enrich your dog's life. Our goal isn't just to provide a
                service—it's to build lasting relationships with both you and
                your four-legged friend.
              </p>
            </div>

            <div className="bg-primary/5 rounded-lg p-8 space-y-4">
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground italic text-lg">
                "To provide exceptional, personalized pet care that keeps dogs
                healthy, happy, and loved—giving pet parents peace of mind and
                tails wagging."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">What We Stand For</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our values guide everything we do, from how we interact with your
              pets to how we communicate with you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold">Service Area</h2>
              <p className="text-muted-foreground">
                We proudly serve dogs and their families throughout the greater
                metro area.
              </p>
            </div>
            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">
                Currently serving neighborhoods within a 10-mile radius of
                downtown. Not sure if we cover your area? Reach out—we're always
                looking to expand!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Let's Meet!</h2>
            <p className="opacity-90">
              We'd love to meet you and your pup. Schedule a free meet-and-greet
              to see if we're the right fit for your family.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule a Meet & Greet</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
