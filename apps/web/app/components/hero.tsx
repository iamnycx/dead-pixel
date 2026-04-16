import Container from "../common/container";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <Container className="flex items-center h-[50vh]">
      <div className="w-1/2 px-8">
        <h1 className="text-5xl font-bold tracking-tight">
          Pixel Icons That React
        </h1>
        <p className="text-xl mt-4 tracking-wide text-balance">
          Lightweight, animated pixel icons designed to add subtle micro
          interaction without slowing your UI.
        </p>
        <div className="space-x-2 mt-6">
          <Button variant="outline" size="lg">
            Get Icons
          </Button>
          <Button variant="ghost" size="lg">
            Read Docs
          </Button>
        </div>
        <Button variant="ghost" size="lg" className="mt-4">
          <span className="text-chart-3">npm</span> <span>i</span>{" "}
          <span className="text-primary-foreground">dead-pixel-icons</span>
        </Button>
      </div>
    </Container>
  );
}
