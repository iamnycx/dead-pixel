"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="secondary" onClick={handleToggle}>
      Mode
    </Button>
  );
}
