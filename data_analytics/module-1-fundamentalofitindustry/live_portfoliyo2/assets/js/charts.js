/**
 * SVG / Canvas Data Visualizations
 * Dynamic chart renderers for Hero Visual & Case Study Modals
 */

const PortfolioCharts = {
  /**
   * Render Hero Mini Line Chart SVG
   */
  renderHeroMiniChart(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const points = [
      { x: 0, y: 70 },
      { x: 30, y: 55 },
      { x: 60, y: 62 },
      { x: 90, y: 40 },
      { x: 120, y: 48 },
      { x: 150, y: 25 },
      { x: 180, y: 30 },
      { x: 210, y: 15 },
      { x: 240, y: 18 }
    ];

    const d = points.reduce((acc, pt, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`, '');
    const fillD = `${d} L 240 90 L 0 90 Z`;

    const svgHTML = `
      <svg viewBox="0 0 240 90" class="w-full h-20 overflow-visible">
        <defs>
          <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.4" />
            <stop offset="100%" stop-color="#22d3ee" stop-opacity="0.0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path d="${fillD}" fill="url(#heroChartGrad)" />
        <path d="${d}" fill="none" stroke="#22d3ee" stroke-width="3" filter="url(#glow)" stroke-linecap="round" />
        ${points.map(p => `
          <circle cx="${p.x}" cy="${p.y}" r="3.5" fill="#030712" stroke="#22d3ee" stroke-width="2" />
        `).join('')}
      </svg>
    `;

    container.innerHTML = svgHTML;
  },

  /**
   * Render Confusion Matrix Grid in Modal
   */
  renderConfusionMatrix(containerId, matrixData = { tp: 98, fp: 2, fn: 1, tn: 99 }) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="space-y-2">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400">Confusion Matrix Evaluation</h4>
        <div class="grid grid-cols-2 gap-2 text-center text-xs">
          <div class="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30">
            <span class="block text-slate-400 text-[10px] uppercase">True Positive</span>
            <span class="text-lg font-bold text-cyan-400">${matrixData.tp}</span>
          </div>
          <div class="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
            <span class="block text-slate-400 text-[10px] uppercase">False Positive</span>
            <span class="text-lg font-bold text-rose-400">${matrixData.fp}</span>
          </div>
          <div class="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
            <span class="block text-slate-400 text-[10px] uppercase">False Negative</span>
            <span class="text-lg font-bold text-amber-400">${matrixData.fn}</span>
          </div>
          <div class="p-3 rounded-lg bg-purple-950/40 border border-purple-500/30">
            <span class="block text-slate-400 text-[10px] uppercase">True Negative</span>
            <span class="text-lg font-bold text-purple-400">${matrixData.tn}</span>
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Render Feature Importance Progress Bars
   */
  renderFeatureImportance(containerId, features = [
    { name: "Tenure / Recency", score: 88 },
    { name: "Monthly Charges", score: 76 },
    { name: "Contract Type", score: 69 },
    { name: "Payment Method", score: 54 }
  ]) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const barsHTML = features.map(f => `
      <div class="space-y-1">
        <div class="flex justify-between text-xs font-medium">
          <span class="text-slate-300">${f.name}</span>
          <span class="text-cyan-400 font-mono">${f.score}%</span>
        </div>
        <div class="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000" style="width: ${f.score}%"></div>
        </div>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="space-y-3">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400">Top Feature Importance</h4>
        <div class="space-y-2.5">
          ${barsHTML}
        </div>
      </div>
    `;
  }
};
