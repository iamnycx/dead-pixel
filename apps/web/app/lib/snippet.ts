import { type IconProps } from "dead-pixel-icons";

type GetReactSnippetType = IconProps & { name: string };

const DEFAULTS = {
  variant: "stroke",
  size: 24,
  primaryColor: "#B7B7B7",
  secondaryColor: "#520000",
  animationTrigger: "hover",
  animationDuration: 300,
  animationEasing: "easeInOut",
  animationLoop: false,
};

export function getReactSnippet({ name, ...props }: GetReactSnippetType) {
  const propString = Object.entries({ ...DEFAULTS, ...props })
    .filter(([key, value]) => value !== DEFAULTS[key as keyof typeof DEFAULTS])
    .map(([key, value]) => {
      const formatted =
        typeof value === "string" ? `{"${value}"}` : `{${value}}`;
      return `${key}=${formatted}`;
    })
    .join(" ");

  return `
        // Uncomment this import statement and move to the top of your file
        // import { ${name} } from "dead-pixel-icons";

        <${name}${propString ? " " + propString : ""}/>
    `;
}
