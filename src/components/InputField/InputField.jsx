import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "../InputField/inputField.module.css";

function InputField({ label, type, name, value, onChange }) {
  //état local maxDate pour stocker la date maximale autorisée
  const [maxDate, setMaxDate] = useState("");

  /**
   * Calcul de la date maximale autorisée pour les champs de saisie de type 'date'.
   * Quand le type d'entrée est 'date',il calcule la date maximale en soustrayant 18 ans de la date actuelle.
   * Puis il définit l'état maxDate avec la date calculée au format ISO.
   *
   * @listens type - Le hook useEffect écoute les changements dans la prop type d'entrée.
   */
  useEffect(() => {
    if (type === "date") {
      const today = new Date();
      const maxYear = today.getFullYear() - 18;
      today.setFullYear(maxYear);
      setMaxDate(today.toISOString().split("T")[0]);
    }
  }, [type]);

  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        max={maxDate}
      />
    </label>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
