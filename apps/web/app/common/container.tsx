import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        className,
        "max-w-6xl mx-auto border-x border-dashed border-muted-foreground",
      )}
    >
      {children}
    </div>
  );
}
