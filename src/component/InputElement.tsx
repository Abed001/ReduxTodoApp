import { useState } from "react";
import { useTheme } from "../context/useTheme";
import { useAppDispatch } from "../page/hooks";
import { addTask } from "../page/todosSlice";

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
    <div>
      <input
        onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={`mt-10 min-w-[400px] lg:min-w-[400px] p-2 py-4 rounded-md ${
          dark
            ? "dark:text-white bg-darkelements placeholder-gray-500"
            : "bg-white text-black "
        } `}
        type="text"
        placeholder="write a task"
      />
    </div>
  );
}

export default InputElement;
