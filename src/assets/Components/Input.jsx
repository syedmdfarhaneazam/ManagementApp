import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";
export default function Input({ ...props }) {
  return (
    <div className="flex flex-col px-2">
      <p>
        <lable className="text-white">
          {props.title}-<FontAwesomeIcon icon={faHandPointDown} />
        </lable>
      </p>
      <input {...props}></input>
    </div>
  );
}
