import React, { useState } from "react";
import "./Table.css";
function Table({ tableData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const indexofLastRecord = recordsPerPage * currentPage;
  const indexofFirstRecord = indexofLastRecord - recordsPerPage;
  const currentPageRecords = tableData.slice(
    indexofFirstRecord,
    indexofLastRecord
  );
  const totalPages = Math.ceil(tableData.length / recordsPerPage);
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
      {" "}
      <table className="table">
        <thead>
          <tr>
            <th className="cell-Size">S.No</th>
            <th className="cell-Size">Percentage Funded</th>
            <th className="cell-Size">Amount Pledged</th>
          </tr>
        </thead>
        <tbody>
          {currentPageRecords.map((d, i) => (
            <tr key={i}>
              <td className="cell-Size">{d["s.no"]}</td>
              <td className="cell-Size">{d["percentage.funded"]}</td>
              <td className="cell-Size">{d["amt.pledged"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container">
      <div className="pagination">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="button"
        >
            &lt;
        </button>
        <span style={{ margin: "0 10px", fontSize: "12px" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="button"
        >
              &gt;
        </button>
      </div>
      </div>
    </div>
  );
}

export default Table;