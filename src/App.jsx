import Header from "./assets/Components/Header";
import { useState } from "react";
import DefaultDisplay from "./assets/Components/DefaultDisplay";
import SideBar from "./assets/Components/SideBar";
import NewProject from "./assets/Components/NewProject";

export default function App() {
  return (
    <main class="area h-screen">
      <ul class="circles">
        <Header />
        <div className="pt-8 flex flex-row">
          <SideBar />
          <NewProject />
        </div>
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
    </main>
  );
}
