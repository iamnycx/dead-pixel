"use client";

import { useState } from "react";
import Container from "../../common/container";
import IconRender from "./icon-render";
import IconsGrid from "./icons-grid";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";

import { HeartIcon, MoonIcon, SearchIcon, SunIcon } from "dead-pixel-icons";

type IconVariant = "stroke" | "fill" | "duotone";

interface VariantTab {
  value: IconVariant;
  label: string;
}

interface IconData {
  title: string;
  icon: React.ComponentType<{ type?: IconVariant }>;
}

const ICONS_DATA: IconData[] = [
  {
    title: "Heart",
    icon: HeartIcon,
  },
  {
    title: "Moon",
    icon: MoonIcon,
  },
  {
    title: "Sun",
    icon: SunIcon,
  },
  {
    title: "Search",
    icon: SearchIcon,
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
      <div className="flex justify-between border-b border-muted-foreground border-dashed">
        <div className="relative w-72 border-r border-muted-foreground border-dashed">
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
          {ICONS_DATA.map(({ title, icon: Icon }) => (
            <IconRender key={title} title={title}>
              <Icon type={activeVariant} />
            </IconRender>
          ))}
        </IconsGrid>
      </div>
    </Container>
  );
}
