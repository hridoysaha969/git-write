export const metadata = {
  title: "Sign In - Access Your Account | GitWrite",
  description:
    "Sign in to your GitWrite account to effortlessly create and manage professional README files. Access your project details, preview your work, and download instantly.",
  keywords: [
    "README Generator",
    "Professional README Tool",
    "Effortless README Creator",
    "GitHub README Maker",
    "Generate README Files Instantly",
    "Developer README Tool",
    "Automated README Generator",
    "Time-Saving README Generator",
  ],
  openGraph: {
    title: "Sign In - Access Your Account | GitWrite",
    description:
      "Sign in to your GitWrite account to effortlessly create and manage professional README files. Access your project details, preview your work, and download instantly.",
    url: "https://gitwrite.vercel.app/sign-in", // Replace with your domain
    type: "website",
    images: [
      {
        url: "/gitwrite_logo.png", // Replace with your image URL
        width: 1200,
        height: 1200,
        alt: "GitWrite - Effortless README Generator for Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign In - Access Your Account | GitWrite",
    description:
      "Sign in to your GitWrite account to effortlessly create and manage professional README files. Access your project details, preview your work, and download instantly.",
    images: ["/gitwrite_logo.png"], // Replace with your image URL
  },
};

export default function RootLayout({ children }) {
  return <main>{children}</main>;
}
