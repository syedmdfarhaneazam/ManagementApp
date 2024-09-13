import Header from "./assets/Components/Header";
import { useState } from "react";
import DefaultDisplay from "./assets/Components/DefaultDisplay";
import SideBar from "./assets/Components/SideBar";

export default function App() {
  const [menuTitle, setMenuTitle] = useState("");
  function inMenu(title) {
    setMenuTitle(title);
  }
  return (
    <main class="area h-screen">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="flex flex-row">
        <SideBar />
        <Header changeMenu={inMenu} />
      </div>
    </main>
  );
}
