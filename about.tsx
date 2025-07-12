import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import React from "react";

// Team member data for mapping
const teamMembers = [
  {
    name: "Samriddhi Gupta",
    role: "Team Captain",
    grade: "8th Grade",
    image: "/image.png", // Using placeholder for actual image path
    row: 1,
    col: 1,
  },
  {
    name: "Abhijay Ahuja",
    role: "CAD/Code",
    grade: "8th Grade",
    image: null,
    row: 1,
    col: 2,
  },
  {
    name: "Ashmita Banerjee",
    role: "Code/Outreach",
    grade: "8th Grade",
    image: null,
    row: 1,
    col: 3,
  },
  {
    name: "Kaustabh Bose",
    role: "Build/Outreach",
    grade: "8th Grade",
    image: null,
    row: 1,
    col: 4,
  },
  {
    name: "Tanirika Datta",
    role: "Outreach",
    grade: "8th Grade",
    image: null,
    row: 2,
    col: 1,
  },
  {
    name: "Aarav Gupta",
    role: "CAD/Build",
    grade: "8th Grade",
    image: null,
    row: 2,
    col: 2,
  },
  {
    name: "Ishaan Kothari",
    role: "CAD/Build",
    grade: "8th Grade",
    image: null,
    row: 2,
    col: 3,
  },
  {
    name: "Sanika Mule",
    role: "Build",
    grade: "8th Grade",
    image: null,
    row: 2,
    col: 4,
  },
  {
    name: "Atharva Saikia",
    role: "CAD/Code",
    grade: "8th Grade",
    image: null,
    row: 3,
    col: 1,
  },
  {
    name: "Urvashi Shah",
    role: "Outreach",
    grade: "8th Grade",
    image: null,
    row: 3,
    col: 2,
  },
  {
    name: "Daniel Varghese",
    role: "Code",
    grade: "8th Grade",
    image: null,
    row: 3,
    col: 3,
  },
  {
    name: "Claire Chen",
    role: "Build",
    grade: "7th Grade",
    image: null,
    row: 3,
    col: 4,
  },
  {
    name: "Vaishnavi Nistala",
    role: "Build",
    grade: "7th Grade",
    image: "/image-2.png", // Using placeholder for actual image path
    row: 4,
    col: 1,
  },
  {
    name: "Shivam Patel",
    role: "CAD/Outreach",
    grade: "7th Grade",
    image: null,
    row: 4,
    col: 2,
  },
  {
    name: "Shanaya Pingulkar",
    role: "Outreach",
    grade: "7th Grade",
    image: null,
    row: 4,
    col: 3,
  },
];

const AboutUs = (): JSX.Element => {
  // Group team members by row for easier rendering
  const teamMembersByRow = teamMembers.reduce((acc, member) => {
    if (!acc[member.row]) {
      acc[member.row] = [];
    }
    acc[member.row].push(member);
    return acc;
  }, {});

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        {/* Header/Navigation */}
        <header className="w-full h-[164px] bg-white">
          <div className="flex justify-between items-center px-20 pt-14">
            <div className="font-body-text text-black">Ravenclaw Robotics</div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className="font-body-text text-black">
                    Altair Global Contest
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="font-body-text text-black">
                    Outreach Events
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>

        {/* About Us Section */}
        <section className="px-20 mt-20">
          <div className="flex flex-col w-full max-w-[733px] gap-[var(--variable-collection-spacing-s)]">
            <h1 className="font-title text-black text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] font-[number:var(--title-font-weight)] [font-style:var(--title-font-style)]">
              About Us
            </h1>
            <p className="font-subheading text-[#000000bf] text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] font-[number:var(--subheading-font-weight)] [font-style:var(--subheading-font-style)]">
              Learn about our team and who we are.
            </p>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="mt-40 px-20">
          <h2 className="text-center text-[40px] font-semibold text-black leading-[48px] mb-16">
            Meet the Team
          </h2>

          {/* Team Members Grid */}
          <div className="flex flex-col gap-12">
            {Object.keys(teamMembersByRow).map((rowNum) => (
              <div
                key={`row-${rowNum}`}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {teamMembersByRow[rowNum].map((member, index) => (
                  <Card
                    key={`${member.name}-${index}`}
                    className="w-60 h-[375px] bg-color-background-default-default rounded-[var(--size-radius-200)] border border-solid border-color-border-default-default"
                  >
                    <CardContent className="p-[var(--size-space-400)] flex flex-col gap-[var(--size-space-400)]">
                      <div
                        className={`w-full h-[247px] ${
                          member.image
                            ? `bg-[url(${member.image})] bg-cover bg-center`
                            : "bg-[linear-gradient(0deg,rgba(227,227,227,1)_0%,rgba(227,227,227,1)_100%)]"
                        }`}
                      />
                      <div className="flex flex-col w-52 gap-[var(--size-space-200)]">
                        <div className="flex items-start w-full">
                          <div className="flex-1 mt-[-1.00px] font-body-base font-[number:var(--body-base-font-weight)] text-color-text-default-default text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
                            {member.name}
                          </div>
                        </div>
                        <div className="inline-flex items-start">
                          <div className="w-fit mt-[-1.00px] font-body-strong font-[number:var(--body-strong-font-weight)] text-color-text-default-default text-[length:var(--body-strong-font-size)] tracking-[var(--body-strong-letter-spacing)] leading-[var(--body-strong-line-height)] whitespace-nowrap [font-style:var(--body-strong-font-style)]">
                            {member.role}
                          </div>
                        </div>
                        <div className="flex items-start w-full">
                          <div className="w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-color-text-default-secondary text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                            {member.grade}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full h-[264px] mt-20 bg-white">
          <Separator className="w-[1280px] mx-auto" />

          <div className="px-20 py-9">
            <h3 className="font-subheading text-black text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]">
              Contact Us
            </h3>

            <div className="mt-6 font-subheading text-black text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]">
              samriddhigupta21@gmail.com
              <br />
              (469)-278-1201
            </div>

            <div className="flex gap-6 mt-10">
              <a
                href="https://ftcscout.org/teams/11472"
                rel="noopener noreferrer"
                target="_blank"
                className="block"
              >
                <img
                  className="w-[50px] h-[50px] object-cover"
                  alt="Rectangle"
                  src=""
                />
              </a>

              <a
                href="https://ftc-events.firstinspires.org/team/11472"
                rel="noopener noreferrer"
                target="_blank"
                className="block"
              >
                <img
                  className="w-[50px] h-[50px] object-cover"
                  alt="First logo"
                  src=""
                />
              </a>
            </div>

            <div className="text-right mt-6 font-subheadline-regular text-black text-[length:var(--subheadline-regular-font-size)] tracking-[var(--subheadline-regular-letter-spacing)] leading-[var(--subheadline-regular-line-height)] [font-style:var(--subheadline-regular-font-style)]">
              FTC Team 11472, 2016 - 2025
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;
