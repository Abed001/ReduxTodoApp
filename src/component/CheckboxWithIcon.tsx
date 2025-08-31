import { useState } from "react";
import "../styles/checkbox-style.css"; // Optional: for styles

const CheckboxWithIcon = () => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span className="checkbox-box">
        {checked && (
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="checked icon"
            className="checkbox-icon"
          />
        )}
      </span>
    </label>
  );
};

export default CheckboxWithIcon;
