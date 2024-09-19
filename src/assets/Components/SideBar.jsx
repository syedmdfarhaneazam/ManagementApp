import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function SideBar({
  onStartAddProject,
  projecto,
  onSelectProject,
}) {
  return (
    <aside className=" transition-all duration-200 w-1/4 h-screen px-8 py-16 bg-violet-900 hover:bg-black hover:bg-opacity-45 bg-opacity-45 md:w-72 rounded-r-3xl">
      <h2 className="mb-8 font-bold  md:text-xl text-white hover:text-violet-400 hover:opacity-40 ">
        Your Projects
      </h2>
      <button
        onClick={onStartAddProject}
        className="hover:bg-black hover:bg-opacity-40 px-2 py-2 font-bold md:text-base  bg-violet-900 text-white rounded-full "
      >
        <FontAwesomeIcon icon={faPlusCircle} />
        ADD
      </button>
      <dl className=" truncate bg-slate-200 space-y-3 my-8 w-full text-center bg-opacity-70 rounded-xl flex-row ">
        {projecto.map((project) => (
          <dt className="truncate">
            <button
              className="hover:bg-black hover:text-white px-2 rounded-md transform transition-all duration-200 whitespace-nowrap overflow-hidden text-ellipsis"
              onClick={() => onSelectProject(project.id)}
            >
              {project.title || "No title"}
            </button>
          </dt>
        ))}
      </dl>
    </aside>
  );
}
