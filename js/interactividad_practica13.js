/**
 * Práctica 13 — contenido interactivo.
 * Bloque A: Chart.js · Bloque B: Anime.js · Bloque C: Canvas 2D + rAF.
 * Cada bloque en su propio IIFE (sin variables globales).
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

/**
 * Bloque B — Anime.js: entrada escalonada para tarjetas de destino + microinteracciones de botón/tarjeta.
 */
(function () {
  'use strict';

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function bootAnime() {
    if (typeof anime === 'undefined') {
      return;
    }
    if (prefersReducedMotion()) {
      return;
    }

    const destinosSection = document.getElementById('destinos');
    const cards = document.querySelectorAll('#destinos .destino-card');
    if (!cards.length) {
      return;
    }

    cards.forEach(function (c) {
      c.classList.add('js-interact-v13-card-pending');
    });

    let staggerDone = false;
    function runStagger() {
      if (staggerDone) {
        return;
      }
      staggerDone = true;
      anime({
        targets: cards,
        translateY: [28, 0],
        opacity: [0, 1],
        delay: anime.stagger(95, { from: 'first' }),
        duration: 520,
        easing: 'easeOutCubic',
        complete: function () {
          cards.forEach(function (c) {
            c.classList.remove('js-interact-v13-card-pending');
          });
        },
      });
    }

    if ('IntersectionObserver' in window && destinosSection) {
      const obs = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              runStagger();
            }
          });
        },
        { root: null, threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
      );
      obs.observe(destinosSection);
    } else {
      runStagger();
    }

    window.setTimeout(function () {
      if (!staggerDone) {
        runStagger();
      }
    }, 8000);

    const cardShadowOut = '0 4px 15px rgba(0, 0, 0, 0.1)';
    const cardShadowOver = '0 12px 28px rgba(200, 16, 46, 0.16)';

    cards.forEach(function (card) {
      card.addEventListener('mouseenter', function () {
        anime.remove(card);
        anime({
          targets: card,
          scale: 1.02,
          boxShadow: cardShadowOver,
          duration: 260,
          easing: 'easeOutQuad',
        });
      });
      card.addEventListener('mouseleave', function () {
        anime({
          targets: card,
          scale: 1,
          boxShadow: cardShadowOut,
          duration: 320,
          easing: 'easeOutQuad',
        });
      });
    });

    document
      .querySelectorAll('a.btn-primary, a.btn-secondary, button.btn-primary, button.btn-secondary')
      .forEach(function (btn) {
        btn.addEventListener('mouseenter', function () {
          anime.remove(btn);
          anime({ targets: btn, scale: 1.035, duration: 200, easing: 'easeOutQuad' });
        });
        btn.addEventListener('mouseleave', function () {
          anime({ targets: btn, scale: 1, duration: 220, easing: 'easeOutQuad' });
        });
        btn.addEventListener('mousedown', function () {
          anime({ targets: btn, scale: 0.97, duration: 90, easing: 'easeOutQuad' });
        });
        btn.addEventListener('mouseup', function () {
          anime({ targets: btn, scale: 1.035, duration: 140, easing: 'easeOutQuad' });
        });
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootAnime);
  } else {
    bootAnime();
  }
})();

/**
 * Bloque C — Canvas 2D: campo de partículas atraído por el cursor; bucle de animación via requestAnimationFrame.
 */
(function () {
  'use strict';

  function bootCanvas() {
    const canvas = document.getElementById('js-interact-v13-particles-canvas');
    const shell = document.querySelector('.js-interact-v13-particles-shell');
    if (!canvas || !shell) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    let w = 0;
    let h = 0;
    let rafId = 0;
    const particleCount = 52;
    const particles = [];
    let mx = null;
    let my = null;

    function resize() {
      const rect = shell.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seedParticles() {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.9,
          vy: (Math.random() - 0.5) * 0.9,
          r: 1.8 + Math.random() * 2.4,
        });
      }
    }

    function step() {
      ctx.clearRect(0, 0, w, h);

      const cx = mx != null ? mx : w * 0.5;
      const cy = my != null ? my : h * 0.5;
      const attract = 0.022;
      const friction = 0.982;

      particles.forEach(function (p) {
        const dx = cx - p.x;
        const dy = cy - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
        p.vx += (dx / dist) * attract;
        p.vy += (dy / dist) * attract;
        p.vx *= friction;
        p.vy *= friction;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) {
          p.x = w;
        } else if (p.x > w) {
          p.x = 0;
        }
        if (p.y < 0) {
          p.y = h;
        } else if (p.y > h) {
          p.y = 0;
        }
      });

      ctx.lineWidth = 1;
      particles.forEach(function (a, i) {
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 88) {
            ctx.strokeStyle = 'rgba(212, 165, 32, ' + (1 - d / 88) * 0.35 + ')';
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      });

      particles.forEach(function (p) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200, 16, 46, 0.55)';
        ctx.fill();
      });

      rafId = window.requestAnimationFrame(step);
    }

    function startLoop() {
      resize();
      seedParticles();
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      rafId = window.requestAnimationFrame(step);
    }

    shell.addEventListener('mousemove', function (e) {
      const rect = shell.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
    });

    shell.addEventListener('mouseleave', function () {
      mx = null;
      my = null;
    });

    window.addEventListener('resize', function () {
      resize();
      seedParticles();
    });

    startLoop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootCanvas);
  } else {
    bootCanvas();
  }
})();
