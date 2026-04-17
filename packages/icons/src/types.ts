type IconVariant = "stroke" | "fill" | "duotone";

export interface IconProps {
  variant?: IconVariant;
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
}
