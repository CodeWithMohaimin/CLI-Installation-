import { MdArrowForwardIos } from "react-icons/md";

function Commands(props) {
  return (
    <div>
      <p className="flex bg-gray-700 items-center gap-2 px-4 py-1 my-2 text-gray-300 select-all">
        <MdArrowForwardIos />
        {props.command}
      </p>
    </div>
  );
}

export default Commands;
