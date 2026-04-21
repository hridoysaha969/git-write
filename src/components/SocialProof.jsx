// SocialProof.jsx
import { FileText, Users, Rocket } from "lucide-react";

export default function SocialProof() {
  const stats = [
    { icon: FileText, value: "10,000+", label: "README Generated" },
    { icon: Users, value: "5,000+", label: "Developers" },
    { icon: Rocket, value: "GitHub", label: "Ready" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* decorative blobs (unchanged) */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-purple-600 font-semibold mb-3">
            ✨ Trusted by developers worldwide
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {stats.map(({ icon: Icon, value, label }, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 min-w-[180px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <Icon
                size={40}
                className="mb-3 text-purple-600 group-hover:scale-110 transition-transform duration-300"
                strokeWidth={1.5}
              />
              <span className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {value}
              </span>
              <span className="text-sm text-gray-500 font-medium mt-1">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-xs text-gray-600">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Used by 500+ GitHub repos this week
          </div>
        </div>
      </div>
    </section>
  );
}
