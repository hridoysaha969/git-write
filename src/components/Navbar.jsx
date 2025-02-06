import Link from "next/link";
import Logo from "./Logo";
// import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="py-3 px-2 shadow-md bg-gray-50">
      <div className="container flex items-center justify-between">
        <Logo />
        {/* <ul className="flex items-center gap-4">
          <li>
            <Link href="/" className="text-zinc-500 font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/feature" className="text-zinc-500 font-semibold">
              Feature
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="text-zinc-500 font-semibold">
              Pricing
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
