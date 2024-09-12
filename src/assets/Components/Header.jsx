import Dropdown from "./DropDown";
export default function Header({ changeMenu }) {
  return (
    <header className=" flex flex-row rounded-full">
      <Dropdown />
      <div className="flex-auto content-center self-center w-50 h-16 ">
        <h1 className="animate-fadeInDropDown text-center text-white font-semibold text-5xl hover:text-violet-950 transition-all duration-200">
          PROJECTS INVENTORY
        </h1>
      </div>
    </header>
  );
}
