import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function AltairGlobal(): JSX.Element {
  // Navigation links data
  const navLinks = [
    { text: "About Us", href: "#" },
    { text: "Outreach Events", href: "#" },
  ];

  // Social links data
  const socialLinks = [
    {
      href: "https://ftcscout.org/teams/11472",
      alt: "Rectangle",
      src: "", // Placeholder for rectangle1
    },
    {
      href: "https://ftc-events.firstinspires.org/team/11472",
      alt: "First logo",
      src: "", // Placeholder for FIRSTLogo1RemovebgPreview1
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Header */}
        <header className="w-full h-[164px] py-14 px-20 bg-white flex justify-between items-center">
          <div className="font-body-text font-[number:var(--body-text-font-weight)] text-black text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)]">
            Ravenclaw Robotics
          </div>
          <nav className="flex items-center gap-[var(--variable-collection-spacing-m)]">
            {navLinks.map((link, index) => (
              <Button
                key={index}
                variant="link"
                className="font-body-text font-[number:var(--body-text-font-weight)] text-black text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] h-auto"
              >
                {link.text}
              </Button>
            ))}
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col w-[733px] items-start justify-center gap-[var(--variable-collection-spacing-s)] px-20 mt-[244px]">
          <h1 className="relative self-stretch mt-[-1.00px] font-title font-[number:var(--title-font-weight)] text-black text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
            Altair Global Contest
          </h1>
          <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000bf] text-2xl tracking-[0] leading-9">
            A very momentary event for our team.
          </p>
        </section>

        {/* Banner Image */}
        <div className="w-full h-[340px] mt-[169px]">
          <img
            className="w-full h-full object-cover"
            alt="Altair Global Student Contest"
            src="" // Placeholder for image4
          />
        </div>

        {/* What Is The Contest Section */}
        <section className="flex flex-col px-[72px] mt-[118px]">
          <h2 className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[40px] tracking-[0] leading-[48.0px]">
            What Is The Contest?
          </h2>
          <p className="mt-6 font-subheading font-[number:var(--subheading-font-weight)] text-[#828282] text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)] max-w-[1107px]">
            The Altair Global Contest was a competition between FIRST teams to
            create a short video talking about their team and how using Altair
            benefits their lives. The prize is 3 $5000 sponsorships awarded to 3
            teams
          </p>
        </section>

        {/* What We Have Done Section */}
        <section className="flex flex-col px-[72px] mt-[200px]">
          <h2 className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[40px] tracking-[0] leading-[48.0px]">
            What We Have Done
          </h2>
          <p className="mt-6 font-subheading font-[number:var(--subheading-font-weight)] text-[#828282] text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)] max-w-[1141px]">
            Recently, our CAD team has been working on a special project for the
            Altair Global Contest: a prosthetic foot design meant to contribute
            to those in the world who need prosthetics, but don&#39;t have the
            resources. Two of our CAD team members, Shivam and Aarav, have spent
            a lot of time working on the project. Below are two videos Aarav and
            Abhijay, another member of our CAD team, made explaining how they
            create this prosthetic, the purpose, and how the software of Altair
            Inspire has impacted their lives. We hope to win the competition!
          </p>
        </section>

        {/* Footer */}
        <footer className="w-full h-[264px] mt-[1000px] bg-white">
          <Separator className="w-[1280px] mx-auto" />

          <div className="px-10 pt-9">
            <h3 className="[font-family:'Inter-Bold',Helvetica] font-bold text-black text-2xl tracking-[0] leading-9">
              Contact Us
            </h3>

            <div className="mt-6 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-9">
              samriddhigupta21@gmail.com
              <br />
              (469)-278-1201
            </div>

            <div className="flex gap-[61px] mt-[53px]">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="w-[50px] h-[50px] object-cover"
                    alt={link.alt}
                    src={link.src}
                  />
                </a>
              ))}
            </div>

            <div className="absolute h-5 top-[223px] right-[216px] font-subheadline-regular font-[number:var(--subheadline-regular-font-weight)] text-black text-[length:var(--subheadline-regular-font-size)] tracking-[var(--subheadline-regular-letter-spacing)] leading-[var(--subheadline-regular-line-height)] whitespace-nowrap [font-style:var(--subheadline-regular-font-style)]">
              FTC Team 11472, 2016 - 2025
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
