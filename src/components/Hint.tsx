import React, { memo } from 'react';

function Hint({ text }: Hint) {
  return <p className="hint">{text}</p>;
}

const Enhanced = memo(Hint);
export { Enhanced as Hint };

type Hint = {
  text: string,
};
