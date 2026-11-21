import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  RotateCw,
  Turtle,
  Volume2,
} from 'lucide-react';
import { SENTENCES } from '../data/curriculum';
import { speakChinese } from '../utils/speech';

interface FlashcardsViewProps {
  bookmarkedIds: string[];
  masteredIds: string[];
  onToggleBookmark: (sentenceId: string) => void;
  onMarkMastered: (sentenceId: string) => void;
}

export function FlashcardsView({
  bookmarkedIds,
  masteredIds,
  onToggleBookmark,
  onMarkMastered,
}: FlashcardsViewProps) {
  const [deckMode, setDeckMode] = useState<'all' | 'bookmarked'>('all');
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const deck = useMemo(() => {
    if (deckMode === 'bookmarked') {
      const saved = SENTENCES.filter((s) => bookmarkedIds.includes(s.id));
      return saved.length > 0 ? saved : SENTENCES;
    }
    return SENTENCES;
  }, [deckMode, bookmarkedIds]);

  const safeIndex = index % deck.length;
  const card = deck[safeIndex];
  const isBookmarked = bookmarkedIds.includes(card.id);
  const isMastered = masteredIds.includes(card.id);
  const example = card.usageExamples[0];

  const handleNext = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % deck.length);
  };

  const handlePrev = () => {
    setFlipped(false);
    setIndex((prev) => (prev - 1 + deck.length) % deck.length);
  };

  return (
    <div className="max-w-[820px] mx-auto px-4 sm:px-6 py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Карточки для повторения
          </h1>
          <p className="text-sm text-slate-600">
            Проверьте, помните ли вы перевод и контекст использования предложения
          </p>
        </div>

        <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-xl self-start">
          <button
            type="button"
            onClick={() => {
              setDeckMode('all');
              setIndex(0);
              setFlipped(false);
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              deckMode === 'all'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Все ({SENTENCES.length})
          </button>
          <button
            type="button"
            disabled={bookmarkedIds.length === 0}
            onClick={() => {
              setDeckMode('bookmarked');
              setIndex(0);
              setFlipped(false);
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              deckMode === 'bookmarked'
                ? 'bg-white text-slate-900 shadow-sm'
                : bookmarkedIds.length === 0
                ? 'text-slate-400 cursor-not-allowed'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Избранное ({bookmarkedIds.length})
          </button>
        </div>
      </div>

      {/* Card Stage */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between text-xs font-medium text-slate-500">
          <span className="font-mono-nums">
            Карточка {safeIndex + 1} из {deck.length} · {card.level}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => speakChinese(card.hanzi, 0.95)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 font-semibold"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Озвучить</span>
            </button>
            <button
              type="button"
              onClick={() => speakChinese(card.hanzi, 0.6)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold"
            >
              <Turtle className="w-3.5 h-3.5" />
              <span>0.6x</span>
            </button>
            <button
              type="button"
              onClick={() => onToggleBookmark(card.id)}
              aria-label="В избранное"
              className={`p-1.5 rounded-lg border ${
                isBookmarked
                  ? 'bg-amber-50 border-amber-200 text-amber-600'
                  : 'border-slate-200 text-slate-400 hover:text-slate-700'
              }`}
            >
              <Bookmark
                className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* Interactive Flip Area */}
        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          className="w-full min-h-[260px] rounded-2xl bg-slate-50 hover:bg-slate-100/70 border border-slate-200 p-6 sm:p-8 text-center flex flex-col items-center justify-center gap-4 transition-colors"
        >
          {!flipped ? (
            <>
              <p className="font-hanzi text-3xl sm:text-4xl font-bold text-slate-900 leading-snug">
                {card.hanzi}
              </p>
              <p className="text-base font-medium text-emerald-700">
                {card.pinyin}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 pt-2">
                <RotateCw className="w-3.5 h-3.5" />
                <span>Нажмите, чтобы увидеть перевод и пример</span>
              </span>
            </>
          ) : (
            <div className="space-y-4 text-left w-full max-w-xl">
              <div className="text-center space-y-1">
                <p className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {card.translationRu}
                </p>
                <p className="text-xs text-slate-500">
                  Дословно: «{card.literalRu}»
                </p>
              </div>

              {example && (
                <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                  <p className="text-xs font-bold text-emerald-700">
                    Пример: {example.contextTitle}
                  </p>
                  {example.dialogue.map((line, idx) => (
                    <div key={idx} className="text-xs space-y-0.5">
                      <span className="font-semibold text-slate-500">
                        {line.speakerLabel}:{' '}
                      </span>
                      <span className="font-hanzi font-bold text-slate-900 text-sm">
                        {line.hanzi}
                      </span>{' '}
                      <span className="text-slate-600">
                        — {line.translationRu}
                      </span>
                    </div>
                  ))}
                  <p className="text-xs text-slate-500 pt-1 border-t border-slate-100">
                    {example.grammarNoteRu}
                  </p>
                </div>
              )}
            </div>
          )}
        </button>

        {/* Bottom Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="tactile-btn inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border-b-4 border-slate-300 text-sm font-bold text-slate-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Назад</span>
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="tactile-btn inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border-b-4 border-slate-300 text-sm font-bold text-slate-700"
            >
              <span>Следующая</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              onMarkMastered(card.id);
              handleNext();
            }}
            className="tactile-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 border-b-4 border-emerald-800 text-sm font-bold text-white"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isMastered ? 'Знаю отлично →' : 'Отметить как изученную'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
