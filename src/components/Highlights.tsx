import { rightImg, watchImg } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      duration: 1,
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.5,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="common-padding h-full w-screen overflow-hidden bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full items-center justify-between md:flex">
          <h1 className="section-heading" id="title">
            Get the Highlights
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <Image
                src={watchImg}
                alt="play"
                width={20}
                height={20}
                className="ml-2"
              />
            </p>

            <p className="link">
              Watch the film
              <Image
                src={rightImg}
                alt="right"
                width={8}
                height={8}
                className="ml-2"
              />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};
export default Highlights;
