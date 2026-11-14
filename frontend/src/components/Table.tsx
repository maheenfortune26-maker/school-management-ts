"use client";

import React from "react";

// Generic column definition — works for any row type
export interface Column<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  className?: string;
  hideOnMobile?: boolean;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  renderActions?: (row: T) => React.ReactNode;
}

/**
 * Generic typed Table component.
 * Usage: <Table<Student> columns={...} data={students} />
 */
export default function Table<T extends { id: string }>({
  columns,
  data,
  renderActions,
}: TableProps<T>): React.ReactElement {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col, i) => (
              <th
                key={i}
                className={`px-4 py-3 text-left font-semibold text-gray-600 ${
                  col.hideOnMobile ? "hidden md:table-cell" : ""
                } ${col.className ?? ""}`}
              >
                {col.header}
              </th>
            ))}
            {renderActions && (
              <th className="px-4 py-3 text-left font-semibold text-gray-600">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (renderActions ? 1 : 0)}
                className="px-4 py-6 text-center text-gray-400"
              >
                No records found.
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                {columns.map((col, i) => (
                  <td
                    key={i}
                    className={`px-4 py-3 text-gray-700 ${
                      col.hideOnMobile ? "hidden md:table-cell" : ""
                    }`}
                  >
                    {typeof col.accessor === "function"
                      ? col.accessor(row)
                      : String(row[col.accessor] ?? "")}
                  </td>
                ))}
                {renderActions && (
                  <td className="px-4 py-3">{renderActions(row)}</td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
