import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { Parallax } from "react-parallax";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Benefits = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Section id="features">

      <div className="container relative z-2">
        <MouseParallax>
        <Heading  
        className="md:max-w-md lg:max-w-2xl"
        title="Chat Smarter, Not Harder with Mindstream"
        />
        </MouseParallax>
        
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <Parallax key={item.id} strength={0.2} scale={1.05} translateY={[-10, 10]}>
              
                
              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <ScrollParallax>
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={item.iconUrl}
                      width={48}
                      height={48}
                      alt={item.title}
                    />
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Explore more
                    </p>
                    <Arrow />
                  </div>
                  </ScrollParallax>
                </div>

                {item.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
                <ClipPath />
              </div>
             
            </Parallax>
          ))}
        </div>
      </div>

    </Section>
  );
};

export default Benefits;
