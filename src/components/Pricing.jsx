import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { MouseParallax, ScrollParallax } from "react-just-parallax";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
      <ScrollParallax>
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
            <img
              src={smallSphere} 
              className="relative z-1 flex"
              width={255}
              height={255}
              alt="Sphere"
            />
        
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
      </ScrollParallax>
      <MouseParallax>
          <Heading
            tag="Get started with Brainwave"
            title="Pay once, use forever"
          />
      </MouseParallax>
      <ScrollParallax>
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
      </ScrollParallax>
      <MouseParallax>
        <div className="flex justify-center mt-15">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
        </MouseParallax>
      </div>
    </Section>
  );
};

export default Pricing;
