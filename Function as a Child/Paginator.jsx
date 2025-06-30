import { useState } from "react";

/**
 * @param {Object} props
 * @param {Array} props.items
 * @param {number} props.itemsPerPage
 * @param {Function} props.children
 * @returns {React.ReactNode}
 */

export const Paginator = ({ items, itemsPerPage, children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return children(
    <>
      {children(currentItems)}
      <div>
        <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
      </div>
    </>
  );
}

//** Usage:
// <Paginator items={items} itemsPerPage={5}>
//   {(currentItems) => (
//     <div>
//       {currentItems.map((item) => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//     </div>
//   )}
// </Paginator>