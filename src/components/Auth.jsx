import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../config";

export const Auth = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signIn`,
        postInputs
      );
      console.log(response);
      const jwt = response.data.data;

      localStorage.setItem("token", jwt);
      toast.success("Login successful!");
      navigate("/blog");
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong");
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10 text-center">
            <div className="text-3xl  text-gray-900 font-extrabold">SignIn Now!</div>
          </div>

          <div className="pt-8">
            <LabelledInput
              label="Username"
              placeholder="Hritik Shaw..."
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  username: e.target.value,
                });
              }}
            />

            <LabelledInput
              label="Email"
              placeholder="hritik@gmail.com"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  email: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Password"
              type="password"
              placeholder="123456"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />
            <button
              onClick={sendRequest}
              type="button"
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export function LabelledInput({ label, placeholder, onChange, type = "text" }) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
