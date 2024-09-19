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
        ...ADD
      </button>
      <dl>
        {projecto.map((project) => (
          <dt>
            <button onClick={() => onSelectProject(project.id)}>
              {project.title}
            </button>
          </dt>
        ))}
      </dl>
    </aside>
  );
}
