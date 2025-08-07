import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [justEvaluated, setJustEvaluated] = useState(false);
  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      console.log(eval(input));
      setInput(Math.max(eval(input)));
      setJustEvaluated(true);
    } else if (["+", "-", "*", "/", "."].includes(value)) {
      setInput((prev) => prev + value);
      // setInput(Math.max(eval(input)));
      setJustEvaluated(false);
    } else {
      if (justEvaluated) {
        setInput(value);
      } else {
        setInput((prev) => {
          return prev + value;
        });
      }
      setJustEvaluated(false);
    }
  };
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];
  return (
    <div class="flex items-center justify-center min-h-screen">
      <div class="bg-gray-700 text-white p-8 rounded-2xl">
        <div className="w-70 text-4xl font-semibold bg-yellow-100 border border-gray-300 rounded grid grid-rows-1 items-center justify-end gap-2 mb-2 overflow-x-auto overflow-y-hidden hide-scrollbar text-black text-right direction-rtl">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((b) => (
            <button
              onClick={() => handleClick(b)}
              className={`bg-gray-400 hover:bg-gray-300 text-xl font-medium w-16 h-16 
              rounded shadow-sm flex items-center justify-center`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
