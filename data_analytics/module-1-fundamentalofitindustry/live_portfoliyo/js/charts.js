/**
 * Chart.js Visualizations Manager
 * Noori Fatema Hokayat - Data Analytics Portfolio
 */

let modalChartInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  initHeroCharts();
});

/**
 * Initialize Hero Dashboard Mockup Charts
 */
function initHeroCharts() {
  // 1. Hero Revenue Trend Chart (Line Chart)
  const heroLineCanvas = document.getElementById('heroSalesChart');
  if (heroLineCanvas && typeof Chart !== 'undefined') {
    const ctx = heroLineCanvas.getContext('2d');
    
    // Create gradient fill
    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, 'rgba(6, 182, 212, 0.4)');
    gradient.addColorStop(1, 'rgba(6, 182, 212, 0.0)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [{
          label: 'Revenue ($K)',
          data: [32, 45, 42, 58, 65, 60, 78, 85, 96],
          borderColor: '#06b6d4',
          borderWidth: 3,
          backgroundColor: gradient,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#06b6d4',
          pointBorderColor: '#050816',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#0b1020',
            borderColor: 'rgba(6, 182, 212, 0.4)',
            borderWidth: 1,
            titleFont: { family: 'Outfit', size: 12 },
            bodyFont: { family: 'Inter', size: 11 },
            callbacks: {
              label: (context) => `$${context.raw}K Revenue`
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#64748b', font: { size: 10 } }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#64748b', font: { size: 10 }, callback: (v) => `$${v}K` }
          }
        }
      }
    });
  }

  // 2. Hero Customer Donut Chart
  const heroDonutCanvas = document.getElementById('heroDonutChart');
  if (heroDonutCanvas && typeof Chart !== 'undefined') {
    const ctx = heroDonutCanvas.getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Enterprise', 'SMB', 'Consumer'],
        datasets: [{
          data: [55, 30, 15],
          backgroundColor: ['#06b6d4', '#3b82f6', '#8b5cf6'],
          borderWidth: 0,
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '72%',
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#0b1020',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            titleFont: { family: 'Outfit', size: 11 },
            bodyFont: { family: 'Inter', size: 10 }
          }
        }
      }
    });
  }
}

/**
 * Render Dynamic Chart Inside Case Study Detail Modal
 * @param {Object} chartConfig - Configuration object from project data
 */
function renderModalChart(chartConfig) {
  const canvas = document.getElementById('modalCaseStudyChart');
  if (!canvas || typeof Chart === 'undefined') return;

  // Destroy previous chart instance if exists
  if (modalChartInstance) {
    modalChartInstance.destroy();
    modalChartInstance = null;
  }

  const ctx = canvas.getContext('2d');

  // Common dark theme options
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#94a3b8',
          font: { family: 'Inter', size: 11 },
          usePointStyle: true,
          padding: 15
        }
      },
      title: {
        display: !!chartConfig.title,
        text: chartConfig.title || '',
        color: '#f8fafc',
        font: { family: 'Outfit', size: 14, weight: '600' },
        padding: { bottom: 15 }
      },
      tooltip: {
        backgroundColor: '#0b1020',
        borderColor: 'rgba(6, 182, 212, 0.4)',
        borderWidth: 1,
        titleFont: { family: 'Outfit', size: 12 },
        bodyFont: { family: 'Inter', size: 11 },
        padding: 10,
        cornerRadius: 6
      }
    },
    scales: chartConfig.type !== 'doughnut' && chartConfig.type !== 'pie' ? {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.04)' },
        ticks: { color: '#64748b', font: { size: 11 } }
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#64748b', font: { size: 11 } }
      }
    } : {}
  };

  modalChartInstance = new Chart(ctx, {
    type: chartConfig.type || 'bar',
    data: {
      labels: chartConfig.labels,
      datasets: chartConfig.datasets
    },
    options: defaultOptions
  });
}
