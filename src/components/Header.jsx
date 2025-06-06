import { Shadows_Into_Light } from "next/font/google";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const shadowsIntoLight = Shadows_Into_Light({
  subsets: ["latin"],
  weight: "400", // Default weight for this font
});

const Header = () => {
  return (
    <header className="text-center py-4 md:py-12 md:mt-8 md:h-[70vh] h-[60vh]">
      <div className="container h-full flex flex-col justify-center items-center relative">
        <h1 className="text-2xl md:text-5xl font-semibold text-zinc-800">
          Simplify{" "}
          <span
            className={`${shadowsIntoLight.className} select-none bg-gradient-to-r from-[#FF512F] to-[#DD2476] bg-clip-text text-transparent`}
          >
            README
          </span>{" "}
          Creation for <br className="hidden sm:block" /> Your GitHub Projects
        </h1>
        <p className="text-xs tracking-wide md:text-[16px] text-zinc-500 mt-4 max-w-2xl mx-auto">
          GitWrite streamlines the process of creating detailed README files.
          Designed for developers, it turns your project details into polished
          documentation ready for GitHub.
        </p>
        <Button className="mt-8" asChild>
          <Link href="/generate">
            Get Started for Free <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </div>

      <div className="absolute md:w-[300px] w-1/4 h-[300px] bg-dotted top-[10%] right-0"></div>
      <div className="absolute md:w-[300px] w-1/4 h-[300px] bg-dotted bottom-[10%] left-0"></div>
    </header>
  );
};

export default Header;
