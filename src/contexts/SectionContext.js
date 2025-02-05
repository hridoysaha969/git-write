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
    const parsedSections = storedAvailableSection
      ? JSON.parse(storedAvailableSection)
      : sections;
    const sortedSection = parsedSections.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setAvailableSection(sortedSection);
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
    setReadmeContent((prevContent) => prevContent + section.code);
  };

  const removeSection = (tab_id) => {
    const sectionIndex = selectedSection.findIndex((s) => s.tab_id === tab_id);
    if (sectionIndex === -1) return;

    const updatedSections = selectedSection.filter((s) => s.tab_id !== tab_id);
    setSelectedSection(updatedSections);

    // Move section back to "Available Sections"
    // setAvailableSection([...availableSection, selectedSection[sectionIndex]]);
    setAvailableSection((prev) => {
      const updatedAvailable = [...prev, selectedSection[sectionIndex]].sort(
        (a, b) => a.title.localeCompare(b.title)
      );
      localStorage.setItem(
        "availableSections",
        JSON.stringify(updatedAvailable)
      ); // Update localStorage
      return updatedAvailable;
    });

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
        setReadmeContent,
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
