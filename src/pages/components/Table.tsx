import React from "react";

interface TableProps {
  columns: string[];
  data: (string | number)[][];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    
    <div 
    className="overflow-x-auto" 
    style={{ 
      borderRadius: '8px',
      border: '1px solid #ffa857',
      width: 'fit-content'
    }}
  >
    <table
      className="table-auto border-collapse text-gray-600" // table-auto for content width
      style={{ 
        background: '#21232d', 
        borderCollapse: 'collapse', 
      }}
    >
      <thead>
        <tr className="text-left" style={{ background: '#333640' }}>
          {columns.map((col, index) => (
            <th
              key={index}
              className="px-4 py-2 border" 
              style={{ padding: '10px', color: '#7F8292',border: '1px solid #263238' }}
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="px-4 py-2 border"
                style={{ padding: '10px', color: '#7F8292',border: '1px solid #263238'}}
              >
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
