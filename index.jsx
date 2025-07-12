import React from "react";
import { Button } from "./Button";
import { Cards } from "./Cards";
import { CardsWrapper } from "./CardsWrapper";
import { Div } from "./Div";
import { DivWrapper } from "./DivWrapper";
import { Navigation } from "./Navigation";
import { NavigationFooter } from "./NavigationFooter";
import { Section } from "./Section";
import { SectionWrapper } from "./SectionWrapper";

export const Home = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1440px] h-[2750px] relative">
        <div className="absolute w-[1280px] h-[640px] top-[-1480px] left-[79px] rounded-lg bg-[url(/hero-image.png)] bg-cover bg-[50%_50%]" />

        <div className="absolute w-[624px] h-[58px] top-[732px] left-20">
          <div className="absolute w-[624px] top-0 left-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-5xl tracking-[-0.96px] leading-[normal]">
            What We’re Doing Now
          </div>

          <div className="absolute w-[624px] top-0 left-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-5xl tracking-[-0.96px] leading-[normal]">
            What We’re Doing Now
          </div>
        </div>

        <div className="absolute w-[1015px] h-[713px] top-[856px] left-20">
          <Cards />
          <CardsWrapper />
        </div>

        <div className="absolute w-[1440px] h-[259px] top-[2227px] left-0">
          <Section />
          <SectionWrapper />
          <DivWrapper />
          <Div />
        </div>

        <div className="absolute w-[193px] h-[77px] top-[212px] left-[79px]">
          <div className="w-[193px] h-[77px] gap-10 absolute top-0 left-0 flex flex-col items-start">
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto] mb-[-312.00px]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[64px] tracking-[-1.28px] leading-[normal]">
                Home
              </div>

              <p className="relative w-[1000px] mr-[-807.00px] font-subheading font-[number:var(--subheading-font-weight)] text-[#000000bf] text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]">
                <span className="font-subheading font-[number:var(--subheading-font-weight)] text-[#000000bf] text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]">
                  We are Ravenclaw Robotics’ FTC (FIRST Tech Challenge) Team,
                  and our goal this upcoming season is to inspire other kids to
                  become better engineers and to motivate them to make robotics
                  one of their true interests. Along with this, our goal is to
                  build a functional robot that can efficiently score points and
                  get better every season. Feel free to navigate through the
                  website to find out about our upcoming Outreach events,
                  additional competitions we have participated in, and progress
                  on our robot. You can support our cause and mission through
                  donations and/or sponsorships by contacting us at{" "}
                </span>

                <a
                  href="mailto:samriddhigupta21@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="underline font-subheading [font-style:var(--subheading-font-style)] font-[number:var(--subheading-font-weight)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] text-[length:var(--subheading-font-size)]">
                    samriddhigupta21@gmail.com
                  </span>
                </a>

                <span className="font-subheading font-[number:var(--subheading-font-weight)] text-[#000000bf] text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]">
                  {" "}
                  or call us at (469)-278-1201.
                </span>
              </p>
            </div>
          </div>

          <div className="w-[193px] h-[77px] gap-10 absolute top-0 left-0 flex flex-col items-start">
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto] mb-[-312.00px]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[64px] tracking-[-1.28px] leading-[normal]">
                Home
              </div>

              <p className="relative w-[1000px] mr-[-807.00px] font-subheading font-[number:var(--subheading-font-weight)] text-[#000000bf] text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]">
                <span className="font-subheading font-[number:var(--subheading-font-weight)] text-[#000000bf] text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]">
                  We are Ravenclaw Robotics’ FTC (FIRST Tech Challenge) Team,
                  and our goal this upcoming season is to inspire other kids to
                  become better engineers and to motivate them to make robotics
                  one of their true interests. Along with this, our goal is to
                  build a functional robot that can efficiently score points and
                  get better every season. Feel free to navigate through the
                  website to find out about our upcoming Outreach events,
                  additional competitions we have participated in, and progress
                  on our robot. You can support our cause and mission through
                  donations and/or sponsorships by contacting us at{" "}
                </span>

                <a
                  href="mailto:samriddhigupta21@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="underline font-subheading [font-style:var(--subheading-font-style)] font-[number:var(--subheading-font-weight)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] text-[length:var(--subheading-font-size)]">
                    samriddhigupta21@gmail.com
                  </span>
                </a>

                <span className="font-subheading font-[number:var(--subheading-font-weight)] text-[#000000bf] text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]">
                  {" "}
                  or call us at (469)-278-1201.
                </span>
              </p>
            </div>
          </div>
        </div>

        <NavigationFooter />
        <div className="absolute w-[121px] h-10 top-[1135px] left-[1151px] rounded-lg">
          <Button
            className="!absolute !left-0 !top-0"
            label="See More"
            size="medium"
            stateProp="default"
            variant="primary"
          />
          <Button
            className="!absolute !left-0 !top-0"
            label="See More"
            size="medium"
            stateProp="default"
            variant="primary"
          />
        </div>

        <Navigation />
      </div>
    </div>
  );
};
