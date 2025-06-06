"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import { Check, LoaderCircle } from "lucide-react";
import TagsInput from "./Tags";
import { cn } from "@/lib/utils";
import { useSections } from "@/contexts/SectionContext";
import { useToast } from "@/hooks/use-toast";

const DialogForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    technologies: "",
    features: "",
  });
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setReadmeContent } = useSections();
  const { toast } = useToast();

  const handleChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
    setError(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const { title, description, technologies, features } = projectData;
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      technologies.trim() === ""
    ) {
      setError(true);
      return;
    } else if (isChecked && features.trim() === "") {
      setError(true);
      return;
    }

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projectData),
    });
    const data = await res.json();

    if (data.readme) {
      setReadmeContent(data.readme);
    } else {
      toast({
        variant: "destructive",
        title: data.message,
        description:
          "Something went wrong while Generating README! Please try again.",
      });
    }

    setProjectData({
      title: "",
      description: "",
      technologies: "",
      features: "",
    });
    setTags([]);
    setIsChecked(false);
    setError(false);
    setLoading(false);
  };

  return (
    <Dialog>
      <p className="text-xs text-zinc-600 text-center mb-4">
        Effortlessly generate a professional README by simply filling out the
        required fields—get your README in seconds, no prompts needed.
      </p>
      <Button asChild>
        <DialogTrigger className="w-full">Build Now</DialogTrigger>
      </Button>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tell us about your project.</DialogTitle>
          <DialogDescription>
            Provide key details about your project, and {"we’ll"} generate a
            professional README tailored to your needs in seconds
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="block text-gray-700">
              Project Title
            </label>
            <input
              type="text"
              name="title"
              value={projectData.title}
              id="name"
              className={cn(
                "mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                {
                  "focus:ring-red-500 border border-red-500":
                    error && !projectData.title,
                }
              )}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="block text-gray-700">
              Short Description
            </label>
            <textarea
              id="username"
              name="description"
              value={projectData.description}
              className={cn(
                "mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                {
                  "focus:ring-red-500 border border-red-500":
                    error && !projectData.description,
                }
              )}
              onChange={handleChange}
            />
          </div>

          <TagsInput
            projectData={projectData}
            setProjectData={setProjectData}
            tags={tags}
            setTags={setTags}
            error={error}
            setError={setError}
          />

          <div className="flex items-center space-x-2">
            <div
              className={`w-5 h-5 flex items-center justify-center border-2 rounded transition-colors duration-200 ${
                isChecked
                  ? "border-blue-500 bg-blue-500"
                  : "border-gray-400 bg-white"
              }`}
              onClick={handleCheckboxChange}
            >
              {isChecked && <Check className="w-full h-full text-white" />}
            </div>
            <label
              className={`text-sm font-medium ${
                isChecked ? "text-zinc-800" : "text-zinc-500"
              }`}
            >
              Want to add key feature!
            </label>
          </div>

          {isChecked && (
            <div className="flex flex-col">
              <label htmlFor="username" className="block text-gray-700">
                Key Features
              </label>
              <textarea
                id="username"
                name="features"
                value={projectData.features}
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter key features, separated by commas."
                onChange={handleChange}
              />
            </div>
          )}
        </div>

        <DialogFooter>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={
              loading ||
              !projectData.title ||
              !projectData.description ||
              !projectData.technologies
            }
            className="disabled:bg-gray-400 flex items-center gap-1"
          >
            Generate
            {loading && <LoaderCircle className="w-4 h-4 animate-spin" />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
