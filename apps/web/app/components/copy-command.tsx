"use client";

import { toast } from "sonner";
import { Button } from "./ui/button";

export default function CopyCommand() {
  const handleCopyCommand = async () => {
    await navigator.clipboard.writeText("npm i dead-pixel-icons");
    toast("Command copied to clipboard", {
      description: "Run this in your terminal to download the icons",
    });
  };

  return (
    <Button variant="ghost" size="lg" onClick={handleCopyCommand}>
      <span className="text-chart-3">npm</span>{" "}
      <span className="text-chart-4">i</span>{" "}
      <span className="text-primary-foreground">dead-pixel-icons</span>
    </Button>
  );
}
