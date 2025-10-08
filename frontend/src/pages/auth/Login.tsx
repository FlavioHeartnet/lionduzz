import React, { useState, type FormEvent } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { Button } from './../../components/ui/button';
import { Input } from './../../components/ui/input';
import { Label } from './../../components/ui/label';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../hooks/use-toast';
import { app } from '../../lib/firebase/setup';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [fullName, setFullName] = useState("");


  const handleGoogleLogin = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();
      const response = await fetch('/api/auth/provider', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idToken }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  function handleAuth(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setLoading(true);

    const auth = getAuth(app);

    if (isLogin) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast({ title: "Login successful!" });
          navigate("/");
        })
        .catch((error) => {
          toast({ title: "Error logging in", description: error.message, variant: "destructive" });
        })
        .finally(() => setLoading(false));
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast({ title: "Account created successfully!" });
          navigate("/");
        })
        .catch((error) => {
          toast({ title: "Error creating account", description: error.message, variant: "destructive" });
        })
        .finally(() => setLoading(false));
    }
  }

  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary via-background to-background px-4">
      <div className="w-full max-w-md space-y-8 animate-in fade-in-50 duration-700">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">
            {isLogin ? "Welcome back" : "Join our community"}
          </h1>
          <p className="text-muted-foreground">
            {isLogin
              ? "Sign in to continue reading and writing"
              : "Create an account to start your journey"}
          </p>
        </div>

        <form onSubmit={handleAuth} className="space-y-6">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
                required
                disabled={loading}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              disabled={loading}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Loading..." : isLogin ? "Sign In" : "Sign Up"}
          </Button>
        </form>

        <div className="text-center space-y-4">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full rounded-full border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            disabled={loading}
          >
            Sign in with Google
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="block text-sm font-medium text-primary transition-colors hover:opacity-80"
            disabled={loading}
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
