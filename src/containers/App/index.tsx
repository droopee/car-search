import React, { useReducer, useCallback } from 'react';
import '../../App.scss';
import { checkAutoByNumber } from '../../api';
import { Header } from '../../components/Header';
import { initialState, reducer, ACTIONS } from './store';
import { DEFAULT_HINT, LOADING_HINT } from '../../constants/locales';
import { InfoTable } from "../../components/InfoTable";

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSetError = useCallback((error: string) => (
    dispatch({ type: ACTIONS.SET_ERROR, error })
  ), [dispatch]);

  const handleOnSubmit = useCallback((number: string) => {
    dispatch({ type: ACTIONS.FETCHING });

    checkAutoByNumber(number)
      .then(data => dispatch({ type: ACTIONS.SET_DATA, data }))
      .catch(({ message }) => handleSetError(message))
  }, [dispatch, handleSetError]);

  return (
    <div className="app">
      <Header
        error={state.error}
        onSubmit={handleOnSubmit}
        onError={handleSetError}
      />

      <main className="main">
        {
          state.isLoading
            ? <p className="hint">{LOADING_HINT}</p>
            : state.data
              ? <InfoTable data={state.data} />
              : <p className="hint">{DEFAULT_HINT}</p>
        }
      </main>
    </div>
  );
};
