import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { Lock, LogIn, UserPlus, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import logo1 from "../assets/NP1full.png";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const api = "https://api.npdigitalsolution.com/api/admin/login";

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     const res = await fetch(api, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username: userName,
  //         password: password,
  //       }),
  //     });

  //     const data = await res.json();

  //     if (res.ok) {
  //       localStorage.setItem("login", JSON.stringify(data));
  //       toast.success("Welcome back!");
  //       navigate("/dashboard");
  //     } else {
  //       toast.error(data.message || "Invalid credentials");
  //     }
  //   } catch (error) {
  //     toast.error("An error occurred during login");
  //     console.error("Login error:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new URLSearchParams();
      formData.append("username", userName);
      formData.append("password", password);

      const res = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("login", JSON.stringify(data));
        toast.success("Welcome back!");
        navigate("/dashboard");
      } else {
        toast.error(data.message || "Invalid credentials");
      }
    } catch (error) {
      toast.error("An error occurred during login");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            <img
              src={logo1}
              alt="NP Digital Solutions"
              className="mx-auto h-12 mb-4"
            />
          </h1>
          <p className="mt-2 text-muted-foreground">
            {isSignUp ? "Create your account" : "Sign in to your dashboard"}
          </p>
        </div>

        <Card className="border-border/50 shadow-xl">
          <form onSubmit={handleLogin}>
            <CardHeader>
              <CardTitle className="text-xl">
                {isSignUp ? "Sign Up" : "Sign In"}
              </CardTitle>
              <CardDescription>
                {isSignUp
                  ? "Enter your details to create an account"
                  : "Enter your credentials to access the dashboard"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <UserRound className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="User123"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="pl-9"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-9"
                    required
                    minLength={6}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                ) : isSignUp ? (
                  <>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Create Account
                  </>
                ) : (
                  <>
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In
                  </>
                )}
              </Button>
              {/* <Button
                type="button"
                variant="ghost"
                className="w-full text-sm"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign up"}
              </Button> */}
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}
