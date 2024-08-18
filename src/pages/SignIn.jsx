import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export const SignIn = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block">
          <Quote />
        </div>
        <div>
          <Auth />
        </div>
      </div>
    </div>
  );
};