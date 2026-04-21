// FinalCTA.jsx
import { ArrowRight, Github, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        {/* Small badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <Sparkles size={16} />
          No signup • Free forever
        </div>

        {/* Main heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Ready to create your perfect README?
        </h2>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Join thousands of developers who ship better documentation in seconds.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Start creating now
            <ArrowRight size={18} />
          </button>
          <button className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all">
            <Github size={18} />
            View on GitHub
          </button>
        </div>

        {/* Trust indicator */}
        <p className="text-white/70 text-sm mt-8">
          ⚡ Used by 5,000+ developers • 10,000+ READMEs generated
        </p>
      </div>
    </section>
  );
}
