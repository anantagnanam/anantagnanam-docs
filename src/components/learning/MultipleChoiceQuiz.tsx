import React from 'react';
import Quiz from './Quiz';
import type {QuizProps} from './Quiz';

/**
 * MultipleChoiceQuiz — the standard "Quick Check" quiz block used in lessons.
 * Renders the interactive Quiz component with a friendly header.
 */
export default function MultipleChoiceQuiz(props: QuizProps): React.JSX.Element {
  return (
    <div className="ag-mcq">
      <Quiz {...props} />
    </div>
  );
}
