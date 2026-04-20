import {
  CrossIcon,
  MinusIcon,
  PlusIcon,
  type IconProps,
} from "dead-pixel-icons";
import { IconData } from "./icons-section";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { getReactSnippet } from "../../lib/snippet";

interface IconPopupProps {
  icon: IconData;
  setIconPopupOpen: React.Dispatch<React.SetStateAction<number | null>>;
}

type IconVariant = IconProps["variant"];
type IconSize = IconProps["size"];
type IconAnimationTrigger = "hover" | "click";
type IconAnimationEasing = "linear" | "easeIn" | "easeOut" | "easeInOut";

const ALLOWED_SIZES: IconSize[] = [16, 20, 24, 32, 40, 48];
type AnimationDuration =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000;
const ALLOWED_DURATIONS: AnimationDuration[] = [
  100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
];

export default function IconPopup({ icon, setIconPopupOpen }: IconPopupProps) {
  const [iconVariant, setIconVariant] = useState<IconVariant>("stroke");
  const [iconSize, setIconSize] = useState<IconSize>(24);
  // const [iconPrimaryColor, setIconPrimaryColor] = useState("#B7B7B7");
  // const [iconSecondaryColor, setIconSecondaryColor] = useState("#520000");
  const [iconAnimationTrigger, setIconAnimationTrigger] =
    useState<IconAnimationTrigger>("hover");
  const [iconAnimationDuration, setIconAnimationDuration] =
    useState<AnimationDuration>(300);
  const [iconAnimationEasing, setIconAnimationEasing] =
    useState<IconAnimationEasing>("easeInOut");
  const [iconAnimationLoop, setIconAnimationLoop] = useState(false);

  function incrementSize() {
    const idx = ALLOWED_SIZES.indexOf(iconSize);
    if (idx < ALLOWED_SIZES.length - 1) {
      const next = ALLOWED_SIZES[idx + 1];
      if (next !== undefined) setIconSize(next);
    }
  }

  function decrementSize() {
    const idx = ALLOWED_SIZES.indexOf(iconSize);
    if (idx > 0) {
      const prev = ALLOWED_SIZES[idx - 1];
      if (prev !== undefined) setIconSize(prev);
    }
  }

  function incrementDuration() {
    const idx = ALLOWED_DURATIONS.indexOf(iconAnimationDuration);
    if (idx < ALLOWED_DURATIONS.length - 1) {
      const next = ALLOWED_DURATIONS[idx + 1];
      if (next !== undefined) setIconAnimationDuration(next);
    }
  }

  function decrementDuration() {
    const idx = ALLOWED_DURATIONS.indexOf(iconAnimationDuration);
    if (idx > 0) {
      const prev = ALLOWED_DURATIONS[idx - 1];
      if (prev !== undefined) setIconAnimationDuration(prev);
    }
  }

  async function handleCopyName() {
    await navigator.clipboard.writeText(icon.name);
    toast("Icon Name copied to clipboard");
  }

  async function handleCopyReactCode() {
    const code = getReactSnippet({
      name: icon.name,
      variant: iconVariant,
      size: iconSize,
      animationDuration: iconAnimationDuration,
      animationEasing: iconAnimationEasing,
      animationTrigger: iconAnimationTrigger,
      animationLoop: iconAnimationLoop,
    });
    await navigator.clipboard.writeText(code);
    toast("React snippet copied to clipboard");
  }

  return (
    <div
      className="fixed z-20 inset-0 grid place-items-center bg-background/20 backdrop-blur-xs"
      onClick={() => setIconPopupOpen(null)}
    >
      <div
        className="w-140 h-100 bg-background ring ring-muted p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold tracking-tight">
            {icon.title} Icon
          </h1>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIconPopupOpen(null)}
          >
            <CrossIcon />
          </Button>
        </div>
        <div className="flex my-4 gap-6">
          <div className="w-full grid grid-cols-2 gap-16">
            <div className="flex flex-col gap-2 w-full">
              <p className="uppercase text-xs tracking-wider">variant</p>
              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant={iconVariant === "stroke" ? "default" : "outline"}
                  onClick={() => setIconVariant("stroke")}
                >
                  Stroke
                </Button>
                <Button
                  size="sm"
                  variant={iconVariant === "fill" ? "default" : "outline"}
                  onClick={() => setIconVariant("fill")}
                >
                  Fill
                </Button>
                <Button
                  size="sm"
                  variant={iconVariant === "duotone" ? "default" : "outline"}
                  onClick={() => setIconVariant("duotone")}
                >
                  Duotone
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="uppercase text-xs tracking-wider">size</p>
              <div className="flex gap-3 items-center">
                <Button
                  size="icon-sm"
                  variant="outline"
                  onClick={decrementSize}
                  disabled={iconSize === undefined || iconSize <= 16}
                >
                  <MinusIcon />
                </Button>
                <span className="w-10 text-sm select-none text-center">
                  {iconSize}px
                </span>
                <Button
                  size="icon-sm"
                  variant="outline"
                  onClick={incrementSize}
                  disabled={iconSize === undefined || iconSize >= 48}
                >
                  <PlusIcon />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full col-span-2">
              <p className="uppercase text-xs tracking-wider text-center">
                animation
              </p>
              <div className="grid grid-cols-2 gap-x-32 gap-y-4">
                <div className="flex flex-col gap-2">
                  <p className="uppercase text-[0.75rem] tracking-wider">
                    trigger
                  </p>
                  <div className="flex gap-3 items-center">
                    <Button
                      size="sm"
                      variant={
                        iconAnimationTrigger === "hover" ? "default" : "outline"
                      }
                      onClick={() => setIconAnimationTrigger("hover")}
                    >
                      Hover
                    </Button>
                    <Button
                      size="sm"
                      variant={
                        iconAnimationTrigger === "click" ? "default" : "outline"
                      }
                      onClick={() => setIconAnimationTrigger("click")}
                    >
                      Click
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        toast("Custom trigger not supported yet", {
                          description:
                            "This feature is planned for a future release.",
                        });
                      }}
                    >
                      Custom
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="uppercase text-[0.75rem] tracking-wider">
                    duration
                  </p>
                  <div className="flex gap-3 items-center">
                    <Button
                      size="icon-sm"
                      variant="outline"
                      onClick={decrementDuration}
                      disabled={iconAnimationDuration <= 100}
                    >
                      <MinusIcon />
                    </Button>
                    <span className="w-10 text-sm select-none text-center">
                      {iconAnimationDuration}ms
                    </span>
                    <Button
                      size="icon-sm"
                      variant="outline"
                      onClick={incrementDuration}
                      disabled={iconAnimationDuration >= 1000}
                    >
                      <PlusIcon />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="uppercase text-[0.75rem] tracking-wider">
                    easing
                  </p>
                  <div className="flex gap-3 items-center">
                    <Button
                      size="sm"
                      variant={
                        iconAnimationEasing === "linear" ? "default" : "outline"
                      }
                      onClick={() => setIconAnimationEasing("linear")}
                    >
                      Linear
                    </Button>
                    <Button
                      size="sm"
                      variant={
                        iconAnimationEasing === "easeIn" ? "default" : "outline"
                      }
                      onClick={() => setIconAnimationEasing("easeIn")}
                    >
                      In
                    </Button>
                    <Button
                      size="sm"
                      variant={
                        iconAnimationEasing === "easeOut"
                          ? "default"
                          : "outline"
                      }
                      onClick={() => setIconAnimationEasing("easeOut")}
                    >
                      Out
                    </Button>
                    <Button
                      size="sm"
                      variant={
                        iconAnimationEasing === "easeInOut"
                          ? "default"
                          : "outline"
                      }
                      onClick={() => setIconAnimationEasing("easeInOut")}
                    >
                      In-Out
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="uppercase text-[0.75rem] tracking-wider">
                    loop
                  </p>
                  <div className="flex gap-3 items-center">
                    <Button
                      size="icon-sm"
                      variant={iconAnimationLoop ? "outline" : "default"}
                      onClick={() => setIconAnimationLoop(false)}
                    >
                      Off
                    </Button>{" "}
                    <Button
                      size="icon-sm"
                      variant={iconAnimationLoop ? "default" : "outline"}
                      onClick={() => setIconAnimationLoop(true)}
                    >
                      On
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="h-24 w-24 shrink-0 border border-dashed bg-muted/10 hover:bg-muted/30 grid place-items-center">
              <icon.icon
                size={iconSize}
                variant={iconVariant}
                animationDuration={iconAnimationDuration}
                animationEasing={iconAnimationEasing}
                animationLoop={iconAnimationLoop}
                animationTrigger={iconAnimationTrigger}
                // primaryColor={iconPrimaryColor}
                // secondaryColor={iconSecondaryColor}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="outline" onClick={handleCopyName}>
                Name
              </Button>
              <Button variant="outline" onClick={handleCopyReactCode}>
                React
              </Button>
              <Button variant="outline">SVG</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
