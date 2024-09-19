import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialogRef = useRef(); // use dialogRef instead of dialog

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal(); // use dialogRef.current to access <dialog>
    },
    close() {
      dialogRef.current.close(); // add a close function
    },
  }));

  return createPortal(
    <dialog
      ref={dialogRef}
      className="rounded-md font-bold p-4 shadow-lg px-20 py-20 bg-gradient-to-t from-violet-900 to-violet-500"
    >
      {children}
      <button
        className="bg-red-500 hover:bg-red-800 transform transition-all duration-150 rounded-md px-2 py-2 mt-5"
        onClick={() => dialogRef.current.close()}
      >
        {buttonCaption}
      </button>
    </dialog>,
    document.getElementById("modal-root") // Ensure you have a "modal-root" in your HTML
  );
});

export default Modal;
