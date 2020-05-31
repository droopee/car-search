import React from 'react';
import { TABLE_TITLES } from '../constants/infoTable';

export function InfoTable({ data }: InfoTable) {
  return (
    <table className="table">
      <tbody>
      {
        Object.entries(data).map(([title, value], index) => (
          <tr className="table__row" key={index}>
            <td className="table__column">{TABLE_TITLES[title]}:</td>
            <td className="table__column">{value}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  );
}

export type DataTable = {
  owner: string,
  year: number,
  crashesCount: number,
  ownersCount: number,
}|{};

type InfoTable = {
  data: DataTable,
};
