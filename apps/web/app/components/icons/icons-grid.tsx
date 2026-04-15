import { ReactNode } from "react";

interface IconsGridProps {
  children: ReactNode;
}

export default function IconsGrid({ children }: IconsGridProps) {
  return <div className="grid grid-cols-8 gap-4 p-8">{children}</div>;
}
