import Container from "./container";
import { ModeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <Container className="flex justify-between items-center py-6 px-8 border-b">
      <h1 className="font-bold">Dead-Pixel</h1>
      <ModeToggle />
    </Container>
  );
}
