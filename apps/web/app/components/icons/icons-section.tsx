import Container from "../container";
import Heart from "../temp/heart-icon";
import IconRender from "./icon-render";
import IconsGrid from "./icons-grid";

export default function IconsSection() {
  return (
    <Container className="min-h-screen border-t">
      <div className="flex justify-between items-center border-b border-muted-foreground border-dashed">
        <div className="px-8 font-bold">All Icons</div>
        <div>
          <nav className="grid grid-cols-3">
            <div className="py-4 px-9 text-center uppercase tracking-wide hover:bg-muted/25 cursor-pointer border-l border-muted-foreground border-dashed">
              Stroke
            </div>
            <div className="py-4 px-9 text-center uppercase tracking-wide hover:bg-muted/25 cursor-pointer border-l border-muted-foreground border-dashed">
              Fill
            </div>
            <div className="py-4 px-9 text-center uppercase tracking-wide hover:bg-muted/25 cursor-pointer border-l border-muted-foreground border-dashed">
              Color
            </div>
          </nav>
        </div>
      </div>
      <div>
        <IconsGrid>
          <IconRender>
            <Heart />
          </IconRender>
        </IconsGrid>
      </div>
    </Container>
  );
}
