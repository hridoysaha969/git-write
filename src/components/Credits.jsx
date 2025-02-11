import { useAuth } from "@/contexts/AuthContext";

const Credits = () => {
  const { currentUser } = useAuth();
  return (
    <>
      {currentUser?.isVerified ? (
        <>
          <span>Credits: </span>
          <span className="text-zinc-800 font-semibold">
            {currentUser.credits}
          </span>
        </>
      ) : (
        <span className="text-xs text-zinc-800">
          Verify your email to get free credits.
        </span>
      )}
    </>
  );
};

export default Credits;
