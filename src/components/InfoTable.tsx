import React, { memo } from 'react';
import { TABLE_TITLES } from '../constants/infoTable';
import { InfoTableInterface } from '../interfaces';

export const InfoTable: React.FC<InfoTableInterface> = memo(({ data }) => {
  return (
    <table className="table">
      <tbody>
      {
        Object.entries(data).map(([title, value], index) => (
          <tr className="table__row" key={title}>
            <td className="table__column">{TABLE_TITLES[title]}:</td>
            <td className="table__column">{value}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  );
});
