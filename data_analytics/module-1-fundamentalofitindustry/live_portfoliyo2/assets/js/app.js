/**
 * Application Controller for Noori Fatema Hokayat's Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize AOS Animations
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });
  }

  // 2. Render Dynamic Components
  renderStatsCounters();
  renderExperience();
  renderSkills();
  renderEducationAndCerts();
  renderProjects('All');
  renderWorkflow();
  renderValueHighlights();

  // 3. Render Hero Charts & Visuals
  if (PortfolioCharts) {
    PortfolioCharts.renderHeroMiniChart('hero-mini-chart-container');
  }

  // 4. Setup Navigation & Interactivity
  setupNavigation();
  setupMobileDrawer();
  setupProjectModal();
  setupContactForm();
  setupScrollSpy();
  setupBackToTop();
});

/* ==========================================================================
   RENDERERS
   ========================================================================== */

function renderStatsCounters() {
  const container = document.getElementById('stats-grid-container');
  if (!container || !PORTFOLIO_DATA.stats) return;

  container.innerHTML = PORTFOLIO_DATA.stats.map((stat, i) => `
    <div class="glass-card p-6 rounded-2xl text-center relative overflow-hidden group" data-aos="fade-up" data-aos-delay="${i * 100}">
      <div class="absolute -right-4 -bottom-4 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all"></div>
      <div class="text-4xl lg:text-5xl font-extrabold text-gradient-cyan mb-2 font-mono flex items-center justify-center">
        <span class="counter-value" data-target="${stat.value}">0</span>${stat.suffix}
      </div>
      <div class="text-sm font-medium text-slate-400 uppercase tracking-wider">${stat.label}</div>
    </div>
  `).join('');

  initCounterObserver();
}

function initCounterObserver() {
  const counters = document.querySelectorAll('.counter-value');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 40));
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            counter.innerText = target;
            clearInterval(timer);
          } else {
            counter.innerText = current;
          }
        }, 30);
        obs.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function renderExperience() {
  const container = document.getElementById('experience-timeline-container');
  if (!container || !PORTFOLIO_DATA.experience) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
    <div class="glass-card p-8 rounded-2xl relative border-l-4 border-l-cyan-400 space-y-6" data-aos="fade-up">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span class="badge-pill mb-2 inline-block">${exp.type}</span>
          <h3 class="text-2xl font-bold text-white">${exp.role}</h3>
          <p class="text-cyan-400 font-medium text-sm mt-1">${exp.company} • ${exp.location}</p>
        </div>
        <div class="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-xs text-purple-400 font-semibold">
          ${exp.period}
        </div>
      </div>

      <p class="text-slate-300 leading-relaxed text-base">${exp.summary}</p>

      <div class="space-y-3">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400">Core Responsibilities & Impact:</h4>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-300">
          ${exp.responsibilities.map(resp => `
            <li class="flex items-start gap-2.5">
              <svg class="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>${resp}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
        <span class="text-xs text-slate-400 font-semibold mr-2 uppercase">Tech Stack:</span>
        ${exp.technologies.map(tech => `
          <span class="px-3 py-1 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono hover:border-cyan-500/40 transition-colors">
            ${tech}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderSkills() {
  const container = document.getElementById('skills-grid-container');
  if (!container || !PORTFOLIO_DATA.skillsCategories) return;

  container.innerHTML = PORTFOLIO_DATA.skillsCategories.map((cat, idx) => `
    <div class="glass-card p-6 rounded-2xl space-y-4" data-aos="fade-up" data-aos-delay="${(idx % 3) * 100}">
      <div class="flex items-center gap-3 border-b border-slate-800 pb-3">
        <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          ${getIconSVG(cat.icon)}
        </div>
        <h3 class="text-lg font-bold text-white">${cat.category}</h3>
      </div>

      <div class="space-y-3">
        ${cat.skills.map(skill => `
          <div class="space-y-1">
            <div class="flex justify-between text-xs font-medium">
              <span class="text-slate-300">${skill.name}</span>
              <span class="text-cyan-400 font-mono">${skill.level}%</span>
            </div>
            <div class="h-2 w-full bg-slate-900/90 rounded-full overflow-hidden border border-slate-800/50">
              <div class="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000" style="width: ${skill.level}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderEducationAndCerts() {
  const eduContainer = document.getElementById('education-container');
  const certContainer = document.getElementById('certifications-container');

  if (eduContainer && PORTFOLIO_DATA.education) {
    eduContainer.innerHTML = PORTFOLIO_DATA.education.map(edu => `
      <div class="glass-card p-6 rounded-2xl space-y-3 border-l-4 border-l-purple-500" data-aos="fade-right">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h3 class="text-xl font-bold text-white">${edu.degree}</h3>
          <span class="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 font-mono text-xs font-semibold">
            ${edu.period}
          </span>
        </div>
        <p class="text-slate-400 text-sm font-medium">${edu.institution}</p>
        <ul class="space-y-1.5 text-xs text-slate-300 pt-2">
          ${edu.highlights.map(h => `
            <li class="flex items-start gap-2">
              <span class="text-cyan-400 mt-0.5">•</span>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  }

  if (certContainer && PORTFOLIO_DATA.certifications) {
    certContainer.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
      <div class="glass-card p-5 rounded-2xl space-y-3 hover:border-purple-500/40" data-aos="fade-up">
        <div class="flex justify-between items-start">
          <h4 class="text-base font-bold text-white leading-snug">${cert.title}</h4>
          <span class="text-xs font-mono text-cyan-400 shrink-0 ml-2 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/30">${cert.year}</span>
        </div>
        <p class="text-xs text-slate-400 font-medium">${cert.issuer}</p>
        <div class="flex flex-wrap gap-1.5 pt-1">
          ${cert.skills.map(s => `<span class="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">${s}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }
}

function renderProjects(filterCategory = 'All') {
  const container = document.getElementById('projects-grid-container');
  if (!container || !PORTFOLIO_DATA.projects) return;

  const filtered = filterCategory === 'All' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category.toLowerCase().includes(filterCategory.toLowerCase()));

  container.innerHTML = filtered.map((proj, idx) => `
    <div class="glass-card rounded-2xl overflow-hidden group flex flex-col h-full" data-aos="fade-up" data-aos-delay="${(idx % 3) * 100}">
      <div class="relative overflow-hidden aspect-video bg-slate-950">
        <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
        <div class="absolute top-3 left-3">
          <span class="badge-pill backdrop-blur-md bg-slate-900/80">${proj.category}</span>
        </div>
        <div class="absolute bottom-3 right-3 font-mono text-xs font-bold text-cyan-300 bg-slate-900/90 px-3 py-1 rounded-lg border border-cyan-500/30 backdrop-blur-md">
          ${proj.accuracy}
        </div>
      </div>

      <div class="p-6 flex flex-col flex-grow space-y-4">
        <h3 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
          ${proj.title}
        </h3>
        
        <p class="text-sm text-slate-300 line-clamp-3 leading-relaxed">
          ${proj.shortDesc}
        </p>

        <div class="flex flex-wrap gap-1.5 mt-auto pt-2">
          ${proj.technologies.slice(0, 5).map(tech => `
            <span class="text-xs px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 font-mono">
              ${tech}
            </span>
          `).join('')}
        </div>

        <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
          <button onclick="openProjectModal('${proj.id}')" class="px-4 py-2 text-xs font-semibold text-cyan-400 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/40 rounded-xl transition-all flex items-center gap-1.5">
            <span>View Case Study</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>

          <div class="flex items-center gap-2">
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors" title="GitHub Code">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            ${proj.liveDemoUrl ? `
              <a href="${proj.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-cyan-400 hover:text-cyan-300 transition-colors" title="Live Demo">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  setupProjectFilterButtons();
}

function setupProjectFilterButtons() {
  const buttons = document.querySelectorAll('.project-filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => {
        b.classList.remove('bg-cyan-500', 'text-slate-950', 'font-bold');
        b.classList.add('bg-slate-900', 'text-slate-300', 'hover:border-cyan-500/40');
      });
      const target = e.target.closest('button');
      target.classList.remove('bg-slate-900', 'text-slate-300', 'hover:border-cyan-500/40');
      target.classList.add('bg-cyan-500', 'text-slate-950', 'font-bold');
      
      const filter = target.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

function renderWorkflow() {
  const container = document.getElementById('workflow-steps-container');
  if (!container || !PORTFOLIO_DATA.workflow) return;

  container.innerHTML = PORTFOLIO_DATA.workflow.map((step, i) => `
    <div class="glass-card p-5 rounded-2xl space-y-3 relative group" data-aos="fade-up" data-aos-delay="${i * 70}">
      <div class="flex items-center justify-between">
        <span class="text-xs font-mono font-extrabold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-500/30">
          ${step.number}
        </span>
        <div class="w-2 h-2 rounded-full bg-cyan-400 opacity-60 group-hover:scale-150 transition-transform"></div>
      </div>
      <h3 class="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">${step.title}</h3>
      <p class="text-xs text-slate-400 leading-relaxed">${step.desc}</p>
    </div>
  `).join('');
}

function renderValueHighlights() {
  const container = document.getElementById('highlights-grid-container');
  if (!container || !PORTFOLIO_DATA.valueHighlights) return;

  container.innerHTML = PORTFOLIO_DATA.valueHighlights.map((item, i) => `
    <div class="glass-card p-6 rounded-2xl space-y-3 group" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">
      <div class="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:border-purple-400 transition-all">
        ${getIconSVG(item.icon)}
      </div>
      <h3 class="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">${item.title}</h3>
      <p class="text-sm text-slate-300 leading-relaxed">${item.desc}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   INTERACTIONS & UTILITIES
   ========================================================================== */

function setupNavigation() {
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('glass-nav', 'shadow-2xl');
    } else {
      header.classList.remove('glass-nav', 'shadow-2xl');
    }
  });
}

function setupMobileDrawer() {
  const openBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

function setupProjectModal() {
  const backdrop = document.getElementById('project-modal-backdrop');
  const closeBtn = document.getElementById('project-modal-close');

  window.openProjectModal = function(id) {
    const proj = PORTFOLIO_DATA.projects.find(p => p.id === id);
    if (!proj) return;

    const content = document.getElementById('project-modal-content');
    if (!content) return;

    content.innerHTML = `
      <div class="space-y-6">
        <!-- Header -->
        <div class="relative rounded-2xl overflow-hidden aspect-video max-h-72 bg-slate-950">
          <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          <div class="absolute bottom-4 left-4 right-4">
            <span class="badge-pill mb-2 inline-block">${proj.category}</span>
            <h2 class="text-2xl lg:text-3xl font-extrabold text-white leading-tight">${proj.title}</h2>
          </div>
        </div>

        <!-- Overview -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span class="text-slate-400 block mb-1">DATASET:</span>
            <span class="text-cyan-300 font-semibold">${proj.dataset}</span>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span class="text-slate-400 block mb-1">ACCURACY / PERFORMANCE:</span>
            <span class="text-purple-300 font-semibold">${proj.accuracy}</span>
          </div>
        </div>

        <!-- Case Study Sections -->
        <div class="space-y-4 text-sm text-slate-300">
          <div>
            <h3 class="text-base font-bold text-white mb-1.5 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-cyan-400"></span> Problem Statement
            </h3>
            <p class="leading-relaxed text-slate-300">${proj.caseStudy.problemStatement}</p>
          </div>

          <div>
            <h3 class="text-base font-bold text-white mb-1.5 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-purple-400"></span> Solution & Methodology
            </h3>
            <p class="leading-relaxed text-slate-300">${proj.caseStudy.solution}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 class="text-xs font-semibold uppercase text-cyan-400">Data Preprocessing</h4>
              <p class="text-xs text-slate-300 leading-relaxed">${proj.caseStudy.dataPreprocessing}</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 class="text-xs font-semibold uppercase text-purple-400">Feature Engineering</h4>
              <p class="text-xs text-slate-300 leading-relaxed">${proj.caseStudy.featureEngineering}</p>
            </div>
          </div>

          <!-- Evaluation Visuals -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div id="modal-matrix-container"></div>
            <div id="modal-importance-container"></div>
          </div>

          <!-- Key Insights -->
          <div class="pt-2">
            <h3 class="text-base font-bold text-white mb-2">Key Results & Business Impact</h3>
            <ul class="space-y-2 text-xs">
              ${proj.caseStudy.keyInsights.map(insight => `
                <li class="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-emerald-300">
                  <svg class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${insight}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <!-- Tech Badges & Actions -->
        <div class="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div class="flex flex-wrap gap-1.5">
            ${proj.technologies.map(t => `<span class="px-2.5 py-1 text-xs rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono">${t}</span>`).join('')}
          </div>

          <div class="flex items-center gap-3">
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white flex items-center gap-2">
              <span>View GitHub</span>
            </a>
            ${proj.liveDemoUrl ? `
              <a href="${proj.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 text-xs font-semibold rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center gap-2">
                <span>Live Demo</span>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Render interactive charts inside modal
    if (PortfolioCharts) {
      PortfolioCharts.renderConfusionMatrix('modal-matrix-container');
      PortfolioCharts.renderFeatureImportance('modal-importance-container');
    }
  };

  function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });
  }
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const subject = document.getElementById('form-subject').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    // Simulate successful submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Sending...
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();
      showToast('Message sent successfully! Noori will respond soon.', 'success');
    }, 1200);
  });
}

function showToast(message, type = 'success') {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl shadow-2xl text-xs font-semibold transition-all duration-300 opacity-0 pointer-events-none transform translate-y-4';
    document.body.appendChild(toast);
  }

  if (type === 'success') {
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl shadow-2xl text-xs font-semibold bg-emerald-500 text-slate-950 border border-emerald-400 opacity-100 translate-y-0 transition-all duration-300';
  } else {
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl shadow-2xl text-xs font-semibold bg-rose-500 text-white border border-rose-400 opacity-100 translate-y-0 transition-all duration-300';
  }

  toast.innerText = message;

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4');
  }, 4000);
}

function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function setupBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function getIconSVG(name) {
  const icons = {
    'code': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>',
    'chart-bar': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>',
    'cpu': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>',
    'brain': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
    'database': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>',
    'wrench': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    'cloud': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 001-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"/></svg>',
    'brain-circuit': '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>',
    'cpu-sparkles': '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m11-16v4m-2-2h4m-2 14v4m-2-2h4M12 7a5 5 0 100 10 5 5 0 000-10z"/></svg>',
    'briefcase-check': '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    'chart-scatter': '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4v16"/></svg>',
    'shield-check': '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    'sparkles': '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m11-16v4m-2-2h4m-2 14v4m-2-2h4M12 7a5 5 0 100 10 5 5 0 000-10z"/></svg>'
  };

  return icons[name] || icons['code'];
}
