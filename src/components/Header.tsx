import React, { memo } from 'react';
import { HEADER_TEXT } from '../constants/locales';
import { HeaderSearch } from './HeaderSearch';
import { ERRORS } from '../constants/errors';
import { HeaderInterface } from "../interfaces";

export const Header: React.FC<HeaderInterface> = memo(({
  onSubmit,
  error,
  onError,
}) => {
  return (
    <header className="header">
      <h3 className="header__text">{HEADER_TEXT}</h3>
      <HeaderSearch
        onSubmit={onSubmit}
        onError={onError}
      />
      {error && <p className="header__sub-text">{ERRORS[error]}</p>}
    </header>
  );
});
