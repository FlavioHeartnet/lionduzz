import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const ForgotPassword = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background px-4 py-16">
      <div className="mx-auto flex w-full max-w-lg flex-col gap-6 rounded-3xl border border-border bg-card/80 p-10 text-center shadow-[var(--shadow-medium)]">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Reset access</p>
        <h1 className="font-serif text-4xl font-bold text-foreground">Let’s get you back in</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and we’ll send a reset link. The message expires in 15 minutes to keep your account secure.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <Button type="submit" className="w-full">
            Send reset link
          </Button>
        </form>
        <Link to="/login" className="text-sm font-medium text-primary hover:opacity-80">
          Return to sign in
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
