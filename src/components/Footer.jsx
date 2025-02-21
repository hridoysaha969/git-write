import Link from "next/link";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-zinc-900 py-6">
      <div className="container flex flex-col md:flex-row gap-2 justify-between items-center">
        <p className="text-white text-sm">
          &copy; All rights reserved {date.getFullYear()} |{" "}
          <Link
            href="https://hridoysaha.vercel.app"
            className="select-none bg-gradient-to-r from-[#FF512F] to-[#DD2476] bg-clip-text text-transparent font-semibold"
          >
            Hridoy Saha
          </Link>{" "}
        </p>

        <div>
          <Link href="/privacy-policy" className="text-xs text-white">
            Privacy & Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
