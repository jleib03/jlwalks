import Script from "next/script";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@jlwalks.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "(555) 123-4567",
    description: "Mon-Fri, 8am-6pm",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "Greater Metro Area",
    description: "10-mile radius from downtown",
  },
  {
    icon: Clock,
    title: "Availability",
    value: "7 Days a Week",
    description: "Including holidays",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
            <p className="text-lg text-muted-foreground">
              Ready to give your dog the care they deserve? We'd love to hear
              from you. Reach out to schedule a meet-and-greet or ask any
              questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  Have questions? We're here to help. Reach out through any of
                  the channels below, or fill out the form and we'll get back to
                  you as soon as possible.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item) => (
                  <Card key={item.title}>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-sm">{item.title}</h3>
                          <p className="font-semibold">{item.value}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                <h3 className="font-semibold">What to Expect</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">1.</span>
                    <span>
                      Reach out via the form or contact info above
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">2.</span>
                    <span>
                      We'll schedule a free meet-and-greet at your home
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">3.</span>
                    <span>
                      Meet your dog and discuss their needs and routine
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">4.</span>
                    <span>
                      Choose a service plan and schedule your first walk!
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form Placeholder */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div id="critter-form" className="min-h-[400px]"></div>
                  <Script
                    src="https://v0-petcare-crm-git-campaign-enhancements-critter-projects.vercel.app/api/embed/forms/contact-us-form"
                    strategy="lazyOnload"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-2xl font-bold">Our Service Area</h2>
              <p className="text-muted-foreground">
                We proudly serve dogs throughout the greater metro area.
              </p>
            </div>
            {/* Map placeholder for future integration */}
            <div
              id="jlwalks-service-map"
              className="h-[300px] bg-muted rounded-lg flex items-center justify-center"
            >
              <div className="text-center text-muted-foreground">
                <MapPin className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">
                  Map integration placeholder
                  <br />
                  <code className="bg-background px-1 rounded text-xs">#jlwalks-service-map</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
