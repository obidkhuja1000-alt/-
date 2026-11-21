import { ActiveTab } from '../types/curriculum';

interface TopBarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onStartQuickLesson: () => void;
}

const NAV_ITEMS: { id: ActiveTab; label: string }[] = [
  { id: 'path', label: 'Курс' },
  { id: 'library', label: 'Предложения' },
  { id: 'cards', label: 'Карточки' },
  { id: 'progress', label: 'Прогресс' },
];

export function TopBar({ activeTab, onSelectTab, onStartQuickLesson }: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Single-element brand wordmark */}
        <button
          type="button"
          onClick={() => onSelectTab('path')}
          className="text-xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-600 rounded"
        >
          HanyuDuo
        </button>

        {/* Zone 2: 4 concise single-line text nav links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Основная навигация">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectTab(item.id)}
                className={`text-sm font-semibold whitespace-nowrap shrink-0 py-1.5 border-b-2 transition-colors focus-visible:outline-2 focus-visible:outline-emerald-600 ${
                  isActive
                    ? 'text-emerald-700 border-emerald-600'
                    : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action button */}
        <div className="shrink-0">
          <button
            type="button"
            onClick={onStartQuickLesson}
            className="tactile-btn px-4 py-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 border-b-4 border-emerald-800 active:border-b-0 active:translate-y-[3px] rounded-xl whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-700"
          >
            Начать урок
          </button>
        </div>
      </div>

      {/* Compact mobile navigation row */}
      <nav
        className="md:hidden border-t border-slate-100 px-3 py-1.5 flex items-center justify-around gap-1 bg-white"
        aria-label="Мобильная навигация"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectTab(item.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                isActive
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
