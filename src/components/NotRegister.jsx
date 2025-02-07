import { Lock } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const NotRegister = () => {
  return (
    <div className="py-4 px-4 h-full flex flex-col items-center justify-center gap-2">
      <p className="w-20 h-20 p-1 rounded-full flex items-center justify-center border border-zinc-500">
        <Lock className="w-12 h-12 text-zinc-500" />
      </p>
      <p className="text-sm text-center text-zinc-500">
        You must be logged in to use this feature.
      </p>
      <Button asChild>
        <Link href={"/sign-in"} className="w-full">
          Login
        </Link>
      </Button>
    </div>
  );
};

export default NotRegister;
