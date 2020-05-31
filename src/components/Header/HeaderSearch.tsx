import React, { useRef } from 'react';
import { SEARCH_PLACEHOLDER } from '../../constants/locales';
import { carNumberValidation } from '../../validation';

export function HeaderSearch({ onChange, error, setError }: HeaderSearch) {
  const value = useRef('');

  const handleKeyDown = (e: { target: any; key: string }) => {
    const targetValue = e.target.value;

    if (e.key === 'Enter'
      && targetValue
      && (value.current !== targetValue || error)
      && carNumberValidation(targetValue)
    ) {
      value.current = targetValue;
      onChange(targetValue);
    }
  };

  const handleChange = (e: { target: { value: string } }) => (
    setError(carNumberValidation(e.target.value) ? '' : 'INVALID_CAR_NUMBER')
  );

  return (
    <input
      type="text"
      className="header__search"
      placeholder={SEARCH_PLACEHOLDER}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
    />
  );
}

type HeaderSearch = {
  onChange: (number: string) => void,
  setError: (error: string) => void,
  error?: string,
};
