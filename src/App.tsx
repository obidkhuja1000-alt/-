import { useEffect, useState } from 'react';
import { FlashcardsView } from './components/FlashcardsView';
import { LearningPath } from './components/LearningPath';
import { LessonPlayer } from './components/LessonPlayer';
import { ProgressView } from './components/ProgressView';
import { SentenceLibrary } from './components/SentenceLibrary';
import { TopBar } from './components/TopBar';
import { UNITS } from './data/curriculum';
import { ActiveTab, UserProgress } from './types/curriculum';

const STORAGE_KEY = 'hanyuduo_progress_v1';

const INITIAL_PROGRESS: UserProgress = {
  xp: 0,
  streakDays: 1,
  completedUnitIds: [],
  masteredSentenceIds: [],
  bookmarkedSentenceIds: ['s-1-1', 's-2-1'],
  lessonsCompletedCount: 0,
  lastPracticedDate: null,
};

function loadProgress(): UserProgress {
  if (typeof window === 'undefined') return INITIAL_PROGRESS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<UserProgress>;
    return {
      ...INITIAL_PROGRESS,
      ...parsed,
      completedUnitIds: Array.isArray(parsed.completedUnitIds)
        ? parsed.completedUnitIds
        : [],
      masteredSentenceIds: Array.isArray(parsed.masteredSentenceIds)
        ? parsed.masteredSentenceIds
        : [],
      bookmarkedSentenceIds: Array.isArray(parsed.bookmarkedSentenceIds)
        ? parsed.bookmarkedSentenceIds
        : INITIAL_PROGRESS.bookmarkedSentenceIds,
    };
  } catch {
    return INITIAL_PROGRESS;
  }
}

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(loadProgress);
  const [activeTab, setActiveTab] = useState<ActiveTab>('path');
  const [activeLessonUnitId, setActiveLessonUnitId] = useState<string | null>(
    null
  );
  const [libraryFilter, setLibraryFilter] = useState<{
    unitId: string;
    sentenceId: string;
  }>({ unitId: 'all', sentenceId: '' });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Ignore storage quota errors
    }
  }, [progress]);

  const handleStartQuickLesson = () => {
    const nextUnit =
      UNITS.find((u) => !progress.completedUnitIds.includes(u.id)) || UNITS[0];
    setActiveLessonUnitId(nextUnit.id);
  };

  const handleCompleteLesson = ({
    unitId,
    earnedXp,
    masteredSentenceIds,
  }: {
    unitId: string;
    earnedXp: number;
    masteredSentenceIds: string[];
  }) => {
    const today = new Date().toISOString().slice(0, 10);

    setProgress((prev) => {
      const isNewDay =
        prev.lastPracticedDate !== null && prev.lastPracticedDate !== today;
      const nextStreak =
        prev.lastPracticedDate === null
          ? 1
          : isNewDay
          ? prev.streakDays + 1
          : prev.streakDays;

      return {
        ...prev,
        xp: prev.xp + earnedXp,
        streakDays: nextStreak,
        lastPracticedDate: today,
        lessonsCompletedCount: prev.lessonsCompletedCount + 1,
        completedUnitIds: Array.from(
          new Set([...prev.completedUnitIds, unitId])
        ),
        masteredSentenceIds: Array.from(
          new Set([...prev.masteredSentenceIds, ...masteredSentenceIds])
        ),
      };
    });
  };

  const handleToggleBookmark = (sentenceId: string) => {
    setProgress((prev) => {
      const exists = prev.bookmarkedSentenceIds.includes(sentenceId);
      return {
        ...prev,
        bookmarkedSentenceIds: exists
          ? prev.bookmarkedSentenceIds.filter((id) => id !== sentenceId)
          : [...prev.bookmarkedSentenceIds, sentenceId],
      };
    });
  };

  const handleMarkMastered = (sentenceId: string) => {
    setProgress((prev) => ({
      ...prev,
      xp: prev.masteredSentenceIds.includes(sentenceId)
        ? prev.xp
        : prev.xp + 10,
      masteredSentenceIds: Array.from(
        new Set([...prev.masteredSentenceIds, sentenceId])
      ),
    }));
  };

  const handleOpenSentenceInLibrary = (unitId: string, sentenceId: string) => {
    setLibraryFilter({ unitId, sentenceId });
    setActiveTab('library');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetProgress = () => {
    setProgress(INITIAL_PROGRESS);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <TopBar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveLessonUnitId(null);
          if (tab === 'library') {
            setLibraryFilter({ unitId: 'all', sentenceId: '' });
          }
          setActiveTab(tab);
        }}
        onStartQuickLesson={handleStartQuickLesson}
      />

      {activeLessonUnitId ? (
        <LessonPlayer
          unitId={activeLessonUnitId}
          onExit={() => setActiveLessonUnitId(null)}
          onCompleteLesson={handleCompleteLesson}
        />
      ) : (
        <main className="flex-1">
          {activeTab === 'path' && (
            <LearningPath
              progress={progress}
              onStartUnitLesson={(unitId) => setActiveLessonUnitId(unitId)}
              onOpenSentenceInLibrary={handleOpenSentenceInLibrary}
            />
          )}

          {activeTab === 'library' && (
            <SentenceLibrary
              key={`${libraryFilter.unitId}-${libraryFilter.sentenceId}`}
              initialUnitFilter={libraryFilter.unitId}
              highlightedSentenceId={libraryFilter.sentenceId}
              bookmarkedIds={progress.bookmarkedSentenceIds}
              masteredIds={progress.masteredSentenceIds}
              onToggleBookmark={handleToggleBookmark}
              onStartUnitLesson={(unitId) => setActiveLessonUnitId(unitId)}
            />
          )}

          {activeTab === 'cards' && (
            <FlashcardsView
              bookmarkedIds={progress.bookmarkedSentenceIds}
              masteredIds={progress.masteredSentenceIds}
              onToggleBookmark={handleToggleBookmark}
              onMarkMastered={handleMarkMastered}
            />
          )}

          {activeTab === 'progress' && (
            <ProgressView
              progress={progress}
              onStartUnitLesson={(unitId) => setActiveLessonUnitId(unitId)}
              onResetProgress={handleResetProgress}
            />
          )}
        </main>
      )}
    </div>
  );
}
