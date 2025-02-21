import { useAuth } from "@/contexts/AuthContext";
import EmailVerificationPrompt from "./EmailVerificationPrompt";
import DialogForm from "./DialogForm";
import { useSections } from "@/contexts/SectionContext";
import { Button } from "./ui/button";
import { PROFILE, PROJECT } from "@/lib/constant";

const FeatureContainer = () => {
  const { currentUser } = useAuth();
  const { setReadmeContent } = useSections();
  const projectBlock = PROJECT;
  const profileBlock = PROFILE;

  const handleClick = (codeBlock) => {
    setReadmeContent(codeBlock);
  };

  return (
    <>
      {currentUser?.isVerified ? (
        <div className="py-4 px-2">
          <DialogForm />

          <div className="mt-4 px-1">
            <span className="text-sm font-semibold">One Click Demo Import</span>

            <div className="flex flex-col gap-2 mt-2">
              <Button onClick={() => handleClick(profileBlock)}>
                For GitHub Profile
              </Button>
              <Button onClick={() => handleClick(projectBlock)}>
                For Project
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <EmailVerificationPrompt />
      )}
    </>
  );
};

export default FeatureContainer;
