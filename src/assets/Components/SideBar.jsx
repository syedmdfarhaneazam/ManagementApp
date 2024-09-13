import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
export default function SideBar() {
  return (
    <aside className="w-1/4 px-8 py-16 bg-violet-900 bg-opacity-45 md:w-72 rounded-r-3xl">
      <h2 className="mb-8 font-bold  md:text-xl text-white">Your Projects</h2>
      <button className="px-2 py-2 font-bold md:text-base  bg-violet-900 text-white rounded-full ">
        <FontAwesomeIcon icon={faPlusCircle} />
        -ADD
      </button>
    </aside>
  );
}
