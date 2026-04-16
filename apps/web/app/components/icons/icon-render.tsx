import { ReactNode } from "react";

interface IconRenderProps {
  icon: ReactNode;
  title: string;
}

export default function IconRender({ icon, title }: IconRenderProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="grid place-items-center border border-dashed border-muted bg-muted/30 hover:bg-muted/50 w-12 h-12">
        {icon}
      </div>
      <p className="text-center text-sm mt-1 text-muted-foreground">{title}</p>
    </div>
  );
}
