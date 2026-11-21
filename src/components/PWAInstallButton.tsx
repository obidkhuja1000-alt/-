import { useState } from 'react';
import { Download, Share, Smartphone, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  showGuideFallback?: boolean;
}

export function PWAInstallButton({
  showGuideFallback = false,
}: PWAInstallButtonProps) {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuideModal, setShowGuideModal] = useState(false);

  if (isInstalled) {
    return null;
  }

  if (isInstallable) {
    return (
      <button
        type="button"
        onClick={install}
        className="tactile-btn inline-flex items-center gap-2 px-4 py-3 text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 border-b-4 border-b-emerald-300 active:border-b active:translate-y-[3px] rounded-xl whitespace-nowrap shrink-0"
      >
        <Download className="w-4 h-4" />
        <span>Установить приложение</span>
      </button>
    );
  }

  if (isIOS || showGuideFallback) {
    return (
      <>
        <button
          type="button"
          onClick={() => setShowGuideModal(true)}
          className="tactile-btn inline-flex items-center gap-2 px-4 py-3 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 border-b-4 border-b-slate-300 active:border-b active:translate-y-[3px] rounded-xl whitespace-nowrap shrink-0"
        >
          <Smartphone className="w-4 h-4 text-emerald-600" />
          <span>{isIOS ? 'Установить на iPhone' : 'Как установить'}</span>
        </button>

        {showGuideModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pwa-install-title"
          >
            <div className="w-full max-w-md rounded-2xl bg-white border border-slate-200 p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3
                    id="pwa-install-title"
                    className="text-lg font-extrabold text-slate-900"
                  >
                    Установка HanyuDuo на телефон
                  </h3>
                  <p className="text-xs text-slate-500">
                    Приложение будет открываться как обычная программа и работать без интернета.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowGuideModal(false)}
                  aria-label="Закрыть подсказку"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 text-sm text-slate-700">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <p className="font-bold text-slate-900 flex items-center gap-2">
                    <Share className="w-4 h-4 text-sky-600" />
                    <span>На iPhone / iPad (Safari)</span>
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    1. Нажмите кнопку <strong>«Поделиться»</strong> в нижней панели Safari.
                    <br />
                    2. Прокрутите вниз и выберите <strong>«На экран „Домой“»</strong>.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <p className="font-bold text-slate-900 flex items-center gap-2">
                    <Download className="w-4 h-4 text-emerald-600" />
                    <span>На Android (Chrome)</span>
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Откройте меню браузера (три точки справа сверху) и нажмите <strong>«Установить приложение»</strong> или <strong>«Добавить на главный экран»</strong>.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowGuideModal(false)}
                className="tactile-btn w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 border-b-4 border-emerald-800 text-sm font-bold text-white"
              >
                Понятно
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
}
