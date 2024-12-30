import { useState, useRef } from "react";

const UseMemoHook = () => {
  let x = 0; // Regular JavaScript variable
  const [Num, setNum] = useState(0); // useState for reactive state
  const ref = useRef(0); // useRef for mutable values without re-renders

  return (
    <div className="max-w-4xl mx-auto border border-green-500 m-20 border-[5px] p-5">
      <h1 className="font-bold h-10">
        useRef Hook To Catch Global and Mutable Variable Values
      </h1>
      {/* Button for updating the JavaScript variable */}
      <button
        onClick={() => {
          x = x + 1;
          console.log("JavaScript variable x:", x);
        }}
        className="border border-green-600 py-1 px-3 hover:bg-gray-500 text-pink font-bold rounded-md"
      >
        Update JavaScript Variable
      </button>
      <h1 className="font-bold text-blue-700">
        Global JS Variable x:{" "}
        <b className="font-extrabold text-green-400">{x}</b>
      </h1>

      {/* Button for updating useState variable */}
      <button
        onClick={() => {
          setNum(Num + 1);
          console.log("useState variable Num:", Num);
        }}
        className="border border-green-600 py-1 px-3 hover:bg-gray-500 text-pink font-bold rounded-md"
      >
        Update useState Variable
      </button>
      <h1 className="font-bold text-blue-700">
        useState Num:{" "}
        <b className="font-extrabold text-green-400">{Num}</b>
      </h1>

      {/* Button for updating useRef variable */}
      <button
        onClick={() => {
          ref.current = ref.current + 1;
          console.log("useRef variable ref.current:", ref.current);
        }}
        className="border border-green-600 py-1 px-3 hover:bg-gray-500 text-pink font-bold rounded-md"
      >
        Update useRef Variable
      </button>
      <h1 className="font-bold text-blue-700">
        useRef ref.current:{" "}
        <b className="font-extrabold text-green-400">{ref.current}</b>
      </h1>
    </div>
  );
};

export default UseMemoHook;
