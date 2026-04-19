"use client";
import { type IconProps } from "../types";
import { motion as m } from "motion/react";
import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR = 'button, a, [role="button"], [data-interactive]';

export default function MinusIcon({
  variant = "stroke",
  size = 24,
  primaryColor = "#B7B7B7",
  secondaryColor = "#520000",
  animationTrigger = "hover",
  animationDuration = 1000,
  animationEasing = "linear",
  animationLoop = false,
}: IconProps) {
  const [isActive, setIsActive] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const svg = svgRef.current;
    if (!svg) return;

    const target = (svg.closest(INTERACTIVE_SELECTOR) ?? svg) as Element;

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

  const transition = {
    duration: animationDuration / 1000,
    ease: animationEasing,
    repeat: animationLoop ? Infinity : 0,
    repeatType: "loop" as const,
    repeatDelay: animationLoop ? animationDuration / 1000 : 0,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="11" y="11" width="2" height="2" rx="1" fill={primaryColor} />
      <rect x="13" y="11" width="2" height="2" rx="1" fill={primaryColor} />
      <rect x="15" y="11" width="2" height="2" rx="1" fill={primaryColor} />
      <rect x="17" y="11" width="2" height="2" rx="1" fill={primaryColor} />
      <rect x="19" y="11" width="2" height="2" rx="1" fill={primaryColor} />
      <rect x="21" y="11" width="2" height="2" rx="1" fill={primaryColor} />
      <rect x="1" y="11" width="2" height="2" rx="1" fill={primaryColor} />
      <rect x="3" y="11" width="2" height="2" rx="1" fill={primaryColor} />
      <rect x="5" y="11" width="2" height="2" rx="1" fill={primaryColor} />
      <rect x="7" y="11" width="2" height="2" rx="1" fill={primaryColor} />
      <rect x="9" y="11" width="2" height="2" rx="1" fill={primaryColor} />
    </svg>
  );
}
