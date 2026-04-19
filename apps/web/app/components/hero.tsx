import Link from "next/link";
import { Button } from "./ui/button";
import CopyCommand from "./copy-command";
import Container from "../common/container";

export default function Hero() {
  return (
    <Container className="flex -z-20 items-center h-96 fixed inset-x-0 mt-16">
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
