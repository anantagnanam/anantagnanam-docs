import React from 'react';
import type {ReactNode} from 'react';

export type CharacterVariant = 'leela' | 'manjari' | 'astra' | 'default';

/**
 * Original, simple avatar placeholders for the learning companions.
 * Pure inline SVG — no external assets required.
 */

export function LeelaAvatar(): React.JSX.Element {
  return (
    <svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#ffe1bd" />
      <path
        d="M32 6 a14 10 0 0 1 0 20 a14 10 0 0 1 0 -20"
        fill="#3b2b23"
        transform="translate(0 6)"
      />
      <circle cx="16" cy="30" r="9" fill="#3b2b23" />
      <circle cx="21" cy="27" r="4.5" fill="#8a6a4f" />
      <path
        d="M20 34 Q32 46 44 34 Q40 44 32 46 Q24 44 20 34 Z"
        fill="#4a3a6e"
      />
      <path
        d="M38 20 Q46 22 48 28 Q44 24 38 23 Z"
        fill="#3b2b23"
      />
      <circle cx="26" cy="30" r="1.8" fill="#2b211c" />
      <circle cx="38" cy="30" r="1.8" fill="#2b211c" />
      <path
        d="M28 36 Q32 39 36 36"
        fill="none"
        stroke="#2b211c"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="48" cy="18" r="2.2" fill="#e8b84b" />
    </svg>
  );
}

export function ManjariAvatar(): React.JSX.Element {
  return (
    <svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#e3e9f6" />
      <path
        d="M32 12 Q18 20 20 34 Q22 44 32 46 Q42 44 44 34 Q46 20 32 12 Z"
        fill="#5a6bb8"
      />
      <circle cx="24" cy="26" r="5.5" fill="#c9a227" />
      <circle cx="25" cy="24.5" r="1.6" fill="#2b211c" />
      <path
        d="M44 20 L50 14 L44 17 Z"
        fill="#e8b84b"
      />
      <path d="M40 26 Q46 30 42 34" fill="none" stroke="#7d8fd8" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 46 L30 54 M32 46 L36 54 M32 46 L33 55" fill="none" stroke="#5a6bb8" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="50" cy="46" r="2" fill="#e8b84b" />
    </svg>
  );
}

export function AstraAvatar(): React.JSX.Element {
  return (
    <svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#fbeecd" />
      <path
        d="M14 26 Q32 20 50 26 L50 44 Q32 38 14 44 Z"
        fill="#8a4a2b"
      />
      <path
        d="M14 26 Q32 20 50 26 L50 30 Q32 24 14 30 Z"
        fill="#a85d38"
      />
      <path
        d="M24 28 L40 28 L32 42 Z"
        fill="#e8b84b"
      />
      <path
        d="M28 44 L32 52 L36 44 Z"
        fill="#c9a227"
      />
      <circle cx="46" cy="14" r="2" fill="#e8b84b" />
      <circle cx="12" cy="44" r="1.6" fill="#c9a227" />
    </svg>
  );
}

export function DefaultAvatar(): React.JSX.Element {
  return (
    <svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#dde6f5" />
      <circle cx="32" cy="26" r="12" fill="#8aa0c9" />
      <path
        d="M18 48 Q20 38 32 38 Q44 38 46 48"
        fill="#8aa0c9"
      />
      <circle cx="27" cy="25" r="1.8" fill="#2b211c" />
      <circle cx="37" cy="25" r="1.8" fill="#2b211c" />
    </svg>
  );
}

export interface CharacterDialogueProps {
  /** Character name, e.g. "Leela" */
  name: string;
  /** Short role line, e.g. "Curious Learner" */
  role?: string;
  /** Determines accent color + avatar */
  variant?: CharacterVariant;
  /** Override the default avatar with a custom ReactNode */
  icon?: ReactNode;
  /** The dialogue text */
  children: ReactNode;
}

export default function CharacterDialogue({
  name,
  role,
  variant = 'default',
  icon,
  children,
}: CharacterDialogueProps): React.JSX.Element {
  const avatar = icon ?? (variant === 'leela' ? <LeelaAvatar /> : variant === 'manjari' ? <ManjariAvatar /> : variant === 'astra' ? <AstraAvatar /> : <DefaultAvatar />);
  return (
    <div className={`ag-dialogue ag-dialogue--${variant}`}>
      <div className="ag-dialogue__avatar" aria-hidden="true">
        {avatar}
      </div>
      <div className="ag-dialogue__body">
        <div className="ag-dialogue__meta">
          <span className="ag-dialogue__name">{name}</span>
          {role && <span className="ag-dialogue__role">{role}</span>}
        </div>
        <div className="ag-dialogue__text">{children}</div>
      </div>
    </div>
  );
}
