import "./App.css";
import SideBar from "./Components/Sidebar/Sidebar";
import Feedback from "./Components/Feedback";
import Roadmap from "./Components/Roadmap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";
import {Provider} from 'react-redux'
import {store} from './Components/Store'

export const FilterContext = createContext();

function App() {
  const [selectedTag, setSelectedTag] = useState("All");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main className="w-11/12 lg:w-[950px] mx-auto mt-12 lg:flex relative">
              <Provider store={store}>
              <FilterContext.Provider value={{ selectedTag, setSelectedTag }}>
                <SideBar />
                <Feedback />
              </FilterContext.Provider>
              </Provider>
            </main>
          }
        />
        <Route path="roadmap" element={<Roadmap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
