import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const Register = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background px-4 py-16">
      <div className="mx-auto grid w-full max-w-5xl gap-12 rounded-3xl border border-border bg-card/80 p-10 shadow-[var(--shadow-medium)] md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Lionduzz Membership</p>
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Join the creator collective
          </h1>
          <p className="text-lg text-muted-foreground">
            Unlock Medium-inspired editorial tooling, product playbooks, and a private community of operators building digital businesses in public.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
              Weekly strategy letters from the Lionduzz product team.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
              Access to premium templates and teardown libraries.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
              Invitations to live editing sessions and cohort launches.
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full name</Label>
            <Input id="fullName" name="fullName" placeholder="Jordan Fox" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" placeholder="Create a password" required />
          </div>
          <Button type="submit" className="w-full">Create account</Button>
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-primary hover:opacity-80">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
