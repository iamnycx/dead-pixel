import Link from "next/link";
import { ThemeToggler } from "./theme-toggle";
import Container from "./container";

export default function Navbar() {
  return (
    <Container className="flex fixed inset-x-0 justify-between items-center py-4 px-8 border-b">
      <h1 className="font-bold">Dead-Pixel</h1>
      <nav className="flex gap-8">
        <Link href="/" className="relative w-fit px-2 group">
          <span className="absolute inset-x-0 -bottom-0.5 h-[0.05rem] group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out bg-primary" />
          Icons
        </Link>
        <Link href="/" className="relative w-fit px-2 group">
          <span className="absolute inset-x-0 -bottom-0.5 h-[0.05rem] group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out bg-primary" />
          Docs
        </Link>
      </nav>
      <ThemeToggler />
    </Container>
  );
}
