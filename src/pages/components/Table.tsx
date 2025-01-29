import React from "react";

interface TableProps {
  columns: string[];
  data: (string | number)[][];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-auto border-collapse border border-gray-300 text-gray-600">
        <thead>
          <tr className="bg-gray-100 text-left">
            {columns.map((col, index) => (
              <th key={index} className="border border-gray-300 px-4 py-2">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-white">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border border-gray-300 px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
