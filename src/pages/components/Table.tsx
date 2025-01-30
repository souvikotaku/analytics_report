import React from "react";
import { useSelector, useDispatch } from "react-redux";


interface TableProps {
  columns: string[];
  data: (string | number)[][];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  const showLightnew = useSelector((state: { selected: { showlightmode: boolean } }) => state.selected.showlightmode); // Access Redux state

  return (
    
    <div 
    className="overflow-x-auto" 
    style={{ 
      borderRadius: '8px',
      border: showLightnew === true ? '1px solid black' :'1px solid #ffa857',
      width: 'fit-content'
    }}
  >
    <table
      className="table-auto border-collapse text-gray-600" // table-auto for content width
      style={{ 
        background:showLightnew === true ? 'white' : '#21232d', 
        borderCollapse: 'collapse', 
      }}
    >
      <thead>
        <tr className="text-left" style={{ background: showLightnew === true ? 'lightgrey' : '#333640' }}>
          {columns.map((col, index) => (
            <th
              key={index}
              className="px-4 py-2 border" 
              style={{ padding: '10px', color: showLightnew === true ? 'black' :'#7F8292',border:'1px solid #263238' }}
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
                style={{ padding: '10px', color: showLightnew === true ? 'black' :'#7F8292',border: '1px solid #263238'}}
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
