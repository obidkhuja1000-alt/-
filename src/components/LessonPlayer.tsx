import { useEffect, useMemo, useState } from 'react';
import {
  CheckCircle2,
  Heart,
  RotateCcw,
  Sparkles,
  Turtle,
  Volume2,
  VolumeX,
  X,
  XCircle,
} from 'lucide-react';
import { buildLessonExercises, UNITS } from '../data/curriculum';
import { LessonExercise, WordToken } from '../types/curriculum';
import { playFeedbackSound, speakChinese } from '../utils/speech';

interface LessonPlayerProps {
  unitId: string;
  onExit: () => void;
  onCompleteLesson: (params: {
    unitId: string;
    earnedXp: number;
    masteredSentenceIds: string[];
  }) => void;
}

export function LessonPlayer({
  unitId,
  onExit,
  onCompleteLesson,
}: LessonPlayerProps) {
  const unit = useMemo(
    () => UNITS.find((u) => u.id === unitId) || UNITS[0],
    [unitId]
  );

  const [exercises, setExercises] = useState<LessonExercise[]>(() =>
    buildLessonExercises(unit.id)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showPinyin, setShowPinyin] = useState(true);
  const [showListenHint, setShowListenHint] = useState(false);

  // Selection states
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedTokens, setSelectedTokens] = useState<number[]>([]);
  const [status, setStatus] = useState<'answering' | 'correct' | 'wrong'>(
    'answering'
  );

  // Session stats
  const [correctCount, setCorrectCount] = useState(0);
  const [earnedXp, setEarnedXp] = useState(0);
  const [finished, setFinished] = useState(false);
  const [pandaError, setPandaError] = useState(false);

  const currentExercise = exercises[currentIndex];
  const progressPercent = finished
    ? 100
    : Math.round((currentIndex / exercises.length) * 100);

  // Auto-play audio on listening or translation-from-Chinese tasks
  useEffect(() => {
    if (finished || !currentExercise) return;
    if (
      currentExercise.type === 'listen_match' ||
      currentExercise.type === 'translate_to_ru'
    ) {
      speakChinese(currentExercise.sentence.hanzi, 0.9);
    }
    setShowListenHint(false);
  }, [currentIndex, finished, currentExercise]);

  const canCheck = useMemo(() => {
    if (!currentExercise || status !== 'answering') return false;
    if (currentExercise.type === 'word_bank') {
      return selectedTokens.length > 0;
    }
    return selectedOption !== null;
  }, [currentExercise, status, selectedTokens, selectedOption]);

  const handleToggleToken = (poolIndex: number) => {
    if (status !== 'answering') return;
    if (soundEnabled) playFeedbackSound('tap');
    setSelectedTokens((prev) =>
      prev.includes(poolIndex)
        ? prev.filter((idx) => idx !== poolIndex)
        : [...prev, poolIndex]
    );
  };

  const handleCheck = () => {
    if (!currentExercise || status !== 'answering') return;

    let isCorrect = false;

    if (currentExercise.type === 'word_bank') {
      const pool = currentExercise.wordBankPool || [];
      const builtHanzi = selectedTokens.map((idx) => pool[idx].hanzi).join('');
      const targetHanzi = currentExercise.sentence.tokens
        .map((t) => t.hanzi)
        .join('');
      isCorrect = builtHanzi === targetHanzi;
    } else if (currentExercise.type === 'context_usage') {
      isCorrect = selectedOption === currentExercise.sentence.id;
    } else {
      isCorrect = selectedOption === currentExercise.correctOptionRu;
    }

    if (isCorrect) {
      setStatus('correct');
      setCorrectCount((c) => c + 1);
      setEarnedXp((xp) => xp + 15);
      if (soundEnabled) playFeedbackSound('correct');
      speakChinese(currentExercise.sentence.hanzi, 0.95);
    } else {
      setStatus('wrong');
      setHearts((h) => Math.max(0, h - 1));
      if (soundEnabled) playFeedbackSound('wrong');
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 >= exercises.length) {
      const uniqueIds = Array.from(
        new Set(exercises.map((ex) => ex.sentence.id))
      );
      const bonusXp = hearts > 0 ? 20 : 10;
      const totalXp = earnedXp + bonusXp;
      setEarnedXp(totalXp);
      setFinished(true);
      if (soundEnabled) playFeedbackSound('complete');
      onCompleteLesson({
        unitId: unit.id,
        earnedXp: totalXp,
        masteredSentenceIds: uniqueIds,
      });
      return;
    }

    setCurrentIndex((i) => i + 1);
    setSelectedOption(null);
    setSelectedTokens([]);
    setStatus('answering');
  };

  const handleRestartLesson = () => {
    setExercises(buildLessonExercises(unit.id));
    setCurrentIndex(0);
    setHearts(5);
    setSelectedOption(null);
    setSelectedTokens([]);
    setStatus('answering');
    setCorrectCount(0);
    setEarnedXp(0);
    setFinished(false);
  };

  // Out of hearts modal/screen
  if (hearts === 0 && !finished && status === 'wrong') {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 bg-slate-50">
        <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
            <Heart className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Закончились жизни
            </h2>
            <p className="text-sm text-slate-600">
              Ничего страшного — ошибки помогают запомнить тоны и порядок слов. Попробуйте ещё раз или восстановите жизни.
            </p>
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                setHearts(5);
                handleNext();
              }}
              className="tactile-btn w-full py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 border-b-4 border-emerald-800 rounded-xl"
            >
              Восстановить жизни и продолжить
            </button>
            <button
              type="button"
              onClick={handleRestartLesson}
              className="tactile-btn w-full py-3 text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border-b-4 border-slate-300 rounded-xl"
            >
              Начать урок заново
            </button>
            <button
              type="button"
              onClick={onExit}
              className="text-sm font-semibold text-slate-500 hover:text-slate-800 py-1.5"
            >
              Вернуться к курсу
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Lesson complete celebration screen
  if (finished) {
    const accuracy = Math.round((correctCount / exercises.length) * 100);
    const uniqueSentences = Array.from(
      new Map(exercises.map((e) => [e.sentence.id, e.sentence])).values()
    );

    return (
      <div className="max-w-[780px] mx-auto px-4 sm:px-6 py-10 space-y-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-center space-y-6">
          <div className="w-24 h-24 rounded-2xl overflow-hidden border border-slate-200 mx-auto bg-emerald-50 flex items-center justify-center">
            {!pandaError ? (
              <img
                src="/src/assets/images/panda_tutor_emblem_1795233219586.jpg"
                alt="Панда-наставник поздравляет с окончанием урока"
                referrerPolicy="no-referrer"
                onError={() => setPandaError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <Sparkles className="w-10 h-10 text-emerald-600" />
            )}
          </div>

          <div className="space-y-2">
            <p className="text-xs font-bold text-emerald-700">
              Раздел {unit.order} пройден
            </p>
            <h1 className="text-3xl font-extrabold text-slate-900">
              Отличная работа!
            </h1>
            <p className="text-sm text-slate-600">
              Вы потренировали {uniqueSentences.length} китайских предложений по теме «{unit.titleRu}».
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
              <p className="text-xs font-semibold text-amber-800">Получено</p>
              <p className="text-xl font-extrabold text-amber-700 font-mono-nums">
                +{earnedXp} XP
              </p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
              <p className="text-xs font-semibold text-emerald-800">Точность</p>
              <p className="text-xl font-extrabold text-emerald-700 font-mono-nums">
                {accuracy}%
              </p>
            </div>
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-3">
              <p className="text-xs font-semibold text-rose-800">Жизни</p>
              <p className="text-xl font-extrabold text-rose-700 font-mono-nums">
                {hearts} / 5
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={onExit}
              className="tactile-btn px-6 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 border-b-4 border-emerald-800 rounded-xl"
            >
              Продолжить курс
            </button>
            <button
              type="button"
              onClick={handleRestartLesson}
              className="tactile-btn inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border-b-4 border-slate-300 rounded-xl"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Пройти ещё раз</span>
            </button>
          </div>
        </div>

        {/* Review list */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
          <h2 className="text-lg font-bold text-slate-900">
            Предложения из этого урока
          </h2>
          <div className="divide-y divide-slate-100">
            {uniqueSentences.map((s) => (
              <div
                key={s.id}
                className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4"
              >
                <div className="space-y-0.5">
                  <p className="font-hanzi text-lg font-bold text-slate-900">
                    {s.hanzi}
                  </p>
                  <p className="text-xs font-medium text-emerald-700">
                    {s.pinyin}
                  </p>
                  <p className="text-sm text-slate-700">{s.translationRu}</p>
                </div>
                <button
                  type="button"
                  onClick={() => speakChinese(s.hanzi, 0.9)}
                  aria-label={`Озвучить: ${s.hanzi}`}
                  className="w-10 h-10 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 flex items-center justify-center shrink-0"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const wordPool: WordToken[] = currentExercise.wordBankPool || [];
  const firstExample = currentExercise.sentence.usageExamples[0];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-between bg-slate-50">
      {/* Lesson Top Progress Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
          <button
            type="button"
            onClick={onExit}
            aria-label="Выйти из урока"
            className="w-10 h-10 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center shrink-0 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Progress Bar */}
          <div className="flex-1 flex items-center gap-3">
            <div className="flex-1 h-3.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs font-bold text-slate-500 font-mono-nums shrink-0">
              {currentIndex + 1}/{exercises.length}
            </span>
          </div>

          {/* Controls: Pinyin, Sound, Hearts */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setShowPinyin((p) => !p)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                showPinyin
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}
            >
              Пиньинь
            </button>

            <button
              type="button"
              onClick={() => setSoundEnabled((s) => !s)}
              aria-label={soundEnabled ? 'Выключить звуки' : 'Включить звуки'}
              className="w-9 h-9 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            <div
              className="flex items-center gap-1.5 pl-2 text-rose-600 font-bold text-sm font-mono-nums"
              title="Оставшиеся жизни"
            >
              <Heart className="w-5 h-5 fill-current" />
              <span>{hearts}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Exercise Stage */}
      <main className="flex-1 max-w-[780px] w-full mx-auto px-4 sm:px-6 py-8 flex flex-col justify-center space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-slate-500">
            Раздел {unit.order}: {unit.titleRu}
          </p>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {currentExercise.promptLabelRu}
          </h1>
        </div>

        {/* Tutor Bubble */}
        <div className="flex items-start gap-4 bg-white border border-slate-200 rounded-2xl p-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-slate-100 bg-emerald-50 shrink-0 flex items-center justify-center">
            {!pandaError ? (
              <img
                src="/src/assets/images/panda_tutor_emblem_1795233219586.jpg"
                alt="Учитель панда"
                referrerPolicy="no-referrer"
                onError={() => setPandaError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="font-hanzi text-2xl font-bold text-emerald-700">
                师
              </span>
            )}
          </div>

          <div className="flex-1 min-w-0 space-y-2">
            {currentExercise.type === 'translate_to_ru' && (
              <>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      speakChinese(currentExercise.sentence.hanzi, 0.95)
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-bold transition-colors"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Произнести</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      speakChinese(currentExercise.sentence.hanzi, 0.6)
                    }
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                  >
                    <Turtle className="w-4 h-4" />
                    <span>Медленно</span>
                  </button>
                </div>
                <p className="font-hanzi text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                  {currentExercise.sentence.hanzi}
                </p>
                {showPinyin && (
                  <p className="text-sm font-medium text-emerald-700">
                    {currentExercise.sentence.pinyin}
                  </p>
                )}
              </>
            )}

            {currentExercise.type === 'listen_match' && (
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() =>
                      speakChinese(currentExercise.sentence.hanzi, 0.95)
                    }
                    className="tactile-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 border-b-4 border-sky-800 active:border-b-0 active:translate-y-[3px] text-white text-sm font-bold"
                  >
                    <Volume2 className="w-5 h-5" />
                    <span>Прослушать фразу</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      speakChinese(currentExercise.sentence.hanzi, 0.6)
                    }
                    className="tactile-btn inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border-b-4 border-slate-300 active:border-b-0 active:translate-y-[3px] text-slate-700 text-sm font-bold"
                  >
                    <Turtle className="w-4 h-4" />
                    <span>0.6x</span>
                  </button>
                </div>

                {showListenHint ? (
                  <p className="text-sm font-medium text-emerald-700">
                    Подсказка пиньиня: {currentExercise.sentence.pinyin}
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowListenHint(true)}
                    className="text-xs font-semibold text-slate-500 hover:text-emerald-700 underline underline-offset-4"
                  >
                    Показать подсказку пиньиня
                  </button>
                )}
              </div>
            )}

            {currentExercise.type === 'context_usage' && (
              <div className="space-y-1.5">
                <p className="text-xs font-bold text-amber-700">
                  Жизненная ситуация
                </p>
                <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                  {currentExercise.sentence.situationPromptRu}
                </p>
              </div>
            )}

            {currentExercise.type === 'word_bank' && (
              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-slate-500">
                  Переведите на китайский:
                </p>
                <p className="text-lg sm:text-xl font-bold text-slate-900">
                  «{currentExercise.sentence.translationRu}»
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Answer Interaction Zone */}
        {currentExercise.type === 'word_bank' ? (
          <div className="space-y-5">
            {/* Answer Construction Tray */}
            <div className="min-h-[84px] bg-white border-2 border-dashed border-slate-300 rounded-2xl p-4 flex flex-wrap items-center gap-2.5">
              {selectedTokens.length === 0 ? (
                <p className="text-sm text-slate-400">
                  Нажимайте на слова ниже, чтобы собрать предложение по порядку...
                </p>
              ) : (
                selectedTokens.map((poolIdx) => {
                  const tok = wordPool[poolIdx];
                  return (
                    <button
                      key={`tray-${poolIdx}`}
                      type="button"
                      disabled={status !== 'answering'}
                      onClick={() => handleToggleToken(poolIdx)}
                      className="tactile-btn px-3.5 py-2 rounded-xl bg-emerald-50 border-2 border-emerald-300 border-b-4 text-left hover:bg-emerald-100"
                    >
                      <span className="font-hanzi text-lg font-bold text-slate-900 block leading-tight">
                        {tok.hanzi}
                      </span>
                      {showPinyin && (
                        <span className="text-[11px] font-medium text-emerald-700 block">
                          {tok.pinyin}
                        </span>
                      )}
                    </button>
                  );
                })
              )}
            </div>

            {/* Word Bank Pool */}
            <div className="flex flex-wrap gap-2.5 justify-center pt-1">
              {wordPool.map((tok, poolIdx) => {
                const isUsed = selectedTokens.includes(poolIdx);
                return (
                  <button
                    key={`pool-${poolIdx}-${tok.hanzi}`}
                    type="button"
                    disabled={isUsed || status !== 'answering'}
                    onClick={() => {
                      speakChinese(tok.hanzi, 0.9);
                      handleToggleToken(poolIdx);
                    }}
                    className={`tactile-btn px-4 py-2.5 rounded-xl border text-left ${
                      isUsed
                        ? 'bg-slate-200 border-slate-200 text-transparent select-none cursor-default'
                        : 'bg-white hover:bg-slate-50 border-slate-300 border-b-4 active:border-b active:translate-y-[3px] text-slate-900'
                    }`}
                  >
                    <span
                      className={`font-hanzi text-lg font-bold block leading-tight ${
                        isUsed ? 'opacity-0' : ''
                      }`}
                    >
                      {tok.hanzi}
                    </span>
                    {showPinyin && (
                      <span
                        className={`text-xs font-medium block ${
                          isUsed ? 'opacity-0' : 'text-slate-500'
                        }`}
                      >
                        {tok.pinyin}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ) : currentExercise.type === 'context_usage' ? (
          <div className="grid grid-cols-1 gap-3">
            {(currentExercise.optionsSentences || []).map((opt, idx) => {
              const isSelected = selectedOption === opt.id;
              const isCorrectAnswer = opt.id === currentExercise.sentence.id;

              let cardStyle =
                'bg-white hover:bg-slate-50 border-slate-200 border-b-4 text-slate-900';
              if (status === 'answering' && isSelected) {
                cardStyle =
                  'bg-sky-50 border-sky-500 border-b-4 text-sky-950';
              } else if (status !== 'answering') {
                if (isCorrectAnswer) {
                  cardStyle =
                    'bg-emerald-50 border-emerald-500 border-b-4 text-emerald-950';
                } else if (isSelected && !isCorrectAnswer) {
                  cardStyle =
                    'bg-rose-50 border-rose-500 border-b-4 text-rose-950';
                }
              }

              return (
                <div
                  key={opt.id}
                  className={`rounded-2xl border p-4 flex items-center justify-between gap-3 transition-colors ${cardStyle}`}
                >
                  <button
                    type="button"
                    disabled={status !== 'answering'}
                    onClick={() => {
                      if (soundEnabled) playFeedbackSound('tap');
                      setSelectedOption(opt.id);
                    }}
                    className="flex-1 text-left flex items-center gap-3.5 min-w-0"
                  >
                    <span className="w-7 h-7 rounded-lg border border-slate-300 bg-white text-xs font-bold text-slate-600 flex items-center justify-center shrink-0 font-mono-nums">
                      {idx + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="font-hanzi text-lg font-bold leading-snug">
                        {opt.hanzi}
                      </p>
                      {showPinyin && (
                        <p className="text-xs font-medium text-emerald-700 mt-0.5">
                          {opt.pinyin}
                        </p>
                      )}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => speakChinese(opt.hanzi, 0.9)}
                    aria-label={`Прослушать вариант ${idx + 1}`}
                    className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-sky-600 hover:border-sky-300 flex items-center justify-center shrink-0"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {(currentExercise.optionsRu || []).map((optionText, idx) => {
              const isSelected = selectedOption === optionText;
              const isCorrectAnswer =
                optionText === currentExercise.correctOptionRu;

              let cardStyle =
                'bg-white hover:bg-slate-50 border-slate-200 border-b-4 text-slate-900';
              if (status === 'answering' && isSelected) {
                cardStyle =
                  'bg-sky-50 border-sky-500 border-b-4 text-sky-950';
              } else if (status !== 'answering') {
                if (isCorrectAnswer) {
                  cardStyle =
                    'bg-emerald-50 border-emerald-500 border-b-4 text-emerald-950';
                } else if (isSelected && !isCorrectAnswer) {
                  cardStyle =
                    'bg-rose-50 border-rose-500 border-b-4 text-rose-950';
                }
              }

              return (
                <button
                  key={optionText}
                  type="button"
                  disabled={status !== 'answering'}
                  onClick={() => {
                    if (soundEnabled) playFeedbackSound('tap');
                    setSelectedOption(optionText);
                  }}
                  className={`tactile-btn w-full text-left rounded-2xl border p-4 flex items-center gap-3.5 ${cardStyle}`}
                >
                  <span className="w-7 h-7 rounded-lg border border-slate-300 bg-white text-xs font-bold text-slate-600 flex items-center justify-center shrink-0 font-mono-nums">
                    {idx + 1}
                  </span>
                  <span className="text-sm sm:text-base font-semibold">
                    {optionText}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </main>

      {/* Bottom Action & Duolingo Feedback Footer */}
      <footer
        className={`border-t transition-colors ${
          status === 'correct'
            ? 'bg-emerald-50 border-emerald-200'
            : status === 'wrong'
            ? 'bg-rose-50 border-rose-200'
            : 'bg-white border-slate-200'
        }`}
      >
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {status === 'answering' ? (
            <>
              <div className="flex items-center gap-3">
                {currentExercise.type === 'word_bank' &&
                  selectedTokens.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setSelectedTokens([])}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-900 underline underline-offset-4"
                    >
                      Очистить выбор
                    </button>
                  )}
                <p className="text-xs text-slate-500 hidden sm:block">
                  Подсказка: слушайте тона и обращайте внимание на порядок слов.
                </p>
              </div>
              <button
                type="button"
                disabled={!canCheck}
                onClick={handleCheck}
                className={`tactile-btn px-8 py-3 rounded-xl text-sm font-bold border-b-4 transition-colors ${
                  canCheck
                    ? 'bg-emerald-600 hover:bg-emerald-500 border-emerald-800 active:border-b-0 active:translate-y-[3px] text-white'
                    : 'bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed'
                }`}
              >
                Проверить
              </button>
            </>
          ) : (
            <>
              <div className="flex items-start gap-3 min-w-0">
                {status === 'correct' ? (
                  <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-7 h-7 text-rose-600 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1 min-w-0">
                  <p
                    className={`text-base font-extrabold ${
                      status === 'correct'
                        ? 'text-emerald-800'
                        : 'text-rose-800'
                    }`}
                  >
                    {status === 'correct'
                      ? 'Верно! +15 XP'
                      : 'Правильный ответ:'}
                  </p>
                  <p className="font-hanzi text-base font-bold text-slate-900">
                    {currentExercise.sentence.hanzi}{' '}
                    <span className="font-sans text-xs font-medium text-slate-600">
                      ({currentExercise.sentence.pinyin})
                    </span>
                  </p>
                  <p className="text-xs text-slate-700">
                    Перевод: {currentExercise.sentence.translationRu}
                  </p>
                  {firstExample && (
                    <p className="text-xs text-slate-600 pt-0.5">
                      <span className="font-semibold">Пример в жизни:</span>{' '}
                      {firstExample.contextTitle} — «
                      {firstExample.dialogue[1]?.hanzi ||
                        firstExample.dialogue[0]?.hanzi}
                      » (
                      {firstExample.dialogue[1]?.translationRu ||
                        firstExample.dialogue[0]?.translationRu}
                      )
                    </p>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className={`tactile-btn px-8 py-3 rounded-xl text-sm font-bold text-white border-b-4 active:border-b-0 active:translate-y-[3px] shrink-0 ${
                  status === 'correct'
                    ? 'bg-emerald-600 hover:bg-emerald-500 border-emerald-800'
                    : 'bg-rose-600 hover:bg-rose-500 border-rose-800'
                }`}
              >
                Дальше
              </button>
            </>
          )}
        </div>
      </footer>
    </div>
  );
}
