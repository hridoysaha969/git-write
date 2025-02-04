"use client";

import { SECTIONS, VERSION } from "@/lib/constant";

const { createContext, useState, useEffect, useContext } = require("react");

const sections = SECTIONS;
const versions = VERSION;

const SectionContext = createContext(undefined);

export const SectionProvider = ({ children }) => {
  const [availableSection, setAvailableSection] = useState([]);
  const [selectedSection, setSelectedSection] = useState([]);
  const [readmeContent, setReadmeContent] = useState("");
  const [version, setVersion] = useState(versions[0]);

  // Load from local storage
  useEffect(() => {
    const storedSelectedSection = localStorage.getItem("selectedSections");
    const storedAvailableSection = localStorage.getItem("availableSections");
    const storedReadmeContent = localStorage.getItem("readmeContent");

    setSelectedSection(
      storedSelectedSection ? JSON.parse(storedSelectedSection) : []
    );
    setAvailableSection(
      storedAvailableSection ? JSON.parse(storedAvailableSection) : sections
    );
    setReadmeContent(storedReadmeContent ? storedReadmeContent : "");
  }, []);

  //   Save to local storage
  useEffect(() => {
    localStorage.setItem("selectedSections", JSON.stringify(selectedSection));
    localStorage.setItem("availableSections", JSON.stringify(availableSection));
    localStorage.setItem("readmeContent", readmeContent);
  }, [selectedSection, availableSection, readmeContent]);

  const addSection = (tab_id) => {
    const section = availableSection.find((s) => s.tab_id === tab_id);
    if (!section) return;

    setSelectedSection([...selectedSection, section]);
    setAvailableSection(availableSection.filter((s) => s.tab_id !== tab_id));

    // Append section code to readme content
    setReadmeContent(
      (prevContent) =>
        prevContent + (prevContent ? "\n\n\n" : "") + section.code
    );
  };

  const removeSection = (tab_id) => {
    const sectionIndex = selectedSections.findIndex((s) => s.tab_id === tab_id);
    if (sectionIndex === -1) return;

    const updatedSections = selectedSections.filter((s) => s.tab_id !== tab_id);
    setSelectedSections(updatedSections);

    // Move section back to "Available Sections"
    setAvailableSections([
      ...availableSections,
      selectedSections[sectionIndex],
    ]);

    // Remove the section content from `readmeContent`
    setReadmeContent((prevContent) => {
      const sectionLines = prevContent.split("\n\n\n"); // Split by double newline
      const updatedContent = sectionLines
        .filter((_, i) => i !== sectionIndex)
        .join("\n\n\n"); // Remove the specific index
      return updatedContent;
    });

    // Update localStorage
    localStorage.setItem("selectedSections", JSON.stringify(updatedSections));
  };

  // const updateReadmeContent = (newContent) => {
  //   setReadmeContent(newContent);
  // };

  const updateVersion = (newVersion) => {
    setVersion(newVersion);
  };

  return (
    <SectionContext.Provider
      value={{
        availableSection,
        selectedSection,
        readmeContent,
        versions,
        version,
        addSection,
        removeSection,
        updateReadmeContent,
        updateVersion,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export const useSections = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSections must be used within a SectionsProvider");
  }

  return context;
};
