import Container from "./container";
import { ThemeToggler } from "./theme-toggle";

export default function Navbar() {
  return (
    <Container className="flex justify-between items-center py-4 px-8 border-b">
      <h1 className="font-bold">Dead-Pixel</h1>
      <ThemeToggler />
    </Container>
  );
}
