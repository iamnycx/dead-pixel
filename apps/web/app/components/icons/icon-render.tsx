import { ReactNode } from "react";

interface IconRenderProps {
  children: ReactNode;
}

export default function IconRender({ children }: IconRenderProps) {
  return (
    <div className="grid place-items-center border border-dashed border-muted-foreground p-4 w-fit h-fit">{children}</div>
  );
}
