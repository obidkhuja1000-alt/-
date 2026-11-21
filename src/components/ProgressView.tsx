import { useState } from 'react';
import {
  Bookmark,
  CheckCircle2,
  Flame,
  RotateCcw,
  Sparkles,
  Trophy,
  Volume2,
} from 'lucide-react';
import { SENTENCES, UNITS } from '../data/curriculum';
import { UserProgress } from '../types/curriculum';
import { speakChinese } from '../utils/speech';

interface ProgressViewProps {
  progress: UserProgress;
  onStartUnitLesson: (unitId: string) => void;
  onResetProgress: () => void;
}

export function ProgressView({
  progress,
  onStartUnitLesson,
  onResetProgress,
}: ProgressViewProps) {
  const [confirmReset, setConfirmReset] = useState(false);

  const bookmarkedSentences = SENTENCES.filter((s) =>
    progress.bookmarkedSentenceIds.includes(s.id)
  );

  const overallPercent = Math.round(
    (progress.masteredSentenceIds.length / SENTENCES.length) * 100
  );

  return (
    <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Ваш прогресс по китайскому языку
          </h1>
          <p className="text-sm text-slate-600">
            Прогресс автоматически сохраняется в браузере
          </p>
        </div>

        {!confirmReset ? (
          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-rose-600 transition-colors self-start sm:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Сбросить прогресс</span>
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-rose-700">
              Точно сбросить?
            </span>
            <button
              type="button"
              onClick={() => {
                onResetProgress();
                setConfirmReset(false);
              }}
              className="px-3 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-bold"
            >
              Да, сбросить
            </button>
            <button
              type="button"
              onClick={() => setConfirmReset(false)}
              className="px-3 py-1.5 rounded-lg bg-slate-200 text-slate-700 text-xs font-bold"
            >
              Отмена
            </button>
          </div>
        )}
      </div>

      {/* Summary KPI Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-amber-600 text-xs font-semibold">
            <Flame className="w-4 h-4" />
            <span>Ударный режим</span>
          </div>
          <p className="text-2xl font-extrabold text-slate-900 font-mono-nums">
            {progress.streakDays} дн.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-emerald-600 text-xs font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Всего опыта</span>
          </div>
          <p className="text-2xl font-extrabold text-slate-900 font-mono-nums">
            {progress.xp} XP
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-sky-600 text-xs font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Освоено фраз</span>
          </div>
          <p className="text-2xl font-extrabold text-slate-900 font-mono-nums">
            {progress.masteredSentenceIds.length} / {SENTENCES.length} (
            {overallPercent}%)
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-indigo-600 text-xs font-semibold">
            <Trophy className="w-4 h-4" />
            <span>Пройдено уроков</span>
          </div>
          <p className="text-2xl font-extrabold text-slate-900 font-mono-nums">
            {progress.lessonsCompletedCount}
          </p>
        </div>
      </div>

      {/* Unit-by-unit progress */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <section className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
          <h2 className="text-lg font-bold text-slate-900">
            Прогресс по разделам
          </h2>
          <div className="space-y-4">
            {UNITS.map((unit) => {
              const unitSentences = SENTENCES.filter(
                (s) => s.unitId === unit.id
              );
              const mastered = unitSentences.filter((s) =>
                progress.masteredSentenceIds.includes(s.id)
              ).length;
              const pct = Math.round((mastered / unitSentences.length) * 100);

              return (
                <div key={unit.id} className="space-y-1.5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-slate-900 truncate">
                        {unit.order}. {unit.titleRu}
                      </p>
                      <p className="text-xs text-slate-500">
                        {unit.level} · Освоено {mastered} из{' '}
                        {unitSentences.length}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onStartUnitLesson(unit.id)}
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 whitespace-nowrap shrink-0"
                    >
                      Тренировать →
                    </button>
                  </div>
                  <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bookmarked sentences */}
        <section className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-amber-500" />
              <span>Избранные фразы</span>
            </h2>
            <span className="text-xs font-semibold text-slate-500 font-mono-nums">
              {bookmarkedSentences.length}
            </span>
          </div>

          {bookmarkedSentences.length === 0 ? (
            <p className="text-sm text-slate-500 py-6 text-center">
              Нажмите на значок закладки у любого предложения во вкладке «Предложения» или «Карточки», чтобы сохранить его сюда.
            </p>
          ) : (
            <div className="divide-y divide-slate-100">
              {bookmarkedSentences.map((s) => (
                <div
                  key={s.id}
                  className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="font-hanzi text-base font-bold text-slate-900 truncate">
                      {s.hanzi}
                    </p>
                    <p className="text-xs text-emerald-700">{s.pinyin}</p>
                    <p className="text-xs text-slate-600 truncate">
                      {s.translationRu}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => speakChinese(s.hanzi, 0.9)}
                    aria-label={`Озвучить ${s.hanzi}`}
                    className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
