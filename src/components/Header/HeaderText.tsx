import React, { memo } from 'react';

function HeaderText({ text }: HeaderText) {
  return <h3 className="header__text">{text}</h3>;
}

const Enhanced = memo(HeaderText);
export { Enhanced as HeaderText };

type HeaderText = {
  text: string,
};
