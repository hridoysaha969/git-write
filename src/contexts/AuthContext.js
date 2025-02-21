"use client";
const { createContext, useState, useEffect, useContext } = require("react");
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/user");
        const data = await res.json();
        if (res.ok) setCurrentUser(data.user);
      } catch (error) {
        console.log("Authentication check failed : ", error.message);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  //   Signup function
  const signUp = async (name, email, password, type, aggrement) => {
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, type, aggrement }),
      });
      const data = await response.json();
      if (data.success) {
        if (data.user) {
          setCurrentUser(data.user);
          router.push("/generate");
        }
      } else {
        toast({
          variant: "destructive",
          title: data.message,
          description:
            "Something went wrong while signing up! Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: error.message,
        description:
          "Something went wrong while requesting to server! Please try again.",
      });
    }
  };

  //   Sign in function
  const signIn = async (email, password, type) => {
    try {
      let response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, type }),
      });
      response = await response.json();
      if (response.success) {
        if (response.user) {
          console.log(response.user);

          setCurrentUser(response.user);
          router.push("/generate");
        }
      } else {
        toast({
          variant: "destructive",
          title: response.message,
          description:
            "Something went wrong while signing in! Please try again.",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Signout function
  const signout = async () => {
    await fetch("/api/auth/sign-out", { method: "POST" });
    setCurrentUser(null);
    router.push("/sign-in"); // Redirect to home after logout
  };

  const values = {
    currentUser,
    loading,
    signUp,
    signIn,
    signout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

// Hook to use auth context
export function useAuth() {
  return useContext(AuthContext);
}
