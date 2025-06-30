/**
 * @typedef {Object} TableRendererProps
 * @property {Array} data - The data to render.
 * @property {Function} renderHeader - The function to render the header.
 * @property {Function} renderRow - The function to render the row.
 */

export const Table = ({ data, renderHeader, renderRow }) => {
  return (
    <table className="table-renderer">
      <thead>
        <tr>{renderHeader()}</tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>{renderRow(row)}</tr>
        ))}
      </tbody>
    </table>
  );
};


/**
 * Usage:
 * <Table
 *   data={userData}
 *   renderHeader={renderUserHeader}
 *   renderRow={renderUserRow}
 * />
 */

const userData = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  { id: 3, name: "Jim Beam", email: "jim.beam@example.com" },
];

const carData = [
  { id: 1, name: "Toyota", model: "Camry", year: 2020 },
  { id: 2, name: "Ford", model: "F150", year: 2021 },
  { id: 3, name: "Chevrolet", model: "Silverado", year: 2022 },
];

const renderUserHeader = () => {
    <>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
    </>
};

const renderUserRow = (row) => {
  return (
    <>
      <td data-label="ID">{row.id}</td>
      <td data-label="Name">{row.name}</td>
      <td data-label="Age">{row.email}</td>
    </>
  );
};