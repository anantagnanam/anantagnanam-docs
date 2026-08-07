import {useCallback, useEffect, useState} from 'react';

/**
 * Journey progress — stored locally in the browser only.
 * No backend, no accounts: progress lives in localStorage under
 * a single key, and changes are broadcast to other components via
 * a CustomEvent so the progress tracker stays in sync.
 */

export const JOURNEY_STORAGE_KEY = 'ag-journey-progress';
export const JOURNEY_EVENT = 'ag:progress';

export type ProgressValue = string[];

function readStorage(): ProgressValue {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(JOURNEY_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

function writeStorage(ids: ProgressValue) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(JOURNEY_STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // Storage may be unavailable (private mode, quota) — ignore silently.
  }
}

function broadcast(ids: ProgressValue) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent<ProgressValue>(JOURNEY_EVENT, {detail: ids}));
}

/**
 * Hydration-safe access to the shared journey progress.
 * Returns an empty list until the browser mounts, then loads from
 * localStorage. Every write is persisted and broadcast.
 */
export function useJourneyProgress() {
  const [explored, setExplored] = useState<ProgressValue>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setExplored(readStorage());
    setReady(true);
    const onProgress = (event: Event) => {
      const custom = event as CustomEvent<ProgressValue>;
      if (Array.isArray(custom.detail)) setExplored(custom.detail);
    };
    window.addEventListener(JOURNEY_EVENT, onProgress);
    return () => window.removeEventListener(JOURNEY_EVENT, onProgress);
  }, []);

  const markExplored = useCallback((id: string) => {
    setExplored((prev) => {
      const next = prev.includes(id) ? prev : [...prev, id];
      writeStorage(next);
      broadcast(next);
      return next;
    });
  }, []);

  const unmarkExplored = useCallback((id: string) => {
    setExplored((prev) => {
      const next = prev.filter((x) => x !== id);
      writeStorage(next);
      broadcast(next);
      return next;
    });
  }, []);

  const toggleExplored = useCallback(
    (id: string) => {
      setExplored((prev) => {
        const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
        writeStorage(next);
        broadcast(next);
        return next;
      });
    },
    [],
  );

  const resetProgress = useCallback(() => {
    writeStorage([]);
    broadcast([]);
    setExplored([]);
  }, []);

  const isExplored = useCallback(
    (id: string) => ready && explored.includes(id),
    [explored, ready],
  );

  return {
    explored,
    ready,
    isExplored,
    markExplored,
    unmarkExplored,
    toggleExplored,
    resetProgress,
  };
}
