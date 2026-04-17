import { IconProps } from "../types";

export default function MinusIcon({
  variant = "stroke",
  size = 24,
  primaryColor = "#B7B7B7",
  secondaryColor = "#520000",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="11" y="11" width="2" height="2" fill={primaryColor} />
      <rect x="13" y="11" width="2" height="2" fill={primaryColor} />
      <rect x="15" y="11" width="2" height="2" fill={primaryColor} />
      <rect x="17" y="11" width="2" height="2" fill={primaryColor} />
      <rect x="19" y="11" width="2" height="2" fill={primaryColor} />
      <rect x="3" y="11" width="2" height="2" fill={primaryColor} />
      <rect x="5" y="11" width="2" height="2" fill={primaryColor} />
      <rect x="7" y="11" width="2" height="2" fill={primaryColor} />
      <rect x="9" y="11" width="2" height="2" fill={primaryColor} />
    </svg>
  );
}
