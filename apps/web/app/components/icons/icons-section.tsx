"use client";

import { useState } from "react";
import Container from "../container";
import IconRender from "./icon-render";
import IconsGrid from "./icons-grid";
import { HeartDuotone, HeartFill, HeartStroke } from "../temp/heart-icon";
import { MoonDuotone, MoonFill, MoonStroke } from "../temp/moon-icon";
import { SunDuotone, SunFill, SunStroke } from "../temp/sun-icon";
import { SearchDuotone, SearchFill, SearchStroke } from "../temp/search-icon";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";

type IconVariant = "stroke" | "fill" | "duotone";

interface VariantTab {
  value: IconVariant;
  label: string;
}

interface IconData {
  title: string;
  stroke: React.ReactNode;
  fill: React.ReactNode;
  duotone: React.ReactNode;
}

const ICONS_DATA: IconData[] = [
  {
    title: "Heart",
    stroke: <HeartStroke />,
    fill: <HeartFill />,
    duotone: <HeartDuotone />,
  },
  {
    title: "Moon",
    stroke: <MoonStroke />,
    fill: <MoonFill />,
    duotone: <MoonDuotone />,
  },
  {
    title: "Sun",
    stroke: <SunStroke />,
    fill: <SunFill />,
    duotone: <SunDuotone />,
  },
  {
    title: "Search",
    stroke: <SearchStroke />,
    fill: <SearchFill />,
    duotone: <SearchDuotone />,
  },
];

const VARIANT_TABS: VariantTab[] = [
  { value: "stroke", label: "Stroke" },
  { value: "fill", label: "Fill" },
  { value: "duotone", label: "Duotone" },
];

export default function IconsSection() {
  const [activeVariant, setActiveVariant] = useState<IconVariant>("stroke");

  return (
    <Container className="min-h-screen border-t">
      <div className="flex justify-between items-center border-b border-muted-foreground border-dashed">
        <div className="relative w-fit ml-1">
          <Input placeholder="Search" />
          <span className="absolute tracking-wider text-xs right-4 top-1/2 -translate-y-1/2">
            Ctrl+K
          </span>
        </div>
        <div>
          <nav className="flex">
            {VARIANT_TABS.map(({ value, label }) => {
              const isActive = activeVariant === value;
              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveVariant(value)}
                  className={cn(
                    "py-4 px-9 text-center text-xs tracking-wider uppercase hover:bg-muted/25 cursor-pointer border-l relative w-fit border-muted-foreground border-dashed",
                    isActive && "bg-muted/10",
                  )}
                >
                  {label}
                  {isActive && (
                    <div className="w-1/2 left-1/2 translate-y-1 rounded-full -translate-x-1/2 h-[0.05rem] absolute bg-primary"></div>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
      <div>
        <IconsGrid>
          {ICONS_DATA.map(({ title, stroke, fill, duotone }) => {
            let iconToRender;
            switch (activeVariant) {
              case "stroke":
                iconToRender = stroke;
                break;
              case "fill":
                iconToRender = fill;
                break;
              case "duotone":
                iconToRender = duotone;
                break;
            }
            return <IconRender key={title} icon={iconToRender} title={title} />;
          })}
        </IconsGrid>
      </div>
    </Container>
  );
}
