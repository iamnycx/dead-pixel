import { ReactNode } from "react";

interface IconsGridProps {
  children: ReactNode;
}

export default function IconsGrid({ children }: IconsGridProps) {
  return <div className="grid grid-cols-14 p-8 gap-8">{children}</div>;
}
