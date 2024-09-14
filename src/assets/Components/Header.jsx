import Dropdown from "./DropDown";
export default function Header({ changeMenu }) {
  return (
    <header className=" flex flex-row rounded-full">
      <div className="flex-auto content-center self-center w-50 h-16 ">
        <h1 className="animate-fadeInDropDown text-center text-white hover:text-black hover:text-opacity-60 font-semibold text-5xl hover:text-violet-700 transition-all duration-200">
          YOUR PROJECTS INVENTORY
        </h1>
      </div>
    </header>
  );
}
