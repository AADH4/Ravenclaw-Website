import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function ClickCodeCreate(): JSX.Element {
  // Navigation menu items
  const navItems = [
    { label: "About Us", href: "#" },
    { label: "Altair Global Contest", href: "#" },
    { label: "Outreach Events", href: "#" },
  ];

  // Social links
  const socialLinks = [
    {
      href: "https://ftcscout.org/teams/11472",
      alt: "FTC Scout",
      icon: "", // Placeholder for image
    },
    {
      href: "https://ftc-events.firstinspires.org/team/11472",
      alt: "FIRST",
      icon: "", // Placeholder for image
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Header/Navigation */}
        <header className="w-full py-6 px-20 bg-white">
          <div className="flex justify-between items-center">
            <div className="font-body-text text-black">Ravenclaw Robotics</div>
            <NavigationMenu>
              <NavigationMenuList className="flex gap-[var(--variable-collection-spacing-m)]">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      className="font-body-text text-black"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-20">
          <section className="flex flex-col md:flex-row gap-8 py-16">
            <div className="flex flex-col w-full md:w-[733px] gap-[var(--variable-collection-spacing-s)]">
              <h1 className="font-title font-[number:var(--title-font-weight)] text-black text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)]">
                Click, Code Create!
              </h1>

              <p className="font-subheading font-[number:var(--subheading-font-weight)] text-[#000000bf] text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)]">
                We&apos;re hosting free coding lessons for Python and Java on
                Thursdays from 3:00pm to 4:00pm. Coders of any level are welcome
                to join us. Our classes will be taught by our experienced coders
                on our team. Along with teaching, we will give the students fun
                and engaging exercises and games to help them learn.
                <br />
                <br />
                Unfortunately, the sign-up window has closed for this event.
                Feel free to be on the lookout for one of our future events!
              </p>
            </div>

            <div className="w-full md:w-[514px]">
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  <img
                    className="w-full h-auto object-cover"
                    alt="Ravenclaw robotics"
                    src="" // Placeholder for image
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="py-16 flex justify-end">
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <img
                  className="w-full max-w-[733px] h-auto object-cover"
                  alt="Coding class session"
                  src="" // Placeholder for image
                />
              </CardContent>
            </Card>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full mt-16 px-10 pt-9 pb-5 bg-white">
          <Separator className="mb-9" />

          <h2 className="font-subheading font-[number:var(--subheading-font-weight)] text-black text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)]">
            Contact Us
          </h2>

          <div className="font-subheading mt-4 mb-8 text-black">
            samriddhigupta21@gmail.com
            <br />
            (469)-278-1201
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                className="p-0 h-auto"
                asChild
              >
                <a href={link.href} rel="noopener noreferrer" target="_blank">
                  <img
                    className="w-[50px] h-[50px] object-cover"
                    alt={link.alt}
                    src={link.icon}
                  />
                </a>
              </Button>
            ))}
          </div>

          <div className="text-right mt-8 font-subheadline-regular font-[number:var(--subheadline-regular-font-weight)] text-black text-[length:var(--subheadline-regular-font-size)] tracking-[var(--subheadline-regular-letter-spacing)] leading-[var(--subheadline-regular-line-height)]">
            FTC Team 11472, 2016 - 2025
          </div>
        </footer>
      </div>
    </div>
  );
}
