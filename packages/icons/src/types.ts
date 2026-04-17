type IconVariant = "stroke" | "fill" | "duotone";
type AnimationTrigger = "hover" | "click";
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
type AnimationEasing = "linear" | "easeIn" | "easeOut" | "easeInOut";

export interface IconProps {
  variant?: IconVariant;
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
  animationTrigger?: AnimationTrigger;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationEasing;
  animationLoop?: boolean;
}
