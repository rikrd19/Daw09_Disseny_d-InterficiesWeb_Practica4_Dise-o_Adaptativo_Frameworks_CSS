/**
 * Practice 13 — interactive content (Chart.js block A).
 * Runs in an IIFE to avoid polluting the global scope.
 */
(function () {
  'use strict';

  const THEME = {
    red: '#c8102e',
    gold: '#d4a520',
    goldFill: 'rgba(212, 165, 32, 0.45)',
    redStroke: 'rgba(200, 16, 46, 0.9)',
    text: '#333333',
    grid: 'rgba(51, 51, 51, 0.12)',
  };

  const MONTH_LABELS = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic',
  ];

  const DATASETS = {
    coast: {
      label: 'Costa e índice estival (ilustrativo)',
      data: [42, 45, 58, 72, 85, 92, 100, 98, 78, 62, 48, 44],
    },
    inland: {
      label: 'Interior y patrimonio cultural (ilustrativo)',
      data: [55, 52, 60, 68, 72, 75, 80, 76, 70, 68, 58, 54],
    },
  };

  let chartInstance = null;
  let chartType = 'bar';
  let activeDatasetKey = 'coast';

  const TOGGLE_TYPE_LABELS = {
    es: { bar: 'Ver gráfico de líneas', line: 'Ver gráfico de barras' },
    ca: { bar: 'Veure gràfic de línies', line: 'Veure gràfic de barres' },
    en: { bar: 'Show line chart', line: 'Show bar chart' },
  };

  function currentUiLang() {
    return localStorage.getItem('userLang') || 'es';
  }

  function syncChartTypeToggleLabel() {
    const btn = document.getElementById('js-interact-v13-toggle-chart-type');
    if (!btn) return;
    const lang = currentUiLang();
    const pack = TOGGLE_TYPE_LABELS[lang] || TOGGLE_TYPE_LABELS.es;
    btn.textContent = chartType === 'bar' ? pack.bar : pack.line;
  }

  function buildChartConfig() {
    const ds = DATASETS[activeDatasetKey];
    const isLine = chartType === 'line';

    return {
      type: chartType,
      data: {
        labels: MONTH_LABELS,
        datasets: [
          {
            label: ds.label,
            data: ds.data,
            backgroundColor: isLine ? THEME.goldFill : THEME.goldFill,
            borderColor: THEME.redStroke,
            borderWidth: 2,
            fill: isLine,
            tension: 0.35,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            labels: { color: THEME.text, font: { size: 13 } },
          },
          title: {
            display: true,
            text: 'Índice de interés turístico mensual (0–100)',
            color: THEME.text,
            font: { size: 15, weight: '600' },
          },
          tooltip: {
            titleColor: THEME.text,
            bodyColor: THEME.text,
          },
        },
        scales: {
          x: {
            ticks: { color: THEME.text },
            grid: { color: THEME.grid },
          },
          y: {
            beginAtZero: true,
            max: 100,
            ticks: { color: THEME.text },
            grid: { color: THEME.grid },
          },
        },
      },
    };
  }

  function mountChart() {
    const canvas = document.getElementById('js-interact-v13-chart-canvas');
    if (!canvas || typeof Chart === 'undefined') {
      return;
    }
    if (chartInstance) {
      chartInstance.destroy();
      chartInstance = null;
    }
    chartInstance = new Chart(canvas, buildChartConfig());
  }

  function initChartBlock() {
    const toggleTypeBtn = document.getElementById('js-interact-v13-toggle-chart-type');
    const cycleDataBtn = document.getElementById('js-interact-v13-cycle-data');

    mountChart();
    syncChartTypeToggleLabel();

    if (toggleTypeBtn) {
      toggleTypeBtn.addEventListener('click', function () {
        chartType = chartType === 'bar' ? 'line' : 'bar';
        syncChartTypeToggleLabel();
        mountChart();
      });
    }

    if (cycleDataBtn) {
      cycleDataBtn.addEventListener('click', function () {
        activeDatasetKey = activeDatasetKey === 'coast' ? 'inland' : 'coast';
        mountChart();
      });
    }
  }

  function boot() {
    initChartBlock();
    window.addEventListener('catalunya-lang-changed', function () {
      syncChartTypeToggleLabel();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
