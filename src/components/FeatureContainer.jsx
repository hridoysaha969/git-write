import { useAuth } from "@/contexts/AuthContext";
import EmailVerificationPrompt from "./EmailVerificationPrompt";

const FeatureContainer = () => {
  const { currentUser } = useAuth();
  return (
    <>
      {currentUser?.isVerified ? (
        <div>A Form will be added</div>
      ) : (
        <EmailVerificationPrompt />
      )}
    </>
  );
};

export default FeatureContainer;
