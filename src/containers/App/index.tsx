import React, { useReducer } from 'react';
import '../../App.scss';
import { checkAutoByNumber } from '../../api';
import { Main } from '../../components/Main';
import { Header } from '../../components/Header';
import { initialState, reducer, ACTIONS } from './store';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSetError = (error: string) => dispatch({ type: ACTIONS.SET_ERROR, error });

  const handleOnChange = async (number: string) => {
    dispatch({ type: ACTIONS.FETCHING });

    try {
      const data = await checkAutoByNumber(number);
      dispatch({ type: ACTIONS.SET_DATA, data })
    } catch ({ message }) {
      handleSetError(message);
    }
  };

  return (
    <div className="app">
      <Header
        error={state.error}
        onChange={handleOnChange}
        setError={handleSetError}
      />

      <Main data={state.data} isLoading={state.isLoading}/>
    </div>
  );
}

export default App;
