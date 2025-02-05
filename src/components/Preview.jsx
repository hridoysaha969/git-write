"use client";
import { useSections } from "@/contexts/SectionContext";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Preview = () => {
  const { readmeContent, setReadmeContent } = useSections();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (
        readmeContent.trim().length > 0 &&
        !readmeContent.endsWith("\n\n\n")
      ) {
        setReadmeContent(readmeContent + "\n\n\n"); // Add only if not already added
      }
    }, 1000); // Wait 1 second after user stops typing

    return () => clearTimeout(timeout); // Clear timeout on new keystroke
  }, [readmeContent]);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/2 w-full shadow-md p-3">
          <h4>Editor</h4>
          {/* Editor */}
          <textarea
            value={readmeContent}
            onChange={(e) => setReadmeContent(e.target.value)}
            className="w-full p-3 text-sm font-mono h-[300px] md:h-[500px] bg-zinc-700 text-white"
          />
        </div>
        <div className="lg:w-1/2 w-full shadow-md p-3">
          <h4>Preview</h4>
          {/* Preview */}
          <div className="w-full p-3 rounded-sm h-[300px] md:h-[500px] overflow-y-auto markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {readmeContent}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
