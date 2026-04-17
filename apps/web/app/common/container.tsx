import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        className,
        "max-w-6xl mx-auto border-x border-dashed border-muted-foreground",
      )}
      {...props}
    >
      {children}
    </div>
  );
}
