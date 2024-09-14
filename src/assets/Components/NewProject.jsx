import Input from "./Input";

export default function NewProject() {
  return (
    <div className="flex flex-col space-y-10">
      <menu className="flex space-x-4 flex-row">
        <button className=" hover:pr-40 hover:bg-opacity-40 hover:bg-black hover:px-35 px-20 py-4 bg-violet-700 rounded-full md:text-xl text-xl font-bold cursor: pointer text-white transition-all duration-150">
          Cancle
        </button>
        <button className=" hover:bg-opacity-40 hover:pl-40 hover:bg-black px-20 py-4 bg-violet-700 rounded-full md:text-xl text-xl font-bold cursor: pointer text-white transition-all duration-150">
          Save
        </button>
      </menu>
      <div className="flex flex-row space-x-10 ">
        <Input title="PROJECT NAME " type="text" />
        <Input title="Date " type="date" />
      </div>
      <Input title="Discription" type="text" />
    </div>
  );
}
