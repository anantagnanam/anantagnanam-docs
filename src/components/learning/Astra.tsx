import React from 'react';
import CharacterDialogue from './CharacterDialogue';
import type {ReactNode} from 'react';

/**
 * Astra — the keeper of knowledge, who reveals explanations and
 * connects ideas through stories and deeper understanding.
 */
export default function Astra({children}: {children: ReactNode}): React.JSX.Element {
  return (
    <CharacterDialogue name="Astra" role="Keeper of Knowledge" variant="astra">
      {children}
    </CharacterDialogue>
  );
}
