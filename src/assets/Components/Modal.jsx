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
    <dialog ref={dialogRef} className="rounded-md p-4 shadow-lg">
      {children}
      <button onClick={() => dialogRef.current.close()}>{buttonCaption}</button>
    </dialog>,
    document.getElementById("modal-root") // Ensure you have a "modal-root" in your HTML
  );
});

export default Modal;
