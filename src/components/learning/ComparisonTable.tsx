import React from 'react';

export interface ComparisonTableProps {
  /** Column headers */
  columns: string[];
  /** One row per planet/world; each row has the same length as columns */
  rows: Array<Array<string | number>>;
  /** Accessible caption describing the table */
  caption: string;
}

/**
 * ComparisonTable — an accessible, horizontally scrollable comparison table.
 */
export default function ComparisonTable({
  columns,
  rows,
  caption,
}: ComparisonTableProps): React.JSX.Element {
  return (
    <div className="ag-comparison" role="region" aria-label={caption}>
      <table className="ag-comparison__table">
        <caption className="ag-comparison__caption">{caption}</caption>
        <thead>
          <tr>
            {columns.map((col) => (
              <th scope="col" key={col}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]?.toString() ?? 'row'}>
              {row.map((cell, index) =>
                index === 0 ? (
                  <th scope="row" key={`${row[0]}-${index}`}>
                    {cell}
                  </th>
                ) : (
                  <td key={`${row[0]}-${index}`}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
