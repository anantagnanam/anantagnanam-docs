import React from 'react';
import CharacterDialogue from './CharacterDialogue';
import type {ReactNode} from 'react';

/**
 * Astra — the magical knowledge book that reveals explanations
 * and connects ideas through stories.
 */
export default function Astra({children}: {children: ReactNode}): React.JSX.Element {
  return (
    <CharacterDialogue name="Astra" role="The Knowledge Book" variant="astra">
      {children}
    </CharacterDialogue>
  );
}
