import Link from "next/link";
import Container from "../common/container";
import { Button } from "./ui/button";
import CopyCommand from "./copy-command";

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
          <Link href="/#icons">
            <Button variant="outline" size="lg">
              Get Icons
            </Button>
          </Link>
          <CopyCommand />
        </div>
      </div>
    </Container>
  );
}
