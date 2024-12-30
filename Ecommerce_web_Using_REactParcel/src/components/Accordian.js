import { Liastofaccordian } from "./Liastofaccordian";

export const Accordian = ({ title, open, toggle }) => {
    return (
      <div className="my-1 border border-x-gray-200 shadow-md px-4 w-64">
        <div className="justify-between flex">
          <h1 className="text-black m-3">{title}</h1>
          <button
            className="p-2 m-2 bg-black text-white rounded-md"
            onClick={toggle}
          >
            {open ? "Hide" : "Show"}
          </button>
        </div>
        {open && <Liastofaccordian/>}
      </div>
    );
  };
  