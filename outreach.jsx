import React from "react";
import FIRSTLogo1RemovebgPreview12 from "./FIRST-logo-1-removebg-preview-1-2.png";
import FIRSTLogo1RemovebgPreview1 from "./FIRST-logo-1-removebg-preview-1.png";
import divider from "./divider.svg";
import image from "./image.png";
import image1 from "./image.svg";
import ravenclawRoboticsHackathon1 from "./ravenclaw-robotics-hackathon-1.png";
import ravenclawRoboticsHackathon2 from "./ravenclaw-robotics-hackathon-2.png";
import ravenclawRoboticsHackathon3 from "./ravenclaw-robotics-hackathon-3.png";
import rectangle1 from "./rectangle-1.png";

export const OutreachEvents = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1440px] h-[3603px] relative">
        <div className="flex flex-col w-[733px] items-start justify-center gap-[var(--variable-collection-spacing-s)] absolute top-[244px] left-20">
          <div className="relative self-stretch mt-[-1.00px] font-title font-[number:var(--title-font-weight)] text-black text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
            Outreach Events
          </div>

          <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000bf] text-2xl tracking-[0] leading-9">
            See the events we’re hosting this year and learn how you can
            participate!
          </p>
        </div>

        <div className="absolute w-[1440px] h-[164px] top-0 left-0 bg-white">
          <div className="inline-flex items-center justify-end gap-[var(--variable-collection-spacing-m)] absolute top-14 left-[1025px]">
            <div className="relative w-fit mt-[-1.00px] font-body-text font-[number:var(--body-text-font-weight)] text-black text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]">
              About Us
            </div>

            <div className="relative w-fit mt-[-1.00px] font-body-text font-[number:var(--body-text-font-weight)] text-black text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]">
              Altair Global Contest
            </div>
          </div>

          <div className="absolute h-[30px] top-[66px] left-20 font-body-text font-[number:var(--body-text-font-weight)] text-black text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]">
            Ravenclaw Robotics
          </div>
        </div>

        <img
          className="top-[459px] absolute w-[640px] h-[829px] left-20 object-cover"
          alt="Ravenclaw robotics"
          src={ravenclawRoboticsHackathon1}
        />

        <div className="top-[459px] flex flex-col w-[567px] items-start justify-center gap-[var(--variable-collection-spacing-s)] absolute left-[769px]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[40px] tracking-[0] leading-[48.0px]">
            Ravenclaw Robotics’ Hackathon
          </div>

          <p className="relative self-stretch font-subheading font-[number:var(--subheading-font-weight)] text-[#828282] text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]">
            We’re hosting an online hackathon on July 26th from 4:00pm to
            7:00pm. Beginner and advanced coders are welcome to participate. The
            cash prize is still being determined. There is no fee for signing
            up.
            <br />
            <br />
            Beginner coders have to be between 5-10 years old and will be
            creating a program on Scratch. Advanced coders have to be between
            10-17 years old and will be creating a webpage using HTML, CSS, and
            JavaScript. <br />
            <br />
            The theme for each level will be announced on the day of the
            competition, and participants will have two hours to create their
            program, and then 30 minutes for the judges to review their
            programs. The results will be announced at the end.
          </p>

          <a
            className="relative w-[138px] h-[60px]"
            href="https://docs.google.com/forms/d/e/1FAIpQLScQ_9YEtFj9_qbJYYBRG_04kapXLyEW2iDjj48zpBUOEtDCkw/viewform?usp=header"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="all-[unset] box-border inline-flex items-center gap-2 px-6 py-3 relative bg-black rounded-lg shadow-button-shadow">
              <a
                className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-2xl tracking-[0] leading-9 whitespace-nowrap"
                href="https://docs.google.com/forms/d/e/1FAIpQLScQ_9YEtFj9_qbJYYBRG_04kapXLyEW2iDjj48zpBUOEtDCkw/viewform?usp=header"
                rel="noopener noreferrer"
                target="_blank"
              >
                Sign Up
              </a>
            </button>
          </a>
        </div>

        <img
          className="top-[1436px] absolute w-[640px] h-[829px] left-20 object-cover"
          alt="Ravenclaw robotics"
          src={ravenclawRoboticsHackathon2}
        />

        <div className="absolute w-[567px] h-[480px] top-[1436px] left-[769px]">
          <div className="flex flex-col w-[567px] items-start justify-center gap-[var(--variable-collection-spacing-s)] absolute top-0 left-0">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[40px] tracking-[0] leading-[48.0px]">
              Ravenclaw Robotics’ Bake Sale
            </div>

            <p className="relative self-stretch font-subheading font-[number:var(--subheading-font-weight)] text-[#828282] text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]">
              We’re hosting a bake sale at Russell Creek Park on July 15th from
              6:00pm to 8:00pm. We are selling:
              <br />
              Lemonade: $1 per cup
              <br />
              Tea: $1 per cup
              <br />
              Cookie: $2 per cookie
              <br />
              Popsicle: $2 per popsicle
              <br />
              <br />
              We’re excited to share our evening with you and we hope you enjoy
              our treats!
            </p>
          </div>

          <div className="flex flex-col w-[567px] items-start justify-center gap-[var(--variable-collection-spacing-s)] absolute top-0 left-0">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[40px] tracking-[0] leading-[48.0px]">
              Ravenclaw Robotics’ Bake Sale
            </div>

            <p className="relative self-stretch font-subheading font-[number:var(--subheading-font-weight)] text-[#828282] text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]">
              We’re hosting a bake sale at Russell Creek Park on July 15th from
              6:00pm to 8:00pm. We are selling:
              <br />
              Lemonade: $1 per cup
              <br />
              Tea: $1 per cup
              <br />
              Cookie: $2 per cookie
              <br />
              Popsicle: $2 per popsicle
              <br />
              <br />
              We’re excited to share our evening with you and we hope you enjoy
              our treats!
            </p>
          </div>
        </div>

        <img
          className="top-[2390px] absolute w-[640px] h-[829px] left-20 object-cover"
          alt="Ravenclaw robotics"
          src={ravenclawRoboticsHackathon3}
        />

        <div className="top-[2390px] flex flex-col w-[567px] items-start justify-center gap-[var(--variable-collection-spacing-s)] absolute left-[769px]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[40px] tracking-[0] leading-[48.0px]">
            Click, Code, Create!
          </div>

          <p className="relative self-stretch font-subheading font-[number:var(--subheading-font-weight)] text-[#828282] text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]">
            We’re hosting free coding lessons for Python and Java on Thursdays
            from 3:00pm to 4:00pm. Coders of any level are welcome to join us.
            Our classes will be taught by our experienced coders on our team.
            Along with teaching, we will give the students fun and engaging
            exercises and games to help them learn.
            <br />
            <br />
            Unfortunately, the sign-up window has closed for this event. Feel
            free to be on the lookout for one of our future events!
          </p>
        </div>

        <div className="absolute w-[1440px] h-[264px] top-[3339px] left-0">
          <div className="absolute w-[1440px] h-[264px] top-0 left-0 bg-white">
            <div className="absolute h-9 top-9 left-10 [font-family:'Inter-Bold',Helvetica] font-bold text-black text-2xl tracking-[0] leading-9 whitespace-nowrap">
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

            <div className="absolute w-[654px] h-[67px] top-[72px] left-10 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-9">
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

          <div className="absolute w-[1440px] h-[264px] top-0 left-0 bg-white">
            <div className="absolute h-9 top-9 left-10 [font-family:'Inter-Bold',Helvetica] font-bold text-black text-2xl tracking-[0] leading-9 whitespace-nowrap">
              Contact Us
            </div>

            <p className="absolute h-5 top-[223px] left-[1224px] font-subheadline-regular font-[number:var(--subheadline-regular-font-weight)] text-black text-[length:var(--subheadline-regular-font-size)] tracking-[var(--subheadline-regular-letter-spacing)] leading-[var(--subheadline-regular-line-height)] whitespace-nowrap [font-style:var(--subheadline-regular-font-style)]">
              FTC Team 11472, 2016 - 2025
            </p>

            <img
              className="absolute w-[1280px] h-px top-0 left-20 object-cover"
              alt="Divider"
              src={image1}
            />

            <a
              href="https://ftcscout.org/teams/11472"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="absolute w-[50px] h-[50px] top-[174px] left-10 object-cover block"
                alt="Rectangle"
                src={image}
              />
            </a>

            <div className="absolute w-[654px] h-[67px] top-[72px] left-10 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-9">
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
                src={FIRSTLogo1RemovebgPreview12}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
