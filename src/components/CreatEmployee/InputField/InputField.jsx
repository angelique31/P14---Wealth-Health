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
/*****************test avec bibliotheque***************************** */
// import DatePicker from "react-datepicker";
// import { getYear, getMonth } from "date-fns";

// import { useEffect, useState } from "react";
// import PropTypes from "prop-types";

// import { Input, Label } from "./InputFieldStyles";

// const range = (start, end, step = 1) => {
//   let output = [];
//   for (let i = start; i <= end; i += step) {
//     output.push(i);
//   }
//   return output;
// };

// function InputField({ autoFocus, label, type, name, value, onChange }) {
//   const [maxDate, setMaxDate] = useState("");

//   useEffect(() => {
//     if (type === "date") {
//       const today = new Date();
//       const maxYear = today.getFullYear() - 18;
//       today.setFullYear(maxYear);
//       setMaxDate(today.toISOString().split("T")[0]);
//     }
//   }, [type, name]);

//   const years = range(1910, getYear(new Date()) + 1, 1);
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   // ...

//   if (type === "date") {
//     return (
//       <Label>
//         {label}
//         <DatePicker
//           selected={value ? new Date(value) : null}
//           onChange={(date) => onChange({ target: { value: date, name } })}
//           maxDate={name !== "startDate" ? new Date(maxDate) : undefined}
//           dateFormat="yyyy-MM-dd"
//           renderCustomHeader={({
//             date,
//             changeYear,
//             changeMonth,
//             decreaseMonth,
//             increaseMonth,
//             prevMonthButtonDisabled,
//             nextMonthButtonDisabled,
//           }) => (
//             <div
//               style={{
//                 margin: 10,
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               <button
//                 onClick={decreaseMonth}
//                 disabled={prevMonthButtonDisabled}
//               >
//                 {"<"}
//               </button>
//               <select
//                 value={getYear(date)}
//                 onChange={({ target: { value } }) => changeYear(value)}
//               >
//                 {years.map((option) => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>

//               <select
//                 value={months[getMonth(date)]}
//                 onChange={({ target: { value } }) =>
//                   changeMonth(months.indexOf(value))
//                 }
//               >
//                 {months.map((option) => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>

//               <button
//                 onClick={increaseMonth}
//                 disabled={nextMonthButtonDisabled}
//               >
//                 {">"}
//               </button>
//             </div>
//           )}
//         />
//       </Label>
//     );
//   }
// }
// InputField.propTypes = {
//   autoFocus: PropTypes.bool,
//   label: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   onChange: PropTypes.func.isRequired,
//   className: PropTypes.string,
// };
// export default InputField;
