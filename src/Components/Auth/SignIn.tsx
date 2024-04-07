import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../Supabase/Supabaseconfig";

function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const successNotify = () => toast.success("Welcome, sign in successfull!");
  const userErrorNotify = () => toast.error("Invalid Password or Username!");
  const navigate = useNavigate();

  async function logIn() {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        userErrorNotify();
      } else {
        successNotify();
        setTimeout(() => {
          toast.remove();
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        logIn();
      }}
    >
      <fieldset className="Fieldset mt-2">
        <label
          className="font-bold text-sm text-[rgba(58,67,116)]"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="text"
          className="Input bg-[#F7F8FD] h-[50px] mt-2"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </fieldset>
      <fieldset className="Fieldset">
        <label
          className="font-bold text-sm text-[rgba(58,67,116)]"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          className="Input bg-[#F7F8FD] h-[50px] mt-2 font-mono"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </fieldset>
      <button
        onSubmit={logIn}
        className="w-full mt-4 rounded-md bg-purple-600 text-white font-bold text-sm h-[50px]"
      >
        Login
      </button>
      <Toaster />
    </form>
  );
}

export default SignIn;
