import React, { memo } from 'react';
import { ERRORS } from '../../constants/errors';

function HeaderSubText({ text }: HeaderSubText) {
  return <p className="header__sub-text">{ERRORS[text]}</p>;
}

const Enhanced = memo(HeaderSubText);
export { Enhanced as HeaderSubText };

type HeaderSubText = {
  text: string,
};
