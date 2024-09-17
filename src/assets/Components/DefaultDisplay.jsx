import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/no-projects.png";
export default function DefaultDisplay({ onStartAddProject }) {
  return (
    <div className="flex items-center justify-center pt-40 pl-20 ">
      <button
        onClick={onStartAddProject}
        className="hover:bg-black hover:bg-opacity-40 px-2 py-2 font-bold md:text-base  bg-violet-900 text-white rounded-full "
      >
        <FontAwesomeIcon icon={faPlusCircle} />
        ...ADD
      </button>

      <h1 className="font-ubuntu-mono text-center text-white text-2xl md:text-3xl px-4">
        <p className="typewriter">Welcome Developers</p>
        <p className="animate-fadeIn">
          This is a place where you can keep a track of yourProjects-ideas &&
          yourCurrent || yourPast || yourOnGoing PROJECTS
        </p>
      </h1>
    </div>
  );
}
