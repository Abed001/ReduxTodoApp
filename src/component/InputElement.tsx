import { useState } from "react";
import { useTheme } from "../context/useTheme";
import { useAppDispatch } from "../page/hooks";
import { addTask } from "../page/todosSlice";
import "../styles/checkbox-style.css";

function InputElement() {
  const { dark } = useTheme();
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();
  const handleAddTask = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      setInput("");
    }
  };
  return (
    <div className="relative mt-10  ">
      <input
        onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={` min-w-[400px] lg:w-[400px] p-2 py-4 pl-15 rounded-md ${
          dark
            ? "dark:text-white bg-darkelements placeholder-gray-500"
            : "bg-white text-black "
        } `}
        type="text"
        placeholder="write a task"
      />
      <span className="flex items-center absolute top-1/2 -translate-y-1/2 left-[5%] ">
        <svg
          className={`w-[27px] h-[27px] ${
            dark ? " text-gray-400" : "text-gray-500"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.80" // ← control thickness here
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
          />
        </svg>
      </span>
    </div>
  );
}

export default InputElement;
