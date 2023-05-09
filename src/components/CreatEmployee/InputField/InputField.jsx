import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import styles from "./inputField.module.css";

function InputField({
  autoFocus,
  label,
  type,
  name,
  value,
  onChange,
  className,
}) {
  //état local maxDate pour stocker la date maximale autorisée
  const [maxDate, setMaxDate] = useState("");

  useEffect(() => {
    if (type === "date") {
      const today = new Date();
      const maxYear = today.getFullYear() - 18;
      today.setFullYear(maxYear);
      setMaxDate(today.toISOString().split("T")[0]);
    }
  }, [type, name]);

  return (
    <label className={styles.label}>
      {label}
      <input
        autoFocus={autoFocus}
        className={`${styles.input} ${className}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        max={name !== "startDate" ? maxDate : undefined}
      />
    </label>
  );
}

InputField.propTypes = {
  autoFocus: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default InputField;
