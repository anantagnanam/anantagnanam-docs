import React from 'react';
import CharacterDialogue from './CharacterDialogue';
import type {ReactNode} from 'react';

/**
 * Manjari — the wise, playful guide who walks beside the learner,
 * nudging with questions and clues instead of giving answers away.
 */
export default function Manjari({children}: {children: ReactNode}): React.JSX.Element {
  return (
    <CharacterDialogue name="Manjari" role="Guide & Companion" variant="manjari">
      {children}
    </CharacterDialogue>
  );
}
