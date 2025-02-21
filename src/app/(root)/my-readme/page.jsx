"use client";
import React from "react";
import { Copy, Download, FilePlus, Scroll } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MyReadme = () => {
  const readmes = [
    // {
    //   id: 1,
    //   title: "Project A",
    //   content: "# Project A\n\nThis is the README for Project A.",
    // },
    // {
    //   id: 2,
    //   title: "Project B",
    //   content: "# Project B\n\nThis is the README for Project B.",
    // },
  ];

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content);
    alert("Copied to clipboard!");
  };

  const handleDownload = (content, title) => {
    const blob = new Blob([content], { type: "text/markdown" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${title}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-slate-50">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-sm md:text-2xl font-bold">📄 My README Files</h1>
          <Button asChild>
            <Link
              href="/generate"
              className="flex items-center gap-2 px-4 py-2 rounded-md shadow-md"
            >
              <FilePlus className="w-4 h-4" /> Create New
            </Link>
          </Button>
        </div>
        <div className="space-y-4">
          {readmes.length > 0 ? (
            readmes.map((readme) => (
              <div
                key={readme.id}
                className="shadow-lg rounded-xl border border-gray-200 dark:border-gray-800 p-4"
              >
                <h2 className="text-xl font-semibold mb-2">{readme.title}</h2>
                <textarea
                  className="w-full h-40 text-sm font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900"
                  value={readme.content}
                  readOnly
                />
                <div className="flex justify-end space-x-2 mt-3">
                  <button
                    onClick={() => handleCopy(readme.content)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md shadow-md hover:bg-gray-700"
                  >
                    <Copy size={16} /> Copy
                  </button>
                  <button
                    onClick={() => handleDownload(readme.content, readme.title)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white rounded-md shadow-md hover:bg-green-700"
                  >
                    <Download size={16} /> Download
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center flex flex-col items-center justify-center py-10 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md">
              <Scroll className="w-8 h-8 md:w-12 md:h-12 text-zinc-400" />
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
                No README files available.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Click "Create New" to add a README file.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyReadme;
