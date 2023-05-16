import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Input, Label } from "./InputFieldStyles";

function InputField({ autoFocus, label, type, name, value, onChange }) {
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
    <Label>
      {label}
      <Input
        autoFocus={autoFocus}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        max={name !== "startDate" ? maxDate : undefined}
      />
    </Label>
  );
}

InputField.propTypes = {
  autoFocus: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
