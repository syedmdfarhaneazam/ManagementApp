import Input from "./Input";
import { useRef } from "react";

export default function NewProject() {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;
    //place to check validation
  }
  return (
    <div className="px-8">
      <menu className="flex space-x-4 items-center justify-end py-4">
        <button
          onClick={handleSave}
          className="hover:bg-black hover:px-20 px-10 py-4 bg-violet-700 rounded-full text-white font-bold transform transition-all duration-200"
        >
          Save
        </button>
        <button className="hover:bg-black px-10 py-4 bg-violet-700 rounded-full text-white font-bold">
          Cancel
        </button>
      </menu>
      <div className="flex flex-row space-x-10">
        <Input ref={title} title="PROJECT NAME" type="text" name="name" />
        <Input ref={date} title="Date" type="date" name="date" />
      </div>
      <Input
        ref={description}
        title="Description"
        type="text"
        name="description"
      />
    </div>
  );
}
