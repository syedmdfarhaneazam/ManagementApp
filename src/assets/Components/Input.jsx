import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import { forwardRef } from "react";
const input = forwardRef(function Input({ ...props }, ref) {
  return (
    <div className=" font-serif flex flex-col px-2">
      <p className="text-center">
        <lable className=" text-white">
          {props.title}-<FontAwesomeIcon icon={faHandPointDown} />
        </lable>
      </p>
      {props.title == "Description" ? (
        <textarea
          className=" mt-5 bg-black text-white rounded-xl font-ubuntu-mono"
          ref={ref}
          {...props}
        />
      ) : (
        <input className="font-bold" ref={ref} {...props}></input>
      )}
    </div>
  );
});
export default input;
