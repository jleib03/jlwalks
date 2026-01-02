import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Drop-In Visit",
    description: "Quick check-ins for busy days",
    prices: [
      { duration: "15 minutes", price: 18 },
      { duration: "30 minutes", price: 25 },
    ],
    features: [
      "Potty break",
      "Fresh water refill",
      "Quick playtime",
      "Photo update",
    ],
    popular: false,
  },
  {
    name: "Dog Walking",
    description: "Daily exercise and enrichment",
    prices: [
      { duration: "30 minutes", price: 25 },
      { duration: "60 minutes", price: 40 },
    ],
    features: [
      "Neighborhood walk",
      "GPS route tracking",
      "Photo updates",
      "Waste cleanup included",
      "Fresh water provided",
    ],
    popular: true,
  },
  {
    name: "Adventure Walk",
    description: "Extended outdoor exploration",
    prices: [
      { duration: "90 minutes", price: 45 },
      { duration: "2 hours", price: 60 },
    ],
    features: [
      "Trail or park adventure",
      "Off-leash time (where safe)",
      "Multiple photo/video updates",
      "Small group option available",
      "Swimming (seasonal)",
    ],
    popular: false,
  },
];

const packages = [
  {
    name: "Weekly Walker",
    description: "5 walks per week",
    discount: "10% off",
    details: "Perfect for busy professionals",
  },
  {
    name: "Monthly Member",
    description: "20 walks per month",
    discount: "15% off",
    details: "Best value for regular care",
  },
  {
    name: "Puppy Package",
    description: "Multiple daily visits",
    discount: "Custom pricing",
    details: "Ideal for puppies under 1 year",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Simple, Transparent Pricing</h1>
            <p className="text-lg text-muted-foreground">
              Quality care at fair prices. No hidden fees, no surprises—just
              happy dogs and happy owners.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    {plan.prices.map((price) => (
                      <div
                        key={price.duration}
                        className="flex justify-between items-center py-2 border-b last:border-0"
                      >
                        <span className="text-sm text-muted-foreground">
                          {price.duration}
                        </span>
                        <span className="text-lg font-semibold">
                          ${price.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Save with Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Commit to regular walks and save. Our packages offer the best
              value for consistent care.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {packages.map((pkg) => (
              <Card key={pkg.name} className="text-center">
                <CardHeader>
                  <div className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-2">
                    {pkg.discount}
                  </div>
                  <CardTitle className="text-lg">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pkg.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Good to Know</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Cancellation Policy</h3>
                <p className="text-sm text-muted-foreground">
                  We understand plans change. Cancel or reschedule with 24-hour
                  notice for a full refund. Same-day cancellations are charged
                  at 50%.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Holiday Rates</h3>
                <p className="text-sm text-muted-foreground">
                  A $10 holiday surcharge applies on major holidays. We're here
                  for your pets when you need us most!
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Multi-Pet Discount</h3>
                <p className="text-sm text-muted-foreground">
                  Have more than one dog? Add additional dogs from the same
                  household at 50% off the regular rate.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">First Walk Free</h3>
                <p className="text-sm text-muted-foreground">
                  New clients receive a complimentary meet-and-greet and first
                  30-minute walk to make sure we're a great fit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="opacity-90">
              Book your free meet-and-greet today and let's find the perfect
              care plan for your pup.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
