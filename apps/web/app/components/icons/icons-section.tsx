"use client";

import { useState } from "react";
import Container from "../../common/container";
import IconRender from "./icon-render";
import IconsGrid from "./icons-grid";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";

import {
  CopyIcon,
  CrossIcon,
  HeartIcon,
  MinusIcon,
  MoonIcon,
  PlusIcon,
  SearchIcon,
  SunIcon,
  type IconProps,
} from "dead-pixel-icons";
import IconPopup from "./icon-popup";

type IconVariant = IconProps["variant"];

interface VariantTab {
  value: IconVariant;
  label: string;
}

export interface IconData {
  id: number;
  title: string;
  icon: React.ComponentType<IconProps>;
}

const ICONS_DATA: IconData[] = [
  {
    id: 1,
    title: "Copy",
    icon: CopyIcon,
  },
  {
    id: 2,
    title: "Moon",
    icon: MoonIcon,
  },
  {
    id: 3,
    title: "Sun",
    icon: SunIcon,
  },
  {
    id: 4,
    title: "Search",
    icon: SearchIcon,
  },
  {
    id: 5,
    title: "Cross",
    icon: CrossIcon,
  },
  {
    id: 6,
    title: "Plus",
    icon: PlusIcon,
  },
  {
    id: 7,
    title: "Minus",
    icon: MinusIcon,
  },
  {
    id: 8,
    title: "Heart",
    icon: HeartIcon,
  },
];

const VARIANT_TABS: VariantTab[] = [
  { value: "stroke", label: "Stroke" },
  { value: "fill", label: "Fill" },
  { value: "duotone", label: "Duotone" },
];

export default function IconsSection() {
  const [activeVariant, setActiveVariant] = useState<IconVariant>("stroke");
  const [iconPopupOpen, setIconPopupOpen] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIcons = ICONS_DATA.filter((icon) =>
    icon.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Container id="icons" className="min-h-screen border-t">
      <div className="flex justify-between border-b border-muted-foreground border-dashed">
        <div className="relative w-80 border-r border-muted-foreground border-dashed">
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="absolute tracking-wider text-xs right-8 top-1/2 -translate-y-1/2">
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
          {filteredIcons.map(({ id, title, icon: Icon }) => (
            <IconRender
              key={id}
              title={title}
              onClick={() => setIconPopupOpen(id)}
            >
              <Icon variant={activeVariant} />
            </IconRender>
          ))}
        </IconsGrid>
      </div>
      {iconPopupOpen && (
        <IconPopup
          icon={ICONS_DATA.find((v) => v.id === iconPopupOpen)!}
          setIconPopupOpen={setIconPopupOpen}
        />
      )}
    </Container>
  );
}
