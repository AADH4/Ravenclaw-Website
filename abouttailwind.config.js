import React from "react";
import FIRSTLogo1RemovebgPreview1 from "./FIRST-logo-1-removebg-preview-1.png";
import { ProductInfoCard } from "./ProductInfoCard";
import divider from "./divider.svg";
import rectangle1 from "./rectangle-1.png";

export const AboutUs = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1440px] h-[2600px] relative">
        <div className="flex flex-col w-[733px] items-start justify-center gap-[var(--variable-collection-spacing-s)] absolute top-[244px] left-20">
          <div className="relative self-stretch mt-[-1.00px] font-title font-[number:var(--title-font-weight)] text-black text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
            About Us
          </div>

          <p className="relative self-stretch font-subheading font-[number:var(--subheading-font-weight)] text-[#000000bf] text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]">
            Learn about our team and who we are.
          </p>
        </div>

        <div className="absolute w-[1440px] h-[164px] top-0 left-0 bg-white">
          <div className="inline-flex items-center justify-end gap-[var(--variable-collection-spacing-m)] absolute top-14 left-[955px]">
            <div className="relative w-fit mt-[-1.00px] font-body-text font-[number:var(--body-text-font-weight)] text-black text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]">
              Altair Global Contest
            </div>

            <div className="relative w-fit mt-[-1.00px] font-body-text font-[number:var(--body-text-font-weight)] text-black text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]">
              Outreach Events
            </div>
          </div>

          <div className="absolute h-[30px] top-[66px] left-20 font-body-text font-[number:var(--body-text-font-weight)] text-black text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]">
            Ravenclaw Robotics
          </div>
        </div>

        <ProductInfoCard
          className="!h-[375px] !min-w-[unset] !flex !absolute !left-[165px] !w-60 !top-[574px]"
          imageClassName="!bg-[50%_50%] bg-[url(/image.png)] !bg-cover ![background:unset]"
          textSmallText="8th Grade"
          textStrongText="Team Captain"
          textText="Samriddhi Gupta"
        />
        <ProductInfoCard
          className="!h-[375px] !min-w-[unset] !flex !left-[455px] !absolute !w-60 !top-[574px]"
          textSmallText="8th Grade"
          textStrongText="CAD/Code"
          textText="Abhijay Ahuja"
        />
        <ProductInfoCard
          className="!h-[375px] !min-w-[unset] !flex !left-[745px] !absolute !w-60 !top-[574px]"
          textSmallText="8th Grade"
          textStrongText="Code/Outreach"
          textText="Ashmita Banerjee"
        />
        <ProductInfoCard
          className="!h-[375px] !min-w-[unset] !flex !left-[1035px] !absolute !w-60 !top-[574px]"
          textSmallText="8th Grade"
          textStrongText="Build/Outreach"
          textText="Kaustabh Bose"
        />
        <ProductInfoCard
          className="!h-[375px] !min-w-[unset] !flex !left-[165px] !absolute !w-60 !top-[999px]"
          textSmallText="8th Grade"
          textStrongText="Outreach"
          textText="Tanirika Datta"
        />
        <ProductInfoCard
          className="!h-[375px] !min-w-[unset] !flex !left-[455px] !absolute !w-60 !top-[999px]"
          textSmallText="8th Grade"
          textStrongText="CAD/Build"
          textText="Aarav Gupta"
        />
        <ProductInfoCard
          className="!h-[375px] !min-w-[unset] !flex !left-[745px] !absolute !w-60 !top-[999px]"
          textSmallText="8th Grade"
          textStrongText="CAD/Build"
          textText="Ishaan Kothari"
        />
        <ProductInfoCard
          className="!h-[375px] !min-w-[unset] !flex !left-[1035px] !absolute !w-60 !top-[999px]"
          textSmallText="8th Grade"
          textStrongText="Build"
          textText="Sanika Mule"
        />
        <ProductInfoCard
          className="!h-[375px] !min-w-[unset] !flex !left-[165px] !absolute !w-60 !top-[1424px]"
          textSmallText="8th Grade"
          textStrongText="CAD/Code"
          textText="Atharva Saikia"
        />
        <ProductInfoCard
          className="!h-[375px] !min-w-[unset] !flex !left-[455px] !absolute !w-60 !top-[1424px]"
          textSmallText="8th Grade"
          textStrongText="Outreach"
          textText="Urvashi Shah"
        />
        <ProductInfoCard
          className="!h-[375px] !min-w-[unset] !flex !left-[745px] !absolute !w-60 !top-[1424px]"
          textSmallText="8th Grade"
          textStrongText="Code"
          textText="Daniel Varghese"
        />
        <ProductInfoCard
          className="!h-[375px] !min-w-[unset] !flex !left-[310px] !absolute !w-60 !top-[1849px]"
          imageClassName="!bg-[50%_50%] bg-[url(/image-2.png)] !bg-cover ![background:unset]"
          textSmallText="7th Grade"
          textStrongText="Build"
          textText="Vaishnavi Nistala"
        />
        <ProductInfoCard
          className="!h-[375px] !min-w-[unset] !flex !left-[600px] !absolute !w-60 !top-[1849px]"
          textSmallText="7th Grade"
          textStrongText="CAD/Outreach"
          textText="Shivam Patel"
        />
        <ProductInfoCard
          className="!h-[375px] !min-w-[unset] !flex !left-[890px] !absolute !w-60 !top-[1849px]"
          textSmallText="7th Grade"
          textStrongText="Outreach"
          textText="Shanaya Pingulkar"
        />
        <ProductInfoCard
          className="!h-[375px] !min-w-[unset] !flex !left-[1035px] !absolute !w-60 !top-[1424px]"
          textSmallText="7th Grade"
          textStrongText="Build"
          textText="Claire Chen"
        />
        <div className="absolute w-[1440px] h-[264px] top-[2336px] left-0 bg-white">
          <div className="absolute h-9 top-9 left-10 font-subheading font-[number:var(--subheading-font-weight)] text-black text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] whitespace-nowrap [font-style:var(--subheading-font-style)]">
            Contact Us
          </div>

          <p className="absolute h-5 top-[223px] left-[1224px] font-subheadline-regular font-[number:var(--subheadline-regular-font-weight)] text-black text-[length:var(--subheadline-regular-font-size)] tracking-[var(--subheadline-regular-letter-spacing)] leading-[var(--subheadline-regular-line-height)] whitespace-nowrap [font-style:var(--subheadline-regular-font-style)]">
            FTC Team 11472, 2016 - 2025
          </p>

          <img
            className="absolute w-[1280px] h-px top-0 left-20 object-cover"
            alt="Divider"
            src={divider}
          />

          <a
            href="https://ftcscout.org/teams/11472"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="absolute w-[50px] h-[50px] top-[174px] left-10 object-cover block"
              alt="Rectangle"
              src={rectangle1}
            />
          </a>

          <div className="absolute w-[654px] h-[67px] top-[72px] left-10 font-subheading font-[number:var(--subheading-font-weight)] text-black text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]">
            samriddhigupta21@gmail.com
            <br />
            (469)-278-1201
          </div>

          <a
            href="https://ftc-events.firstinspires.org/team/11472"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="absolute w-[50px] h-[50px] top-[174px] left-[121px] object-cover block"
              alt="First logo"
              src={FIRSTLogo1RemovebgPreview1}
            />
          </a>
        </div>

        <div className="absolute w-[306px] top-[470px] left-[567px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[40px] tracking-[0] leading-[48.0px] whitespace-nowrap">
          Meet the Team
        </div>
      </div>
    </div>
  );
};
