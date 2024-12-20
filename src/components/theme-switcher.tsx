"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoCog, IoMoon, IoSunny } from "react-icons/io5";

/**
 * ThemeSwitcher component allows users to switch between light, dark, and system themes.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.className] - Optional additional class names for the component.
 *
 * @returns {JSX.Element | null} The rendered ThemeSwitcher component or null if not mounted.
 *
 * @example
 * <ThemeSwitcher className="custom-class" />
 *
 * @component
 */
export default function ThemeSwitcher({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "m-0 box-border flex h-fit w-fit rounded-full p-0 shadow-[0_0_0_1px] shadow-border",
        className
      )}
    >
      <button
        onClick={() => setTheme("light")}
        className={`relative box-border flex h-fit w-fit rounded-full p-1 ${
          theme === "light"
            ? "bg-background shadow-[0_0_0_1px] shadow-border"
            : "text-muted-foreground hover:text-primary"
        }`}
        aria-label="Light theme"
      >
        <IoSunny className="m-auto h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`relative box-border flex h-fit w-fit rounded-full p-1 ${
          theme === "system"
            ? "bg-background shadow-[0_0_0_1px] shadow-border"
            : "text-muted-foreground hover:text-primary"
        }`}
        aria-label="System theme"
      >
        <IoCog className="m-auto h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`relative box-border flex h-fit w-fit rounded-full p-1 ${
          theme === "dark"
            ? "bg-background shadow-[0_0_0_1px] shadow-border"
            : "text-muted-foreground hover:text-primary"
        }`}
        aria-label="Dark theme"
      >
        <IoMoon className="m-auto h-4 w-4" />
      </button>
    </div>
  );
}
