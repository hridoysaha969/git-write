import { Box, MonitorDown, PencilRuler, WandSparkles } from "lucide-react";

export default function Features() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-2xl md:text-4xl text-zinc-800 font-bold mb-6">
          Powerful Features for Effortless README Generation
        </h2>
        <p className="text-lg text-zinc-600 mb-12">
          Simplify your workflow with AI-powered suggestions, customization
          options, and seamless downloads.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<WandSparkles />}
            title="AI-Powered Generation"
            description="Generate professional README files with AI-powered suggestions and templates."
          />
          <FeatureCard
            icon={<PencilRuler />}
            title="Customizable Blocks"
            description="Edit, reorder, or add custom markdown blocks to fit your project needs."
          />
          <FeatureCard
            icon={<Box />}
            title="Prebuilt Markdown Blocks"
            description="Choose from a variety of pre-designed markdown components for easy integration."
          />
          <FeatureCard
            icon={<MonitorDown />}
            title="One-Click Export"
            description="Download your README file in .md format instantly, ready for GitHub and beyond."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-slate-50 p-6 rounded-2xl shadow-lg text-start hover:bg-slate-100 transition duration-300">
      <div className="text-4xl text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl text-zinc-800 font-semibold mb-2">{title}</h3>
      <p className="text-zinc-600">{description}</p>
    </div>
  );
}
