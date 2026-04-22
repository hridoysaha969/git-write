// Features.jsx
import { Zap, Eye, Download, Wand2 } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "AI‑Powered Templates",
    description:
      "Generate professional READMEs from just a few inputs – no more blank page anxiety.",
  },
  {
    icon: Eye,
    title: "Live Preview",
    description:
      "See your README render in real-time as you type. Markdown formatting instantly visible.",
  },
  {
    icon: Download,
    title: "One‑Click Export",
    description:
      "Download your README.md file instantly, ready to push to GitHub.",
  },
  {
    icon: Zap,
    title: "GitHub Optimized",
    description:
      "Follows best practices – badges, headings, code blocks, and tables that actually work.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to create a{" "}
            <span className="bg-gradient-to-r from-[#FF512F] to-[#DD2476] bg-clip-text text-transparent">
              stunning README
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            No more wrestling with Markdown syntax or formatting. GitWrite does
            the heavy lifting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-purple-200 transition-colors">
                <Icon className="w-8 h-8 text-[#FF512F]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
