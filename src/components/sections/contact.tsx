import { Mail, MapPin, Phone } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@ikli.com",
    href: "mailto:hello@ikli.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available worldwide",
    href: "#",
  },
] as const;

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <FadeIn>
            <Badge variant="secondary" className="mb-4">
              Contact
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s discuss your next project.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Share your goals and timeline. We&apos;ll respond with a clear
              path forward — no server forms required, just a direct conversation
              to get started.
            </p>

            <Button
              render={<a href="mailto:hello@ikli.com" />}
              size="lg"
              className="mt-8 h-11 px-5"
            >
              Email Ikli
            </Button>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="border-border/60 bg-card/50">
              <CardHeader>
                <CardTitle>Get in touch</CardTitle>
                <CardDescription>
                  Replace these placeholders with your official company details
                  before launch.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <a
                      key={detail.label}
                      href={detail.href}
                      className="flex items-start gap-3 rounded-xl border border-border/60 p-4 transition-colors hover:border-primary/40 hover:bg-muted/30"
                    >
                      <div className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {detail.label}
                        </p>
                        <p className="font-medium">{detail.value}</p>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
