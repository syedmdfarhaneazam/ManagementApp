import Header from "./assets/Components/Header";
import { useState } from "react";
import DefaultDisplay from "./assets/Components/DefaultDisplay";
import SideBar from "./assets/Components/SideBar";
import NewProject from "./assets/Components/NewProject";

export default function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: null,
    projects: [],
  });

  function handleStartProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = <DefaultDisplay onStartAddProject={handleStartProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NewProject />;
  }

  return (
    <main className="area h-screen">
      <ul className="circles">
        <Header />
        <div className="pt-8 flex flex-row">
          <SideBar onStartAddProject={handleStartProject} />
          {content}
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
