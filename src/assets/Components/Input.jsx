import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import { forwardRef } from "react";
const input = forwardRef(function Input({ ...props }, ref) {
  return (
    <div className="flex flex-col px-2">
      <p>
        <lable className="text-white">
          {props.title}-<FontAwesomeIcon icon={faHandPointDown} />
        </lable>
      </p>
      {props.title == "Description" ? (
        <textarea ref={ref} {...props} />
      ) : (
        <input ref={ref} {...props}></input>
      )}
    </div>
  );
});
export default input;
