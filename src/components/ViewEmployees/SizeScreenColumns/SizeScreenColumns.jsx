import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export const smallScreenColumns = [
  {
    name: "Name",
    selector: (row) => `${row.firstName} ${row.lastName}`,
    sortable: true,
  },
  {
    name: "Start Date",
    selector: (row) => `${row.startDate}`,
    sortable: true,
  },
  {
    name: "Department",
    selector: (row) => `${row.department}`,
    sortable: true,
  },
  {
    name: "Date of Birth",
    selector: (row) => row.dateOfBirth,
    sortable: true,
  },
  {
    name: "City & Street",
    selector: (row) => `${row.city}, ${row.street}`,
    sortable: true,
  },
  {
    name: "State & Zip Code",
    selector: (row) => `${row.state}, ${row.zipCode}`,
    sortable: true,
  },
];

export const largeScreenColumns = [
  { name: "First Name", selector: (row) => row.firstName, sortable: true },
  { name: "Last Name", selector: (row) => row.lastName, sortable: true },
  {
    name: "Start Date",
    selector: (row) => `${row.startDate}`,
    sortable: true,
  },
  {
    name: "Department",
    selector: (row) => `${row.department}`,
    sortable: true,
  },
  {
    name: "Date of Birth",
    selector: (row) => row.dateOfBirth,
    sortable: true,
  },
  { name: "Street", selector: (row) => row.street, sortable: true },
  { name: "City", selector: (row) => row.city, sortable: true },
  { name: "State", selector: (row) => row.state, sortable: true },
  { name: "Zip Code", selector: (row) => row.zipCode, sortable: true },
];

export const verySmallScreenColumns = (handleIconClick) => [
  {
    name: "Name",
    selector: (row) => `${row.firstName} ${row.lastName}`,
    sortable: true,
  },
  { name: "Start Date", selector: (row) => row.startDate, sortable: true },
  { name: "Department", selector: (row) => row.department, sortable: true },
  {
    name: "Details",

    cell: (row) => (
      <button
        style={{
          backgroundColor: "rgb(147, 173, 24)",
          border: "none",
          padding: "3px",
        }}
        onClick={(e) => handleIconClick(e, row)}
      >
        <FontAwesomeIcon icon={faPlus} style={{ color: "white" }} />
      </button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

export const verySmallScreenColumnsNoDept = (handleIconClick) => [
  {
    name: "Name",
    selector: (row) => `${row.firstName} ${row.lastName}`,
    sortable: true,
  },
  { name: "Start Date", selector: (row) => row.startDate, sortable: true },
  {
    name: "Details",

    cell: (row) => (
      <button
        style={{
          backgroundColor: "rgb(147, 173, 24)",
          border: "none",
          padding: "3px",
        }}
        onClick={(e) => handleIconClick(e, row)}
      >
        <FontAwesomeIcon icon={faPlus} style={{ color: "white" }} />
      </button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];
