import React from 'react';
import CharacterDialogue from './CharacterDialogue';
import type {ReactNode} from 'react';

/**
 * Manjari — the wise, playful companion bird who guides with questions
 * and clues instead of giving answers straight away.
 */
export default function Manjari({children}: {children: ReactNode}): React.JSX.Element {
  return (
    <CharacterDialogue name="Manjari" role="Wise Companion" variant="manjari">
      {children}
    </CharacterDialogue>
  );
}
