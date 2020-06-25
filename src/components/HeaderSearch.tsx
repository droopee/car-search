import React, { useRef } from 'react';
import { SEARCH_PLACEHOLDER } from '../constants/locales';
import { carNumberValidation } from '../validation';
import { HeaderSearchInterface } from '../interfaces';

export const HeaderSearch: React.FC<HeaderSearchInterface> = ({ onSubmit, onError }) => {
  const valueRef = useRef('');
  const searchRef = useRef(null);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTarget = searchRef.current as HTMLTextAreaElement|null;
    const value = searchTarget?.value ?? '';
    const isValid = carNumberValidation(value);

    if (!isValid) {
      onError(isValid ? '' : 'INVALID_CAR_NUMBER');
    }

    if (value && (valueRef.current !== value)) {
      valueRef.current = value;
      onSubmit(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={searchRef}
        className="header__search"
        placeholder={SEARCH_PLACEHOLDER}
      />
    </form>
  );
};
