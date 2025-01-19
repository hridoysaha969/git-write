import Link from "next/link";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-zinc-900 py-8 text-center">
      <div className="container">
        <p className="text-white text-sm">
          &copy; All rights reserved {date.getFullYear()} |{" "}
          <Link
            href="https://hridoysaha.vercel.app"
            className="select-none bg-gradient-to-r from-[#FF512F] to-[#DD2476] bg-clip-text text-transparent font-semibold"
          >
            Hridoy Saha
          </Link>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
