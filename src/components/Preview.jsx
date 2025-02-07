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
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ node, ...props }) => (
                  <img
                    {...props}
                    style={{
                      height: "30px",
                      margin: "5px",
                      display: "inline-block",
                    }}
                  />
                ),
                table: ({ children }) => (
                  <table
                    style={{
                      width: "100%",
                      border: "1px solid #ddd",
                      borderCollapse: "collapse",
                      marginTop: "10px",
                    }}
                  >
                    {children}
                  </table>
                ),
                // Customize how table rows are rendered
                tr: ({ children }) => (
                  <tr style={{ borderBottom: "1px solid #ddd" }}>{children}</tr>
                ),
                // Customize how table cells (td) are rendered
                td: ({ children }) => (
                  <td style={{ padding: "8px", textAlign: "left" }}>
                    {children}
                  </td>
                ),
                th: ({ children }) => (
                  <th
                    style={{
                      padding: "8px",
                      backgroundColor: "#f4f4f4",
                      textAlign: "left",
                    }}
                  >
                    {children}
                  </th>
                ),
              }}
            >
              {readmeContent}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
