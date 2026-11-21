import { useMemo, useState } from 'react';
import {
  Bookmark,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Search,
  Turtle,
  Volume2,
} from 'lucide-react';
import { SENTENCES, UNITS } from '../data/curriculum';
import { SentenceItem } from '../types/curriculum';
import { getToneLabelRu, getToneTextClass, speakChinese } from '../utils/speech';

interface SentenceLibraryProps {
  initialUnitFilter?: string;
  highlightedSentenceId?: string;
  bookmarkedIds: string[];
  masteredIds: string[];
  onToggleBookmark: (sentenceId: string) => void;
  onStartUnitLesson: (unitId: string) => void;
}

export function SentenceLibrary({
  initialUnitFilter = 'all',
  highlightedSentenceId = '',
  bookmarkedIds,
  masteredIds,
  onToggleBookmark,
  onStartUnitLesson,
}: SentenceLibraryProps) {
  const [selectedUnit, setSelectedUnit] = useState<string>(initialUnitFilter);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPinyin, setShowPinyin] = useState(true);
  const [colorizeTones, setColorizeTones] = useState(true);
  const [expandedId, setExpandedId] = useState<string>(
    highlightedSentenceId || SENTENCES[0].id
  );

  const filteredSentences = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return SENTENCES.filter((s) => {
      if (selectedUnit === 'bookmarked' && !bookmarkedIds.includes(s.id)) {
        return false;
      }
      if (
        selectedUnit !== 'all' &&
        selectedUnit !== 'bookmarked' &&
        s.unitId !== selectedUnit
      ) {
        return false;
      }
      if (!q) return true;
      return (
        s.hanzi.toLowerCase().includes(q) ||
        s.pinyin.toLowerCase().includes(q) ||
        s.translationRu.toLowerCase().includes(q) ||
        s.tokens.some(
          (t) =>
            t.hanzi.includes(q) ||
            t.meaningRu.toLowerCase().includes(q) ||
            t.pinyin.toLowerCase().includes(q)
        )
      );
    });
  }, [selectedUnit, searchQuery, bookmarkedIds]);

  const getUnitTitle = (unitId: string) => {
    const unit = UNITS.find((u) => u.id === unitId);
    return unit ? `Раздел ${unit.order}: ${unit.titleRu}` : '';
  };

  return (
    <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Header & Controls */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Предложения, перевод и примеры использования
            </h1>
            <p className="text-sm text-slate-600 max-w-2xl">
              Нажмите на любое слово, чтобы услышать произношение, или раскройте диалоги, чтобы увидеть живой контекст употребления фразы.
            </p>
          </div>

          {/* Display Toggles */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setShowPinyin((prev) => !prev)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors whitespace-nowrap shrink-0 ${
                showPinyin
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {showPinyin ? 'Пиньинь: вкл' : 'Пиньинь: выкл'}
            </button>
            <button
              type="button"
              onClick={() => setColorizeTones((prev) => !prev)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors whitespace-nowrap shrink-0 ${
                colorizeTones
                  ? 'bg-sky-50 border-sky-200 text-sky-800'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {colorizeTones ? 'Цвета тонов: вкл' : 'Цвета тонов: выкл'}
            </button>
          </div>
        </div>

        {/* Search + Unit Tabs */}
        <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between pt-2 border-t border-slate-100">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по-русски, пиньиню или иероглифам..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
            />
          </div>

          <div
            className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl overflow-x-auto"
            role="tablist"
            aria-label="Фильтр по разделам"
          >
            <button
              type="button"
              onClick={() => setSelectedUnit('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                selectedUnit === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Все ({SENTENCES.length})
            </button>
            {UNITS.map((unit) => (
              <button
                key={unit.id}
                type="button"
                onClick={() => setSelectedUnit(unit.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                  selectedUnit === unit.id
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {unit.order}. {unit.titleRu.split(' ')[0]}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setSelectedUnit('bookmarked')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                selectedUnit === 'bookmarked'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Избранное ({bookmarkedIds.length})
            </button>
          </div>
        </div>

        {/* Tone legend when tone colors enabled */}
        {colorizeTones && (
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-600 pt-1">
            <span className="font-semibold text-slate-700">Тона китайского:</span>
            <span className="text-rose-600 font-semibold">1-й ровный (ā)</span>
            <span className="text-amber-600 font-semibold">2-й вверх (á)</span>
            <span className="text-emerald-600 font-semibold">3-й вниз-вверх (ǎ)</span>
            <span className="text-sky-600 font-semibold">4-й резкий вниз (à)</span>
            <span className="text-slate-600 font-semibold">5-й нейтральный</span>
          </div>
        )}
      </div>

      {/* Empty state */}
      {filteredSentences.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center space-y-3">
          <p className="text-lg font-bold text-slate-900">
            Подходящих предложений не найдено
          </p>
          <p className="text-sm text-slate-600">
            Попробуйте изменить запрос или сбросить фильтр раздела.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedUnit('all');
              setSearchQuery('');
            }}
            className="tactile-btn px-4 py-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 border-b-4 border-emerald-800 rounded-xl"
          >
            Показать все предложения
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredSentences.map((sentence: SentenceItem) => {
            const isExpanded = expandedId === sentence.id;
            const isBookmarked = bookmarkedIds.includes(sentence.id);
            const isMastered = masteredIds.includes(sentence.id);

            return (
              <article
                key={sentence.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
              >
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Clean unboxed metadata row */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                      <span>{getUnitTitle(sentence.unitId)}</span>
                      <span aria-hidden="true">·</span>
                      <span>{sentence.level}</span>
                      {isMastered && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-emerald-700 font-semibold">
                            Освоено в уроке
                          </span>
                        </>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => speakChinese(sentence.hanzi, 0.95)}
                        aria-label="Произнести нормально"
                        title="Произнести нормально"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold transition-colors"
                      >
                        <Volume2 className="w-4 h-4" />
                        <span className="hidden sm:inline">Слушать</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => speakChinese(sentence.hanzi, 0.6)}
                        aria-label="Произнести медленно"
                        title="Произнести медленно"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                      >
                        <Turtle className="w-4 h-4" />
                        <span className="hidden sm:inline">Медленно</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onToggleBookmark(sentence.id)}
                        aria-label={
                          isBookmarked ? 'Убрать из избранного' : 'Сохранить в избранное'
                        }
                        className={`p-2 rounded-lg border transition-colors ${
                          isBookmarked
                            ? 'bg-amber-50 border-amber-200 text-amber-600'
                            : 'bg-white border-slate-200 text-slate-400 hover:text-slate-700'
                        }`}
                      >
                        <Bookmark
                          className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Main Chinese + Pinyin + Russian translation */}
                  <div className="space-y-1.5">
                    <p className="font-hanzi text-2xl sm:text-3xl font-bold tracking-wide leading-snug">
                      {sentence.tokens.map((tok, idx) => (
                        <button
                          key={`${sentence.id}-tok-${idx}`}
                          type="button"
                          onClick={() => speakChinese(tok.hanzi, 0.85)}
                          title={`${tok.pinyin} — ${tok.meaningRu} (${getToneLabelRu(tok.tone)})`}
                          className={`inline-block mr-1.5 hover:underline decoration-2 underline-offset-4 cursor-pointer ${getToneTextClass(
                            tok.tone,
                            colorizeTones
                          )}`}
                        >
                          {tok.hanzi}
                        </button>
                      ))}
                    </p>

                    {showPinyin && (
                      <p className="text-sm font-medium text-emerald-700">
                        {sentence.pinyin}
                      </p>
                    )}

                    <p className="text-lg font-bold text-slate-900 pt-1">
                      {sentence.translationRu}
                    </p>
                    <p className="text-xs text-slate-500">
                      Дословно: «{sentence.literalRu}»
                    </p>
                  </div>

                  {/* Word-by-word breakdown */}
                  <div className="pt-2">
                    <p className="text-xs font-semibold text-slate-500 mb-2">
                      Пословный разбор (нажмите на слово для озвучки):
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {sentence.tokens.map((tok, idx) => (
                        <button
                          key={`${sentence.id}-chip-${idx}`}
                          type="button"
                          onClick={() => speakChinese(tok.hanzi, 0.85)}
                          className="text-left px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
                        >
                          <div className="flex items-baseline gap-1.5">
                            <span
                              className={`font-hanzi text-base font-bold ${getToneTextClass(
                                tok.tone,
                                colorizeTones
                              )}`}
                            >
                              {tok.hanzi}
                            </span>
                            {showPinyin && (
                              <span className="text-xs font-medium text-slate-500">
                                {tok.pinyin}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-700 mt-0.5">
                            {tok.meaningRu}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Expand / Collapse Usage Examples */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedId(isExpanded ? '' : sentence.id)
                      }
                      className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 py-1"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>
                        Примеры использования ({sentence.usageExamples.length} диалога)
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => onStartUnitLesson(sentence.unitId)}
                      className="text-xs font-semibold text-slate-600 hover:text-emerald-700 transition-colors"
                    >
                      Тренировать этот раздел →
                    </button>
                  </div>
                </div>

                {/* Usage Examples Drawer */}
                {isExpanded && (
                  <div className="bg-slate-50 border-t border-slate-200 p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {sentence.usageExamples.map((example) => (
                      <div
                        key={example.id}
                        className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3.5"
                      >
                        <div>
                          <h3 className="text-sm font-bold text-slate-900">
                            {example.contextTitle}
                          </h3>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {example.situationRu}
                          </p>
                        </div>

                        <div className="space-y-2.5">
                          {example.dialogue.map((line, lineIdx) => (
                            <div
                              key={`${example.id}-line-${lineIdx}`}
                              className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start justify-between gap-3"
                            >
                              <div className="space-y-0.5 min-w-0">
                                <p className="text-xs font-semibold text-slate-500">
                                  {line.speakerLabel}
                                </p>
                                <p className="font-hanzi text-base font-bold text-slate-900">
                                  {line.hanzi}
                                </p>
                                {showPinyin && (
                                  <p className="text-xs font-medium text-emerald-700">
                                    {line.pinyin}
                                  </p>
                                )}
                                <p className="text-xs text-slate-700 pt-0.5">
                                  {line.translationRu}
                                </p>
                              </div>

                              <button
                                type="button"
                                onClick={() => speakChinese(line.hanzi, 0.9)}
                                aria-label={`Озвучить реплику: ${line.hanzi}`}
                                className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-sky-600 hover:border-sky-300 flex items-center justify-center shrink-0"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
                          <span className="font-semibold text-slate-800">
                            Заметка:
                          </span>{' '}
                          {example.grammarNoteRu}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
