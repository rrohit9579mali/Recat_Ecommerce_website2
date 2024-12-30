import { useMemo, useState } from "react";
import { factorial } from "../Hook/FactorialFnFormMemo"; // Ensure this file contains the factorial function

const UseMemoHook = () => {
  const [Num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  // UseMemo to optimize factorial calculation
  const factAns=useMemo(()=>factorial(Num,[Num]));
//   const factAns = factorial(Num);
  return (
    <div  className={`${dark && "bg-gray-700"} max-w-4xl mx-auto border border-green-500 m-20 border-[5px] p-5`}>
      <h1 className="font-bold h-10">Use Memo Hook To calculate the factorial </h1>
      <input
      className="border border-purple-950 text-balance font-extrabold"
        type="number"
        value={Num}
        placeholder="Enter the number "
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <h1 className="font-bold text-blue-700">Number: <b className="font-extrabold text-green-400">{Num}</b></h1>
      <h1 className="font-bold text-blue-700">Factorial: {factAns}</h1>
      <button className="border  border-green-600 py-1 px-3 hover:bg-gray-500 text-pink font-bold rounded-md" onClick={() => (setDark(!dark))}>
        Toggle Theme
      </button>
    </div>
  );
};

export default UseMemoHook;
