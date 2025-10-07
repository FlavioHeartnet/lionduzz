import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./../components/ui/button";
import { PenSquare, LogOut } from "lucide-react";
import { useToast } from "./../hooks/use-toast";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./../components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./../components/ui/avatar";
type User = {
    user_metadata?: { full_name?: string }
}
export const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    setUser({user_metadata: { full_name: "John Doe" }});
  }, []);

  const handleSignOut = async () => {
    toast({
      title: "Signed out",
      description: "You've been successfully signed out.",
    });
    navigate("/");
  };

  const getUserInitials = () => {
    if (!user?.user_metadata?.full_name) return "U";
    const names = user.user_metadata.full_name.split(" ");
    return names.map((n: string) => n[0]).join("").toUpperCase().slice(0, 2);
  };

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <h1 className="text-2xl font-bold tracking-tight">Stories</h1>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/explore" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Explore
          </Link>
          <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Button size="sm" className="gap-2" onClick={() => navigate("/write")}>
                <PenSquare className="h-4 w-4" />
                <span className="hidden sm:inline">Write</span>
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
                  <DropdownMenuItem onClick={() => navigate("/my-posts")}>
                    My Posts
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" className="hidden sm:flex" onClick={() => navigate("/auth")}>
                Sign In
              </Button>
              <Button size="sm" className="gap-2" onClick={() => navigate("/auth")}>
                <PenSquare className="h-4 w-4" />
                <span className="hidden sm:inline">Get Started</span>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
