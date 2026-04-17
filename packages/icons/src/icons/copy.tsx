import { IconProps } from "../types";

export default function CopyIcon({
  variant = "stroke",
  size = 24,
  primaryColor = "#B7B7B7",
  secondaryColor = "#520000",
}: IconProps) {
  if (variant === "stroke") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="9" y="7" width="2" height="2" fill={primaryColor} />
        <rect x="11" y="7" width="2" height="2" fill={primaryColor} />
        <rect x="13" y="7" width="2" height="2" fill={primaryColor} />
        <rect x="15" y="7" width="2" height="2" fill={primaryColor} />
        <rect x="17" y="7" width="2" height="2" fill={primaryColor} />
        <rect x="3" y="5" width="2" height="2" fill={primaryColor} />
        <rect x="5" y="5" width="2" height="2" fill={primaryColor} />
        <rect x="3" y="7" width="2" height="2" fill={primaryColor} />
        <rect x="3" y="9" width="2" height="2" fill={primaryColor} />
        <rect x="3" y="11" width="2" height="2" fill={primaryColor} />
        <rect x="3" y="13" width="2" height="2" fill={primaryColor} />
        <rect x="5" y="3" width="2" height="2" fill={primaryColor} />
        <rect x="7" y="3" width="2" height="2" fill={primaryColor} />
        <rect x="9" y="3" width="2" height="2" fill={primaryColor} />
        <rect x="11" y="3" width="2" height="2" fill={primaryColor} />
        <rect x="13" y="3" width="2" height="2" fill={primaryColor} />
        <rect x="19" y="9" width="2" height="2" fill={primaryColor} />
        <rect x="19" y="11" width="2" height="2" fill={primaryColor} />
        <rect x="19" y="13" width="2" height="2" fill={primaryColor} />
        <rect x="19" y="15" width="2" height="2" fill={primaryColor} />
        <rect x="19" y="17" width="2" height="2" fill={primaryColor} />
        <rect x="17" y="19" width="2" height="2" fill={primaryColor} />
        <rect x="9" y="19" width="2" height="2" fill={primaryColor} />
        <rect x="11" y="19" width="2" height="2" fill={primaryColor} />
        <rect x="13" y="19" width="2" height="2" fill={primaryColor} />
        <rect x="7" y="17" width="2" height="2" fill={primaryColor} />
        <rect x="7" y="15" width="2" height="2" fill={primaryColor} />
        <rect x="7" y="13" width="2" height="2" fill={primaryColor} />
        <rect x="7" y="11" width="2" height="2" fill={primaryColor} />
        <rect x="7" y="9" width="2" height="2" fill={primaryColor} />
        <rect x="15" y="19" width="2" height="2" fill={primaryColor} />
      </svg>
    );
  }

  if (variant === "fill") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="9" y="7" width="2" height="2" fill={primaryColor} />
        <rect x="11" y="7" width="2" height="2" fill={primaryColor} />
        <rect x="13" y="7" width="2" height="2" fill={primaryColor} />
        <rect x="15" y="7" width="2" height="2" fill={primaryColor} />
        <rect x="17" y="7" width="2" height="2" fill={primaryColor} />
        <rect x="3" y="5" width="2" height="2" fill={primaryColor} />
        <rect x="5" y="5" width="2" height="2" fill={primaryColor} />
        <rect x="3" y="7" width="2" height="2" fill={primaryColor} />
        <rect x="3" y="9" width="2" height="2" fill={primaryColor} />
        <rect x="3" y="11" width="2" height="2" fill={primaryColor} />
        <rect x="3" y="13" width="2" height="2" fill={primaryColor} />
        <rect x="5" y="3" width="2" height="2" fill={primaryColor} />
        <rect x="7" y="3" width="2" height="2" fill={primaryColor} />
        <rect x="9" y="3" width="2" height="2" fill={primaryColor} />
        <rect x="11" y="3" width="2" height="2" fill={primaryColor} />
        <rect x="13" y="3" width="2" height="2" fill={primaryColor} />
        <rect x="19" y="9" width="2" height="2" fill={primaryColor} />
        <rect x="19" y="11" width="2" height="2" fill={primaryColor} />
        <rect x="19" y="13" width="2" height="2" fill={primaryColor} />
        <rect x="19" y="15" width="2" height="2" fill={primaryColor} />
        <rect x="19" y="17" width="2" height="2" fill={primaryColor} />
        <rect x="17" y="19" width="2" height="2" fill={primaryColor} />
        <rect x="9" y="19" width="2" height="2" fill={primaryColor} />
        <rect x="11" y="19" width="2" height="2" fill={primaryColor} />
        <rect x="13" y="19" width="2" height="2" fill={primaryColor} />
        <rect x="7" y="17" width="2" height="2" fill={primaryColor} />
        <rect x="7" y="15" width="2" height="2" fill={primaryColor} />
        <rect x="7" y="13" width="2" height="2" fill={primaryColor} />
        <rect x="7" y="11" width="2" height="2" fill={primaryColor} />
        <rect x="7" y="9" width="2" height="2" fill={primaryColor} />
        <rect x="9" y="9" width="2" height="2" fill={primaryColor} />
        <rect x="11" y="9" width="2" height="2" fill={primaryColor} />
        <rect x="13" y="9" width="2" height="2" fill={primaryColor} />
        <rect x="15" y="9" width="2" height="2" fill={primaryColor} />
        <rect x="17" y="9" width="2" height="2" fill={primaryColor} />
        <rect x="9" y="11" width="2" height="2" fill={primaryColor} />
        <rect x="11" y="11" width="2" height="2" fill={primaryColor} />
        <rect x="13" y="11" width="2" height="2" fill={primaryColor} />
        <rect x="15" y="11" width="2" height="2" fill={primaryColor} />
        <rect x="17" y="11" width="2" height="2" fill={primaryColor} />
        <rect x="9" y="13" width="2" height="2" fill={primaryColor} />
        <rect x="11" y="13" width="2" height="2" fill={primaryColor} />
        <rect x="13" y="13" width="2" height="2" fill={primaryColor} />
        <rect x="15" y="13" width="2" height="2" fill={primaryColor} />
        <rect x="17" y="13" width="2" height="2" fill={primaryColor} />
        <rect x="9" y="15" width="2" height="2" fill={primaryColor} />
        <rect x="11" y="15" width="2" height="2" fill={primaryColor} />
        <rect x="13" y="15" width="2" height="2" fill={primaryColor} />
        <rect x="15" y="15" width="2" height="2" fill={primaryColor} />
        <rect x="17" y="15" width="2" height="2" fill={primaryColor} />
        <rect x="9" y="17" width="2" height="2" fill={primaryColor} />
        <rect x="11" y="17" width="2" height="2" fill={primaryColor} />
        <rect x="13" y="17" width="2" height="2" fill={primaryColor} />
        <rect x="15" y="17" width="2" height="2" fill={primaryColor} />
        <rect x="17" y="17" width="2" height="2" fill={primaryColor} />
        <rect x="15" y="19" width="2" height="2" fill={primaryColor} />
      </svg>
    );
  }

  if (variant === "duotone") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="9" y="7" width="2" height="2" fill={primaryColor} />
        <rect x="11" y="7" width="2" height="2" fill={primaryColor} />
        <rect x="13" y="7" width="2" height="2" fill={primaryColor} />
        <rect x="15" y="7" width="2" height="2" fill={primaryColor} />
        <rect x="17" y="7" width="2" height="2" fill={primaryColor} />
        <rect x="3" y="5" width="2" height="2" fill={primaryColor} />
        <rect x="5" y="5" width="2" height="2" fill={primaryColor} />
        <rect x="3" y="7" width="2" height="2" fill={primaryColor} />
        <rect x="3" y="9" width="2" height="2" fill={primaryColor} />
        <rect x="3" y="11" width="2" height="2" fill={primaryColor} />
        <rect x="3" y="13" width="2" height="2" fill={primaryColor} />
        <rect x="5" y="3" width="2" height="2" fill={primaryColor} />
        <rect x="7" y="3" width="2" height="2" fill={primaryColor} />
        <rect x="9" y="3" width="2" height="2" fill={primaryColor} />
        <rect x="11" y="3" width="2" height="2" fill={primaryColor} />
        <rect x="13" y="3" width="2" height="2" fill={primaryColor} />
        <rect x="19" y="9" width="2" height="2" fill={primaryColor} />
        <rect x="19" y="11" width="2" height="2" fill={primaryColor} />
        <rect x="19" y="13" width="2" height="2" fill={primaryColor} />
        <rect x="19" y="15" width="2" height="2" fill={primaryColor} />
        <rect x="19" y="17" width="2" height="2" fill={primaryColor} />
        <rect x="17" y="19" width="2" height="2" fill={primaryColor} />
        <rect x="9" y="19" width="2" height="2" fill={primaryColor} />
        <rect x="11" y="19" width="2" height="2" fill={primaryColor} />
        <rect x="13" y="19" width="2" height="2" fill={primaryColor} />
        <rect x="7" y="17" width="2" height="2" fill={primaryColor} />
        <rect x="7" y="15" width="2" height="2" fill={primaryColor} />
        <rect x="7" y="13" width="2" height="2" fill={primaryColor} />
        <rect x="7" y="11" width="2" height="2" fill={primaryColor} />
        <rect x="7" y="9" width="2" height="2" fill={primaryColor} />
        <rect x="9" y="9" width="2" height="2" fill={secondaryColor} />
        <rect x="11" y="9" width="2" height="2" fill={secondaryColor} />
        <rect x="13" y="9" width="2" height="2" fill={secondaryColor} />
        <rect x="15" y="9" width="2" height="2" fill={secondaryColor} />
        <rect x="17" y="9" width="2" height="2" fill={secondaryColor} />
        <rect x="9" y="11" width="2" height="2" fill={secondaryColor} />
        <rect x="11" y="11" width="2" height="2" fill={secondaryColor} />
        <rect x="13" y="11" width="2" height="2" fill={secondaryColor} />
        <rect x="15" y="11" width="2" height="2" fill={secondaryColor} />
        <rect x="17" y="11" width="2" height="2" fill={secondaryColor} />
        <rect x="9" y="13" width="2" height="2" fill={secondaryColor} />
        <rect x="11" y="13" width="2" height="2" fill={secondaryColor} />
        <rect x="13" y="13" width="2" height="2" fill={secondaryColor} />
        <rect x="15" y="13" width="2" height="2" fill={secondaryColor} />
        <rect x="17" y="13" width="2" height="2" fill={secondaryColor} />
        <rect x="9" y="15" width="2" height="2" fill={secondaryColor} />
        <rect x="11" y="15" width="2" height="2" fill={secondaryColor} />
        <rect x="13" y="15" width="2" height="2" fill={secondaryColor} />
        <rect x="15" y="15" width="2" height="2" fill={secondaryColor} />
        <rect x="17" y="15" width="2" height="2" fill={secondaryColor} />
        <rect x="9" y="17" width="2" height="2" fill={secondaryColor} />
        <rect x="11" y="17" width="2" height="2" fill={secondaryColor} />
        <rect x="13" y="17" width="2" height="2" fill={secondaryColor} />
        <rect x="15" y="17" width="2" height="2" fill={secondaryColor} />
        <rect x="17" y="17" width="2" height="2" fill={secondaryColor} />
        <rect x="15" y="19" width="2" height="2" fill={primaryColor} />
      </svg>
    );
  }
}
