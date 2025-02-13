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
import { Check, CheckSquare } from "lucide-react";
import TagsInput from "./Tags";

const DialogForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
              id="name"
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="block text-gray-700">
              Short Description
            </label>
            <textarea
              id="username"
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <TagsInput />

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
              className={`text-lg font-medium ${
                isChecked ? "text-zinc-800" : "text-zinc-500"
              }`}
            >
              Are there any key features of this project?
            </label>
          </div>

          {isChecked && (
            <div className="flex flex-col">
              <label htmlFor="username" className="block text-gray-700">
                Key Features
              </label>
              <textarea
                id="username"
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter key features, separated by commas."
              />
            </div>
          )}
        </div>

        <DialogFooter>
          <Button type="submit">Generate</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
