// HowItWorks.jsx
import { FileInput, Eye, Download } from "lucide-react";

const steps = [
  {
    icon: FileInput,
    title: "1. Enter your details",
    description:
      "Fill in your project name, description, and key features. No Markdown knowledge required.",
  },
  {
    icon: Eye,
    title: "2. Preview live",
    description:
      "Watch your README render instantly on the right. See exactly what you'll get.",
  },
  {
    icon: Download,
    title: "3. Download & ship",
    description:
      "One click to download your README.md file. Ready to push to GitHub.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              GitWrite
            </span>{" "}
            works
          </h2>
          <p className="text-gray-600 text-lg">
            Three simple steps to a professional README – no hassle, no learning
            curve.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
          {steps.map(({ icon: Icon, title, description }, idx) => (
            <div key={idx} className="flex-1 text-center max-w-xs mx-auto">
              <div className="relative">
                {/* Step number badge (optional) */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md">
                  <Icon
                    className="w-10 h-10 text-purple-700"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-500">{description}</p>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+2rem)] w-12 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
