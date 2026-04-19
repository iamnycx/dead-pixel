"use client";

import { useEffect, useRef, useState } from "react";
import { motion as m, type Transition } from "motion/react";
import { IconProps } from "../types";

const EASING_MAP = {
  linear: "linear",
  easeIn: "easeIn",
  easeOut: "easeOut",
  easeInOut: "easeInOut",
} as const;

export default function SettingsIcon({
  variant = "stroke",
  size = 24,
  primaryColor = "#B7B7B7",
  secondaryColor = "#520000",
  animationTrigger = "hover",
  animationDuration = 300,
  animationEasing = "easeInOut",
  animationLoop = false,
}: IconProps) {
  const [isActive, setIsActive] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const svg = svgRef.current;
    if (!svg) return;

    const target = svg.parentElement as Element;
    if (!target) return;

    if (animationTrigger === "hover") {
      const onEnter = () => setIsActive(true);
      const onLeave = () => setIsActive(false);
      target.addEventListener("mouseenter", onEnter);
      target.addEventListener("mouseleave", onLeave);
      return () => {
        target.removeEventListener("mouseenter", onEnter);
        target.removeEventListener("mouseleave", onLeave);
      };
    } else {
      const onClick = () => setIsActive((p) => !p);
      target.addEventListener("click", onClick);
      return () => target.removeEventListener("click", onClick);
    }
  }, [animationTrigger]);

  useEffect(() => {
    if (animationLoop && animationTrigger === "click" && isActive) {
      const interval = setInterval(
        () => setIsActive((p) => !p),
        animationDuration * 2,
      );
      return () => clearInterval(interval);
    }
  }, [animationLoop, animationTrigger, animationDuration, isActive]);

  const transition: Transition = {
    duration: animationDuration / 1000,
    ease: EASING_MAP[animationEasing],
    repeat: animationLoop ? Infinity : 0,
    repeatType: "reverse",
  };

  if (variant === "stroke") {
    return (
      <svg
        ref={svgRef}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="5" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="5" y="5" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="7" y="5" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="9" y="5" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="11" y="5" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="13" y="5" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="15" y="5" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="17" y="5" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="19" y="5" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="3" y="17" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="5" y="17" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="7" y="17" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="9" y="17" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="11" y="17" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="13" y="17" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="15" y="17" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="17" y="17" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="19" y="17" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="3" y="11" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="5" y="11" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="7" y="11" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="9" y="11" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="11" y="11" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="15" y="11" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="17" y="11" width="2" height="2" rx="1" fill={primaryColor} />
        <rect x="19" y="11" width="2" height="2" rx="1" fill={primaryColor} />
        <m.rect
          animate={{ x: isActive ? 6 : 0 }}
          transition={transition}
          x="9"
          y="7"
          width="2"
          height="2"
          rx="1"
          fill={primaryColor}
        />
        <m.rect
          animate={{ x: isActive ? -6 : 0 }}
          transition={transition}
          x="13"
          y="9"
          width="2"
          height="2"
          rx="1"
          fill={primaryColor}
        />
        <m.rect
          animate={{ x: isActive ? -6 : 0 }}
          transition={transition}
          x="15"
          y="9"
          width="2"
          height="2"
          rx="1"
          fill={primaryColor}
        />
        <rect x="13" y="11" width="2" height="2" rx="1" fill={primaryColor} />

        <m.rect
          animate={{ x: isActive ? 6 : 0 }}
          transition={transition}
          x="7"
          y="3"
          width="2"
          height="2"
          rx="1"
          fill={primaryColor}
        />
        <m.rect
          animate={{ x: isActive ? 6 : 0 }}
          transition={transition}
          x="9"
          y="3"
          width="2"
          height="2"
          rx="1"
          fill={primaryColor}
        />
        <m.rect
          animate={{ x: isActive ? 6 : 0 }}
          transition={transition}
          x="7"
          y="7"
          width="2"
          height="2"
          rx="1"
          fill={primaryColor}
        />
        <m.rect
          animate={{ x: isActive ? -6 : 0 }}
          transition={transition}
          x="13"
          y="13"
          width="2"
          height="2"
          rx="1"
          fill={primaryColor}
        />
        <m.rect
          animate={{ x: isActive ? -6 : 0 }}
          transition={transition}
          x="15"
          y="13"
          width="2"
          height="2"
          rx="1"
          fill={primaryColor}
        />
        <m.rect
          animate={{ x: isActive ? 6 : 0 }}
          transition={transition}
          x="7"
          y="15"
          width="2"
          height="2"
          rx="1"
          fill={primaryColor}
        />
        <m.rect
          animate={{ x: isActive ? 6 : 0 }}
          transition={transition}
          x="9"
          y="15"
          width="2"
          height="2"
          rx="1"
          fill={primaryColor}
        />
        <m.rect
          animate={{ x: isActive ? 6 : 0 }}
          transition={transition}
          x="7"
          y="19"
          width="2"
          height="2"
          rx="1"
          fill={primaryColor}
        />
        <m.rect
          animate={{ x: isActive ? 6 : 0 }}
          transition={transition}
          x="9"
          y="19"
          width="2"
          height="2"
          rx="1"
          fill={primaryColor}
        />
      </svg>
    );
  }
}
