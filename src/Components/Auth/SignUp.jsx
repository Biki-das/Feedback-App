import React from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { supabase } from "../Supabase/Supabaseconfig";

function SignUp({ avatarUrl, setUser }) {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const successNotify = () => toast.success("Signedup successfully");
  const errorNotify = () => toast.error("Email is already in Use!");

  async function handleSubmit() {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          userName: fullName,
          userAvatar: avatarUrl,
        },
      },
    });
    if (error) {
      console.log(error);
      errorNotify();
    } else {
      successNotify();
      setTimeout(() => {
        const id = data.user.id;
        const email = data.user.email;
        insertUser(id, email);
        navigate("/", toast.remove());
      }, 1000);
    }
  }

  async function insertUser(id, email) {
    const { data, error } = await supabase.from("users").insert([
      {
        id: id,
        email: email,
      },
    ]);

    if (error) {
      console.log(error);
      return null;
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <fieldset className="Fieldset mt-2">
        <label
          className="font-bold text-sm text-[rgba(58,67,116)]"
          htmlFor="fullname"
        >
          Full Name
        </label>
        <input
          type="text"
          className="Input bg-[#F7F8FD] h-[50px] mt-2 border-none"
          required
          placeholder="John Doe"
          id="fullname"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />
      </fieldset>
      <fieldset className="Fieldset">
        <label
          className="font-bold text-sm text-[rgba(58,67,116)]"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          required
          className="Input bg-[#F7F8FD] h-[50px] mt-2"
          placeholder="person@gmail.com"
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
          required
          type="password"
          className="Input bg-[#F7F8FD] h-[50px] mt-2 font-mono"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </fieldset>
      <button className="w-full mt-4 rounded-md bg-purple-600 text-white font-bold text-sm h-[50px]">
        Signup
      </button>
      <Toaster />
    </form>
  );
}

export default SignUp;
