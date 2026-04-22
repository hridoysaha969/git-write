"use client";
import { useState } from "react";
import { Eye, FileText, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Demo() {
  const [projectName, setProjectName] = useState("My Awesome Project");
  const [description, setDescription] = useState(
    "A powerful tool that solves real-world problems with a clean and intuitive interface.",
  );
  const [features, setFeatures] = useState(
    "• Feature one\n• Feature two\n• Feature three",
  );

  // Generate README preview from inputs
  const generateReadme = () => {
    const featuresList = features
      .split("\n")
      .filter((f) => f.trim())
      .map((f) => f.replace(/^[•\-*]\s*/, ""))
      .map((f) => `- ${f.trim()}`)
      .join("\n");

    return `# ${projectName}

${description}

## Features

${featuresList || "- Add your features above"}

## Installation

\`\`\`bash
npm install ${projectName.toLowerCase().replace(/\s+/g, "-")}
\`\`\`

## Usage

\`\`\`javascript
import { something } from '${projectName.toLowerCase().replace(/\s+/g, "-")}';

// Example usage
console.log('Hello from ${projectName}');
\`\`\`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
`;
  };

  const previewContent = generateReadme();

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FF512F]/10 text-[#FF512F] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            Live Preview
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Create. Preview.{" "}
            <span className="bg-gradient-to-r from-[#FF512F] to-[#DD2476] bg-clip-text text-transparent">
              Download.
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            See your README come to life as you type. No surprises, just perfect
            Markdown.
          </p>
        </div>

        {/* Split view demo */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left panel - Input form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center gap-2">
              <FileText size={18} className="text-[#FF512F]" />
              <span className="font-semibold text-gray-700">
                Project Details
              </span>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Name
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="e.g., GitWrite CLI"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Short Description
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="What does your project do?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Key Features (one per line)
                </label>
                <textarea
                  rows={4}
                  value={features}
                  onChange={(e) => setFeatures(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition resize-none font-mono text-sm"
                  placeholder="• Fast processing&#10;• Easy integration&#10;• Open source"
                />
              </div>
            </div>
          </div>

          {/* Right panel - Live preview */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Eye size={18} className="text-[#FF512F]" />
                <span className="font-semibold text-gray-700">
                  README Preview
                </span>
              </div>
              <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
                Markdown
              </span>
            </div>
            <div className="flex-1 p-6 overflow-y-auto max-h-[500px]">
              <div className="prose prose-sm prose-gray max-w-none">
                {/* Simple markdown rendering (for demo purposes) */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: simpleMarkdownToHtml(previewContent),
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="text-center mt-12">
          <Link
            href="/generate"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <FileText size={18} />
            Download README.md
          </Link>
          <p className="text-sm text-gray-500 mt-3">
            Ready to push to GitHub • No signup required
          </p>
        </div>
      </div>
    </section>
  );
}

// Simple markdown to HTML converter for demo (only essential tags)
function simpleMarkdownToHtml(md) {
  return md
    .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mt-6 mb-3">$1</h1>')
    .replace(
      /^## (.*$)/gm,
      '<h2 class="text-xl font-semibold mt-5 mb-2">$1</h2>',
    )
    .replace(
      /^### (.*$)/gm,
      '<h3 class="text-lg font-medium mt-4 mb-2">$1</h3>',
    )
    .replace(/^\- (.*$)/gm, '<li class="ml-4">$1</li>')
    .replace(/<li/g, '<ul class="list-disc my-2"><li', 1)
    .replace(/<\/li>\n(?=<li)/g, "</li>\n")
    .replace(/(<\/ul>)?\n*<li/g, (m) =>
      m === "<li" ? '<ul class="list-disc my-2"><li' : m,
    )
    .replace(/<\/ul>\s*<ul/g, "</ul>\n<ul")
    .replace(
      /```(\w*)\n([\s\S]*?)```/g,
      '<pre class="bg-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3"><code>$2</code></pre>',
    )
    .replace(
      /\`([^\`]+)\`/g,
      '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>',
    )
    .replace(/\n\n/g, '</p><p class="my-3">')
    .replace(/^([^<\n].*[^>\n])$/gm, '<p class="my-3">$1</p>')
    .replace(/<\/p>\s*<p>/g, "</p><p>");
}
