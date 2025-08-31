import "../styles/checkbox-style.css"; // Optional: for styles
import { FaCheck } from "react-icons/fa";
import { useAppDispatch } from "../page/hooks";
import { toggleChecked } from "../page/todosSlice";

type Props = {
  task: {
    id: string;
    title: string;
    checked: boolean;
  };
};

const CheckboxWithIcon = ({ task }: Props) => {
  //const [checked, setChecked] = useState(false);
  const checked = task.checked;
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleChecked(task.id));
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
      />
      <span
        className={`checkbox-box ${
          checked ? "bg-gradient-to-br from-[#57ddff] to-[#c058f3]" : ""
        }`}
      >
        {checked && (
          <FaCheck
            className="checkbox-icon"
            color="white"
          />
        )}
      </span>
    </label>
  );
};

export default CheckboxWithIcon;
