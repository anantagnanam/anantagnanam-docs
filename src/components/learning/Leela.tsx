import React from 'react';
import CharacterDialogue from './CharacterDialogue';
import type {ReactNode} from 'react';

/**
 * Leela — the curious learner who asks natural questions.
 */
export default function Leela({children}: {children: ReactNode}): React.JSX.Element {
  return (
    <CharacterDialogue name="Leela" role="Curious Learner" variant="leela">
      {children}
    </CharacterDialogue>
  );
}
