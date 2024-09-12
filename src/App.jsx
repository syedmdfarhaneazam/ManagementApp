import Header from "./assets/Components/Header";
import { useState } from "react";
import DefaultDisplay from "./assets/Components/DefaultDisplay";

export default function App() {
  const [menuTitle, setMenuTitle] = useState("");
  function inMenu(title) {
    setMenuTitle(title);
  }
  return (
    <div class="area">
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
      <Header changeMenu={inMenu} />
      {menuTitle == "" && <DefaultDisplay />}
    </div>
  );
}
