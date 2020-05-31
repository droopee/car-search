import React from 'react';
import { HEADER_TEXT } from '../../constants/locales';
import { HeaderText } from './HeaderText';
import { HeaderSearch } from './HeaderSearch';
import { HeaderSubText } from './HeaderSubText';

export function Header({
  onChange,
  error,
  setError,
}: Header) {
  return (
    <header className="header">
      <HeaderText text={HEADER_TEXT} />
      <HeaderSearch
        onChange={onChange}
        error={error}
        setError={setError}
      />
      {error && <HeaderSubText text={error} />}
    </header>
  );
}

type Header = {
  error?: string,
  onChange: (number: string) => void,
  setError: (error: string) => void,
};
