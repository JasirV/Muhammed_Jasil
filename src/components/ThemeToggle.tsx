import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-50 p-3 rounded-2xl bg-card/80 backdrop-blur-lg border border-border/50 shadow-medium hover:shadow-strong transition-smooth hover:scale-110 group"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-accent group-hover:rotate-180 transition-all duration-500" />
      ) : (
        <Moon className="h-5 w-5 text-primary group-hover:-rotate-180 transition-all duration-500" />
      )}
    </button>
  );
};
