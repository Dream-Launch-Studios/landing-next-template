"use client";
import { useState, useEffect } from "react";
import Macbook from "@/../public/macbook-desktop.png";
import DesktopView from "@/../public/desktop-view.png";
import MacbookCodeKitMobile from "@/../public/macbook-codekit-mobile.png";

const ScrollZoom = ({
  minZoom = 0.5,
  maxZoom = 2.2,
  startZoom = 0.9,
  zoomSpeed = 500,
}) => {
  const [scale, setScale] = useState(startZoom);
  const [macbookOpacity, setMacbookOpacity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const vh = window.innerHeight / 100;
      const scrollTop = document.documentElement.scrollTop;
      const start = 50 * vh;
      const stop = 100 * vh;

      if (scrollTop > start && scrollTop < stop) {
        const newScale = Math.max(
          startZoom - (scrollTop - start) / zoomSpeed,
          minZoom
        );
        setScale(newScale);
        const opacity = Math.min((scrollTop - start) / (stop - start), 1);
        setMacbookOpacity(opacity);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [minZoom, maxZoom, startZoom, zoomSpeed, isMobile]);

  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center md:min-h-screen">
        <img
          src={MacbookCodeKitMobile.src}
          alt="Mobile View"
          className="w-full px-4"
        />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col sm:mt-0 -mt-72  md:min-h-[30vh] animate-fade-in [--animation-delay:200ms]">
        <div
          className={`mt-10 -mb-28 text-rose-gold-400 text-center`}
          style={{
            opacity: scale <= 0.6 ? 0 : Math.min((2.2 - scale) / 1.6, 1),
            transition: "opacity 0.5s ease-in-out",
          }}
        ></div>
        <div
          className="items-center"
          style={{
            position: "sticky",
            top: "0vh",
            height: "auto",
            willChange: "transform",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={Macbook.src}
            alt="Background Zoomable"
            className="z-50"
            style={{
              width: `60%`,
              position: "absolute",
              left: "",
              transform: `scale(${Math.min(1 / scale, 1.5)})`,
              transition: "transform 0.1s ease-out",
              opacity: macbookOpacity,
            }}
          />
          <img
            src={DesktopView.src}
            alt="Zoomable"
            className="z-50"
            style={{
              width: `100%`,
              transform: `scale(${scale})`,
              transition: "transform 0.1s ease-out",
              position: "relative",
              zIndex: 999,
              borderRadius: "sm:30px 10px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ScrollZoom;
