import React, { memo } from 'react';
import { Hint } from './Hint';
import { DEFAULT_HINT, LOADING_HINT } from '../constants/locales';
import { DataTable, InfoTable } from './InfoTable';

function Main({ isLoading, data }: Main) {
  return (
    <main className="main">
      {
        isLoading
          ? <Hint text={LOADING_HINT} />
          : data
          ? <InfoTable data={data} />
          : <Hint text={DEFAULT_HINT} />
      }
    </main>
  );
}

const Enhanced = memo(Main);
export { Enhanced as Main };

type Main = {
  data?: DataTable|null,
  isLoading: boolean,
};
