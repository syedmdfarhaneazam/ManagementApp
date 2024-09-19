import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const modalRef = useRef();
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    // Validate input
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modalRef.current.open(); // Open the modal if input is invalid
      return;
    }

    // Call onAdd when valid
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2>INVALID INPUT</h2>
        <p>Please fill out all fields!</p>
      </Modal>

      <div className="px-8">
        <menu className="flex space-x-4 items-center justify-end py-4">
          <button
            onClick={handleSave}
            className="hover:bg-black hover:px-20 px-10 py-4 bg-violet-700 rounded-full text-white font-bold transform transition-all duration-200"
          >
            Save
          </button>
          <button
            className="hover:bg-black px-10 py-4 bg-violet-700 rounded-full text-white font-bold"
            onClick={onCancel}
          >
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
    </>
  );
}
