// import React, { useState, useCallback, useMemo } from "react";
// import Api from "../../services/Api";
// import DataTable from "react-data-table-component";
// import Checkbox from "@material-ui/core/Checkbox";
// import ArrowDownward from "@material-ui/icons/ArrowDownward";

// const [selectedRows, setSelectedRows] = useState([]);
// const [toggleCleared, setToggleCleared] = useState(false);
// const [data, setData] = useState(tableDataItems);

// const columns = [
//   {
//     name: "Title",
//     selector: (row) => row.title,
//     sortable: true,
//   },
//   {
//     name: "Director",
//     selector: (row) => row.director,
//     sortable: true,
//   },
//   {
//     name: "Year",
//     selector: (row) => row.year,
//     sortable: true,
//   },
// ];

// const data = [
//   {
//     id: 1,
//     title: "Beetlejuice",
//     director: "José Mojica",
//     year: "1988",
//   },
//   {
//     id: 2,
//     title: "Ghostbusters",
//     director: "Bola",
//     year: "1984",
//   },
// ];

// const handleRowSelected = useCallback((state) => {
//   setSelectedRows(state.selectedRows);
// }, []);

// const contextActions = useMemo(() => {
//   const handleDelete = () => {
//     if (
//       window.confirm(
//         `Are you sure you want to delete:\r ${selectedRows.map(
//           (r) => r.title
//         )}?`
//       )
//     ) {
//       setToggleCleared(!toggleCleared);
//       setData(differenceBy(data, selectedRows, "title"));
//     }
//   };
  
//   return (
//     <Button
//       key="delete"
//       onClick={handleDelete}
//       style={{ backgroundColor: "red" }}
//       icon
//     >
//       Delete
//     </Button>
//   );
// }, [data, selectedRows, toggleCleared]);
// export default function Teste() {
//   return (
//     // <DataTable title="Movie List" columns={columns} data={data} sortFunction={customSort} pagination />

//     <DataTable
//       title="Desserts"
//       columns={columns}
//       data={data}
//       selectableRows
//       contextActions={contextActions}
//       onSelectedRowsChange={handleRowSelected}
//       clearSelectedRows={toggleCleared}
//       pagination
//     />
//   );
// }

// //https://react-data-table-component.netlify.app/?path=/docs/getting-started-examples--page
// //Link Referencia
