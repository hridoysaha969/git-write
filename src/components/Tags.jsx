import { X } from "lucide-react";
import { useState } from "react";

const TagsInput = () => {
  const [inputValue, setInputValue] = useState(""); // Stores the current input value
  const [tags, setTags] = useState([]); // Stores the list of tags
  const [tagsString, setTagsString] = useState(""); // Stores the tags as a comma-separated string

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle key press (Enter to add tag)
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault(); // Prevent form submission
      const newTags = [...tags, inputValue.trim()]; // Add new tag to the list
      setTags(newTags); // Update tags list
      setTagsString(newTags.join(", ")); // Update tags as a comma-separated string
      setInputValue(""); // Clear input field
    }
  };

  // Handle tag removal
  const handleRemoveTag = (index) => {
    const newTags = tags.filter((_, i) => i !== index); // Remove the tag at the specified index
    setTags(newTags); // Update tags list
    setTagsString(newTags.join(", ")); // Update tags as a comma-separated string
  };

  return (
    <div className="space-y-4">
      <label htmlFor="username" className="block text-gray-700">
        Technologies Used
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Type a tag and press Enter"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Display Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            <span>{tag}</span>
            <button
              onClick={() => handleRemoveTag(index)}
              className="ml-2 text-blue-800 hover:text-blue-600"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>

      {/* Display Tags as Comma-Separated String */}
      {/* <div className="mt-4">
        <p className="text-gray-700">
          <strong>Tags as String:</strong> {tagsString}
        </p>
      </div> */}
    </div>
  );
};

export default TagsInput;
