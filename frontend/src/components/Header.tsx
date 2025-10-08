import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LogOut, Moon, PenSquare, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useTheme } from "./theme-provider";
import { cn } from "../lib/utils";

type User = {
  user_metadata?: { full_name?: string };
};

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Create Product", to: "/products/create" },
  { label: "Sales", to: "/sales" },
  { label: "Subscriptions", to: "/subscriptions" },
];

const accountLinks = [
  { label: "Login", to: "/login" },
  { label: "Register", to: "/register" },
  { label: "Forgot Password", to: "/forgot-password" },
];

export const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setUser({ user_metadata: { full_name: "John Doe" } });
  }, []);

  const allLinks = useMemo(() => [...navLinks, ...accountLinks], []);

  const resolvedTheme = useMemo(() => {
    if (!mounted) return "system";
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return theme;
  }, [mounted, theme]);

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const handleSignOut = async () => {
    toast({
      title: "Signed out",
      description: "You've been successfully signed out.",
    });
    setUser(null);
    navigate("/");
  };

  const getUserInitials = () => {
    if (!user?.user_metadata?.full_name) return "U";
    const names = user.user_metadata.full_name.split(" ");
    return names
      .map((n: string) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <h1 className="text-2xl font-bold tracking-tight">Stories</h1>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {allLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "text-sm transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={toggleTheme}
            aria-label={
              resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          {user ? (
            <>
              <Button size="sm" className="gap-2" onClick={() => navigate("/products/create")}>
                <PenSquare className="h-4 w-4" />
                <span className="hidden sm:inline">Publish</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="focus:outline-none">
                    <Avatar className="h-8 w-8 cursor-pointer">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {getUserInitials()}
                      </AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/subscriptions")}>
                    Memberships
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/products")}>
                    My Products
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>
                Log in
              </Button>
              <Button size="sm" className="gap-2" onClick={() => navigate("/register")}>
                <PenSquare className="h-4 w-4" />
                <span className="hidden sm:inline">Create account</span>
              </Button>
            </div>
          )}
        </div>
      </div>

      <nav className="block border-t border-border bg-background md:hidden">
        <div className="mx-auto flex w-full max-w-7xl gap-3 overflow-x-auto px-4 py-3 text-sm">
          {allLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "whitespace-nowrap rounded-full px-3 py-1 transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};
