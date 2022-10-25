import { fontStyles, vars } from '@prince-assessment/styles';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';

type Person = {
  fullName: string;
  date: string;
  description: string;
  amount: string;
};

const defaultData: Person[] = [
  {
    fullName: 'Frank Se ...',
    date: 'Today',
    description: 'A&R Fees',
    amount: '₦ 250,000',
  },
  {
    fullName: 'Shell Gh ...',
    date: 'Jun 15',
    description: 'Restocking Fee',
    amount: '₦ 16,200',
  },
  {
    fullName: 'Atsu Nyu',
    date: 'Jun 15',
    description: 'Payroll - Flats',
    amount: '₦ 450,000',
  },
  {
    fullName: 'Telefonika',
    date: 'Jun 14',
    description: 'June Supplies  ...',
    amount: '₦ 80,560',
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor((row) => row.date, {
    id: 'date',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('description', {
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('fullName', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('amount', {
    cell: (info) => info.getValue(),
  }),
];

export function Table() {
  const [data] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table
      style={{
        width: 'calc(100% - 48px)',
        borderCollapse: 'collapse',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      className={fontStyles.MANROPE_MED}
    >
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            style={{
              height: 60,
              borderBottom: `1px solid ${vars.colors.border}`,
            }}
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
