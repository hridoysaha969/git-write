import { useAuth } from "@/contexts/AuthContext";
import EmailVerificationPrompt from "./EmailVerificationPrompt";
import DialogForm from "./DialogForm";

const FeatureContainer = () => {
  const { currentUser } = useAuth();
  return (
    <>
      {currentUser?.isVerified ? (
        <div className="py-4 px-2">
          <DialogForm />
        </div>
      ) : (
        <EmailVerificationPrompt />
      )}
    </>
  );
};

export default FeatureContainer;
