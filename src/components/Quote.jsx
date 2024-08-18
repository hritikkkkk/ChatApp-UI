import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex justify-center items-center px-4">
      <div className="max-w-3xl text-center">
        <div className="text-5xl font-extrabold text-slate-800 leading-tight">
          Connect Instantly Securely-Seamlessly Across the Globe{" "}
          <FontAwesomeIcon icon={faRocket} />
        </div>
        <div></div>
      </div>
    </div>
  );
};
