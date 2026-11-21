import { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  Flame,
  Play,
  RotateCcw,
  Sparkles,
  Trophy,
  Volume2,
} from 'lucide-react';
import { SENTENCES, UNITS } from '../data/curriculum';
import { SentenceItem, Unit, UserProgress } from '../types/curriculum';
import { speakChinese } from '../utils/speech';

interface LearningPathProps {
  progress: UserProgress;
  onStartUnitLesson: (unitId: string) => void;
  onOpenSentenceInLibrary: (unitId: string, sentenceId: string) => void;
}

const ACCENT_MAP: Record<
  Unit['accentColor'],
  {
    nodeBg: string;
    nodeBorder: string;
    btnBg: string;
    btnBorder: string;
    textAccent: string;
  }
> = {
  emerald: {
    nodeBg: 'bg-emerald-600',
    nodeBorder: 'border-emerald-800',
    btnBg: 'bg-emerald-600 hover:bg-emerald-500',
    btnBorder: 'border-emerald-800',
    textAccent: 'text-emerald-700',
  },
  amber: {
    nodeBg: 'bg-amber-500',
    nodeBorder: 'border-amber-700',
    btnBg: 'bg-amber-500 hover:bg-amber-400',
    btnBorder: 'border-amber-700',
    textAccent: 'text-amber-700',
  },
  sky: {
    nodeBg: 'bg-sky-600',
    nodeBorder: 'border-sky-800',
    btnBg: 'bg-sky-600 hover:bg-sky-500',
    btnBorder: 'border-sky-800',
    textAccent: 'text-sky-700',
  },
  indigo: {
    nodeBg: 'bg-indigo-600',
    nodeBorder: 'border-indigo-800',
    btnBg: 'bg-indigo-600 hover:bg-indigo-500',
    btnBorder: 'border-indigo-800',
    textAccent: 'text-indigo-700',
  },
  rose: {
    nodeBg: 'bg-rose-600',
    nodeBorder: 'border-rose-800',
    btnBg: 'bg-rose-600 hover:bg-rose-500',
    btnBorder: 'border-rose-800',
    textAccent: 'text-rose-700',
  },
};

export function LearningPath({
  progress,
  onStartUnitLesson,
  onOpenSentenceInLibrary,
}: LearningPathProps) {
  const [bannerError, setBannerError] = useState(false);

  const nextUnit =
    UNITS.find((u) => !progress.completedUnitIds.includes(u.id)) || UNITS[0];

  const totalSentences = SENTENCES.length;
  const masteredCount = progress.masteredSentenceIds.length;

  return (
    <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Hero Split: Equal height 2-column intro */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-xs font-semibold text-emerald-700 tracking-wide">
              Курс разговорного китайского · HSK 1–2
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight [text-wrap:balance]">
              Учите живые китайские предложения с примерами из жизни
            </h1>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              Каждый урок состоит из коротких фраз с пиньинем, пословным разбором, озвучкой и реальными диалогами. Собирайте предложения из карточек, как в Duolingo, и закрепляйте их в контексте.
            </p>
          </div>

          <div className="pt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onStartUnitLesson(nextUnit.id)}
              className="tactile-btn inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 border-b-4 border-emerald-800 active:border-b-0 active:translate-y-[3px] rounded-xl whitespace-nowrap shrink-0"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>
                {progress.completedUnitIds.length > 0
                  ? `Продолжить: Раздел ${nextUnit.order}`
                  : 'Начать первый урок'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => onOpenSentenceInLibrary(nextUnit.id, '')}
              className="tactile-btn inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border-b-4 border-slate-300 active:border-b-0 active:translate-y-[3px] rounded-xl whitespace-nowrap shrink-0"
            >
              <BookOpen className="w-4 h-4" />
              <span>Смотреть все примеры</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 bg-emerald-50 min-h-[240px] relative">
          {!bannerError ? (
            <img
              src="/src/assets/images/chinese_study_banner_1795233220738.jpg"
              alt="Уютный пекинский дворик для изучения китайского языка"
              referrerPolicy="no-referrer"
              onError={() => setBannerError(true)}
              className="w-full h-full object-cover lg:h-full"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-emerald-50 to-amber-50">
              <span className="font-hanzi text-5xl font-bold text-emerald-700 mb-2">学汉语</span>
              <span className="text-sm font-semibold text-slate-700">
                Живой китайский в диалогах
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Full-Width 4-Column Metric Strip */}
      <section
        aria-label="Сводка прогресса"
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Ударный режим</p>
            <p className="text-lg font-bold text-slate-900 font-mono-nums">
              {progress.streakDays} дн.
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Опыт (XP)</p>
            <p className="text-lg font-bold text-slate-900 font-mono-nums">
              {progress.xp} XP
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Освоено фраз</p>
            <p className="text-lg font-bold text-slate-900 font-mono-nums">
              {masteredCount} / {totalSentences}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Разделы</p>
            <p className="text-lg font-bold text-slate-900 font-mono-nums">
              {progress.completedUnitIds.length} / {UNITS.length}
            </p>
          </div>
        </div>
      </section>

      {/* Duolingo-Style Winding / Stepped Unit Path */}
      <section className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Карта разделов</h2>
            <p className="text-sm text-slate-600">
              Проходите темы по порядку или открывайте любой раздел для тренировки предложений
            </p>
          </div>
          <p className="text-xs font-medium text-slate-500">
            Всего 5 тем · 25 базовых предложений · 50 диалогов
          </p>
        </div>

        <div className="space-y-6">
          {UNITS.map((unit) => {
            const unitSentences = SENTENCES.filter((s) => s.unitId === unit.id);
            const isCompleted = progress.completedUnitIds.includes(unit.id);
            const masteredInUnit = unitSentences.filter((s) =>
              progress.masteredSentenceIds.includes(s.id)
            ).length;
            const styles = ACCENT_MAP[unit.accentColor];

            return (
              <article
                key={unit.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left: Unit node + Info */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    <button
                      type="button"
                      onClick={() => onStartUnitLesson(unit.id)}
                      aria-label={`Начать раздел ${unit.order}: ${unit.titleRu}`}
                      className={`tactile-btn w-14 h-14 rounded-2xl ${styles.nodeBg} border-b-4 ${styles.nodeBorder} active:border-b-0 active:translate-y-[3px] text-white font-extrabold text-xl flex items-center justify-center shrink-0`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-7 h-7" />
                      ) : (
                        <span className="font-mono-nums">{unit.order}</span>
                      )}
                    </button>

                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                        <span className={styles.textAccent}>Раздел {unit.order}</span>
                        <span aria-hidden="true">·</span>
                        <span>{unit.level}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono-nums">
                          Освоено {masteredInUnit} из {unitSentences.length}
                        </span>
                        {isCompleted && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-emerald-700 font-semibold">Пройден</span>
                          </>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-slate-900">
                        {unit.titleRu}
                      </h3>
                      <p className="text-sm text-slate-600">{unit.subtitleRu}</p>
                      <p className="text-xs text-slate-500 pt-0.5">
                        Грамматика: {unit.grammarFocusRu}
                      </p>
                    </div>
                  </div>

                  {/* Right: CTA */}
                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      type="button"
                      onClick={() => onStartUnitLesson(unit.id)}
                      className={`tactile-btn inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white ${styles.btnBg} border-b-4 ${styles.btnBorder} active:border-b-0 active:translate-y-[3px] rounded-xl whitespace-nowrap shrink-0`}
                    >
                      {isCompleted ? (
                        <>
                          <RotateCcw className="w-4 h-4" />
                          <span>Повторить урок</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-current" />
                          <span>Пройти урок</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Sentence Preview Strip */}
                <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                  {unitSentences.map((sentence: SentenceItem) => {
                    const isMastered = progress.masteredSentenceIds.includes(
                      sentence.id
                    );
                    return (
                      <div
                        key={sentence.id}
                        className="group bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 rounded-xl p-3.5 flex items-start justify-between gap-3 transition-colors"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            onOpenSentenceInLibrary(unit.id, sentence.id)
                          }
                          className="text-left min-w-0 flex-1 space-y-1"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-hanzi text-base font-bold text-slate-900 truncate">
                              {sentence.hanzi}
                            </span>
                            {isMastered && (
                              <CheckCircle2
                                className="w-4 h-4 text-emerald-600 shrink-0"
                                aria-label="Изучено"
                              />
                            )}
                          </div>
                          <p className="text-xs font-medium text-emerald-700 truncate">
                            {sentence.pinyin}
                          </p>
                          <p className="text-xs text-slate-600 line-clamp-2">
                            {sentence.translationRu}
                          </p>
                        </button>

                        <button
                          type="button"
                          onClick={() => speakChinese(sentence.hanzi, 0.9)}
                          aria-label={`Озвучить фразу: ${sentence.hanzi}`}
                          className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-sky-600 hover:text-sky-700 hover:border-sky-300 flex items-center justify-center shrink-0 transition-colors"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
