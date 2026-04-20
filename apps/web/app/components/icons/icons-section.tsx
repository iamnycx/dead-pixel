"use client";

import { useState } from "react";
import Container from "../../common/container";
import IconRender from "./icon-render";
import IconsGrid from "./icons-grid";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";

import { ICONS_DATA } from "./constant";

import { type IconProps } from "dead-pixel-icons";
import IconPopup from "./icon-popup";

type IconVariant = IconProps["variant"];

interface VariantTab {
  value: IconVariant;
  label: string;
}

export interface IconData {
  id: number;
  title: string;
  name: string;
  icon: React.ComponentType<IconProps>;
}

const VARIANT_TABS: VariantTab[] = [
  { value: "stroke", label: "Stroke" },
  { value: "fill", label: "Fill" },
  { value: "duotone", label: "Duotone" },
];

export default function IconsSection() {
  const [activeVariant, setActiveVariant] = useState<IconVariant>("stroke");
  const [iconPopupOpen, setIconPopupOpen] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(98);

  const filteredIcons = ICONS_DATA.filter((icon) =>
    icon.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const visibleIcons = filteredIcons.slice(0, visibleCount);
  const hasMore = visibleCount < filteredIcons.length;

  return (
    <Container
      id="icons"
      className="min-h-screen my-110 border-t absolute inset-x-0 z-30 bg-background border-x border-dashed border-muted-foreground"
    >
      <div className="flex justify-between border-b border-muted-foreground border-dashed">
        <div className="relative w-80 border-r border-muted-foreground border-dashed">
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(7);
            }}
          />
          <span className="absolute tracking-wider uppercase text-xs right-8 top-1/2 -translate-y-1/2">
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
          {visibleIcons.map(({ id, title, icon: Icon }) => (
            <IconRender
              key={id}
              title={title}
              onClick={() => setIconPopupOpen(id)}
            >
              <Icon variant={activeVariant} />
            </IconRender>
          ))}
        </IconsGrid>
        {hasMore && (
          <div className="flex justify-center py-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 7)}
              className="text-xs tracking-wider uppercase px-6 py-2 border border-dashed border-muted-foreground hover:bg-muted/25"
            >
              Show more
            </button>
          </div>
        )}
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
