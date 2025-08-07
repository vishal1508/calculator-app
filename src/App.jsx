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
      setInput((prev) => (prev > 0 ? prev + value : 0 + value));
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
      <div class="bg-orange-400 text-white p-8 rounded-2xl">
        <div className="bg-yellow-100 grid grid-rows-1 gap-2 mb-2 p-1 text-black font-semibold text-4xl text-right">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((b) => (
            <button
              onClick={() => handleClick(b)}
              className={`bg-gray-200 hover:bg-gray-300 text-xl font-medium w-16 h-16 
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
