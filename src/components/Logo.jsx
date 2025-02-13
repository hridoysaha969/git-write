import Image from "next/image";

const Logo = () => {
  return (
    <div className="select-none flex items-center gap-1">
      {/* <Image
        src="/gitwrite_logo.png"
        width={40}
        height={40}
        alt="GitWrite Logo"
      /> */}
      <img
        src="/gitwrite_logo.png"
        alt="GitWrite Logo"
        className="md:w-10 w-8 md:h-10 h-8 rounded-full"
        loading="lazy"
      />
      <h1 className="font-bold md:text-3xl text-xl dark:text-white text-zinc-900">
        Git
        <span className="gradient-text">W</span>
        rite
      </h1>
    </div>
  );
};

export default Logo;
