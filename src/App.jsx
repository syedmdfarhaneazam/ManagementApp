import Header from "./assets/Components/Header";
import { useState } from "react";
import DefaultDisplay from "./assets/Components/DefaultDisplay";
import SideBar from "./assets/Components/SideBar";
import NewProject from "./assets/Components/NewProject";
import SelectedProject from "./assets/Components/SelectedProject";

export default function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: null,
    projects: [],
  });

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: id };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        project: prevState.projects.filter(
          (project) => project.id === prevState.selectedProjectId
        ),
      };
    });
  }
  function handleStartProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: null,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancel() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content;
  if (projectState.selectedProjectId === null) {
    content = <DefaultDisplay onStartAddProject={handleStartProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (selectedProject) {
    content = (
      <SelectedProject
        onDelete={handleDeleteProject}
        project={selectedProject}
      />
    );
  }

  return (
    <main className="area h-screen">
      <ul className="circles">
        <Header />
        <div className="pt-8 flex flex-row">
          <SideBar
            onSelectProject={handleSelectProject}
            onStartAddProject={handleStartProject}
            projecto={projectState.projects}
            selectedId={projectState.selectedProjectId}
          />
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
