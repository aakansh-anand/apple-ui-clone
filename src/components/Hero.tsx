"use client";
import { heroVideo, smallHeroVideo } from "@/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2.2,
    });

    gsap.to("#cta", {
      opacity: 1,
      delay: 2.8,
      y: -50,
    });
  }, []);

  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const video = window.innerWidth < 760 ? smallHeroVideo : heroVideo;
    setVideoSrc(video);
  }, []);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  });
  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex-center h-5/6 w-full flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="w-9/12 md:w-10/12">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        className="flex translate-y-20 flex-col items-center opacity-0"
        id="cta"
      >
        <Link
          href={"/#highlights"}
          className="btn transition-colors duration-200"
        >
          Buy
        </Link>
        <p className="text-xl font-normal">From $199/month or $999</p>
      </div>
    </section>
  );
};
export default Hero;
