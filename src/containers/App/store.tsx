import { DataTableInterface } from '../../interfaces';

export const ACTIONS = {
  FETCHING: 'fetching',
  SET_DATA: 'setData',
  SET_ERROR: 'setError',
};

export const initialState = {
  data: null,
  isLoading: false,
  error: '',
};

export function reducer(state: any, action: { type: string; data?: DataTableInterface; error?: string; }) {
  switch (action.type) {
    case ACTIONS.FETCHING:
      return { isLoading: true, data: null, error: '' };
    case ACTIONS.SET_DATA:
      return { isLoading: false, data: action.data };
    case ACTIONS.SET_ERROR:
      return { isLoading: false, error: action.error };
    default:
      throw new Error();
  }
}
