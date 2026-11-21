export type ToneNumber = 1 | 2 | 3 | 4 | 5;

export interface WordToken {
  hanzi: string;
  pinyin: string;
  meaningRu: string;
  tone: ToneNumber;
}

export interface DialogueLine {
  speaker: 'A' | 'B';
  speakerLabel: string;
  hanzi: string;
  pinyin: string;
  translationRu: string;
}

export interface UsageExample {
  id: string;
  contextTitle: string;
  situationRu: string;
  dialogue: DialogueLine[];
  grammarNoteRu: string;
}

export interface SentenceItem {
  id: string;
  unitId: string;
  level: 'HSK 1' | 'HSK 2';
  hanzi: string;
  pinyin: string;
  translationRu: string;
  literalRu: string;
  situationPromptRu: string;
  tokens: WordToken[];
  distractorTokens: WordToken[];
  usageExamples: UsageExample[];
}

export interface Unit {
  id: string;
  order: number;
  titleRu: string;
  subtitleRu: string;
  level: 'HSK 1' | 'HSK 2';
  accentColor: 'emerald' | 'sky' | 'amber' | 'rose' | 'indigo';
  grammarFocusRu: string;
}

export type ExerciseType =
  | 'translate_to_ru'
  | 'word_bank'
  | 'context_usage'
  | 'listen_match';

export interface LessonExercise {
  id: string;
  type: ExerciseType;
  sentence: SentenceItem;
  promptLabelRu: string;
  optionsRu?: string[];
  correctOptionRu?: string;
  optionsSentences?: SentenceItem[];
  wordBankPool?: WordToken[];
}

export interface UserProgress {
  xp: number;
  streakDays: number;
  completedUnitIds: string[];
  masteredSentenceIds: string[];
  bookmarkedSentenceIds: string[];
  lessonsCompletedCount: number;
  lastPracticedDate: string | null;
}

export type ActiveTab = 'path' | 'library' | 'cards' | 'progress';
