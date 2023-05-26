import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Input, Label } from "./InputField.styled";

/**
 * Génère un champ de saisie pour le formulaire.
 * Il prend en compte plusieurs propriétés pour gérer automatiquement le focus, le type de champ, son nom, sa valeur et une fonction de modification.
 * Il gère également la date maximale pour les champs de type "date".
 *
 * Generates an input field for the form.
 * It takes into account several props to automatically handle focus, field type, its name, its value, and an onChange function.
 * It also manages the maximum date for fields of type "date".
 *
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.autoFocus - If true, the input field will automatically be in focus when the component is rendered.
 * @param {string} props.label - The label to be displayed.
 * @param {string} props.type - The type of the input field.
 * @param {string} props.name - The name of the input field.
 * @param {(string|number)} props.value - The current value of the input field.
 * @param {function} props.onChange - The function to call when the input field value changes.
 */
function InputField({ autoFocus, label, type, name, id, value, onChange }) {
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
        id={id}
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
  id: PropTypes.string.isRequired,
};

export default InputField;
