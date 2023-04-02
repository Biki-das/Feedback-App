import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SideBar from "./Components/Sidebar";
import Feedback from "./Components/Feedback";

function App() {
  return (
    <main className="w-[950px] mx-auto mt-12 flex relative ">
      <SideBar />
      <Feedback />
    </main>
  );
}

export default App;
