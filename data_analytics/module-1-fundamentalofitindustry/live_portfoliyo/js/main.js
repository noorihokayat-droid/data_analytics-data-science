/**
 * Main Application Controller & UI Logic
 * Noori Fatema Hokayat - Data Analytics Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileDrawer();
  initSkillsFilter();
  initProjectsGrid();
  initCaseStudyModal();
  initContactForm();
  initStatCounters();
  initAOS();
});

/**
 * 1. Navbar Glassmorphism on Scroll & Active Section Observer
 */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('shadow-lg', 'bg-slate-950/80', 'border-b', 'border-slate-800/80');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('shadow-lg', 'bg-slate-950/80', 'border-b', 'border-slate-800/80');
      navbar.classList.add('bg-transparent');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // Active Navigation Link Highlight
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    const scrollY = window.scrollY;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('text-cyan-400', 'font-semibold');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-cyan-400', 'font-semibold');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav);
}

/**
 * 2. Mobile Drawer Navigation Toggle
 */
function initMobileDrawer() {
  const openBtn = document.getElementById('mobileMenuOpen');
  const closeBtn = document.getElementById('mobileMenuClose');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (!openBtn || !drawer || !backdrop) return;

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    openBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    openBtn.setAttribute('aria-expanded', 'false');
  }

  openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/**
 * 3. Skills Matrix Category Filter
 */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillCategories = document.querySelectorAll('.skill-category-group');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-cyan-500', 'text-slate-950', 'shadow-lg', 'shadow-cyan-500/25');
        b.classList.add('bg-slate-900/60', 'text-slate-300', 'hover:bg-slate-800');
      });

      btn.classList.remove('bg-slate-900/60', 'text-slate-300', 'hover:bg-slate-800');
      btn.classList.add('bg-cyan-500', 'text-slate-950', 'shadow-lg', 'shadow-cyan-500/25');

      const filter = btn.dataset.filter;

      skillCategories.forEach(group => {
        if (filter === 'all' || group.dataset.category === filter) {
          group.style.display = 'block';
          group.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          group.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 4. Projects Grid Filtering & Rendering
 */
let currentFilteredCategory = 'all';

function initProjectsGrid() {
  const gridContainer = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.project-filter-btn');

  if (!gridContainer || typeof projectsData === 'undefined') return;

  renderProjects(projectsData);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-cyan-500', 'text-slate-950', 'shadow-cyan-500/25');
        b.classList.add('bg-slate-900/60', 'text-slate-300', 'hover:bg-slate-800');
      });

      btn.classList.remove('bg-slate-900/60', 'text-slate-300', 'hover:bg-slate-800');
      btn.classList.add('bg-cyan-500', 'text-slate-950', 'shadow-cyan-500/25');

      const category = btn.dataset.category;
      currentFilteredCategory = category;

      if (category === 'all') {
        renderProjects(projectsData);
      } else {
        const filtered = projectsData.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
        renderProjects(filtered);
      }
    });
  });
}

function renderProjects(projects) {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  if (projects.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 text-slate-400">
        <i class="fas fa-search text-3xl mb-3 text-cyan-400"></i>
        <p>No projects found in this category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = projects.map(p => `
    <div class="glass-card rounded-2xl overflow-hidden flex flex-col h-full border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300" data-aos="fade-up">
      <!-- Card Banner Visual -->
      <div class="h-48 bg-gradient-to-br ${p.imageGradient} relative p-6 flex flex-col justify-between overflow-hidden group">
        <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
        <div class="flex justify-between items-start z-10">
          <span class="px-3 py-1 bg-slate-950/70 backdrop-blur-md rounded-full text-xs font-semibold text-cyan-400 border border-cyan-500/30">
            ${p.badgeText}
          </span>
          <span class="w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 flex items-center justify-center text-cyan-400">
            <i class="fas ${p.iconClass}"></i>
          </span>
        </div>
        <div class="z-10">
          <span class="text-xs font-medium text-slate-400 block">${p.categoryLabel}</span>
          <h3 class="text-xl font-bold text-white font-heading mt-1 line-clamp-1">${p.title}</h3>
        </div>
      </div>

      <!-- Card Content -->
      <div class="p-6 flex-1 flex flex-col justify-between space-y-4 bg-slate-950/40">
        <div class="space-y-3">
          <p class="text-slate-300 text-sm leading-relaxed">${p.shortDescription}</p>
          
          <div>
            <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">Tools Used:</span>
            <div class="flex flex-wrap gap-1.5">
              ${p.tools.map(tool => `
                <span class="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800">
                  ${tool}
                </span>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <span class="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
            <i class="fas fa-check-circle"></i> Case Study Ready
          </span>
          <button onclick="openCaseStudyModal('${p.id}')" class="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold rounded-lg text-xs transition-all shadow-md shadow-cyan-500/20 flex items-center gap-2 cursor-pointer">
            <span>View Case Study</span>
            <i class="fas fa-arrow-right text-xs"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * 5. Case Study Modal Manager & Navigation
 */
let currentModalProjectId = null;

function initCaseStudyModal() {
  const modal = document.getElementById('caseStudyModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const prevBtn = document.getElementById('modalPrevBtn');
  const nextBtn = document.getElementById('modalNextBtn');

  if (!modal) return;

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    currentModalProjectId = null;
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => navigateModalProject(-1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => navigateModalProject(1));
  }
}

function openCaseStudyModal(projectId) {
  const modal = document.getElementById('caseStudyModal');
  const project = projectsData.find(p => p.id === projectId);

  if (!modal || !project) return;

  currentModalProjectId = projectId;
  populateModalData(project);

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Render chart inside modal after container opens
  setTimeout(() => {
    if (typeof renderModalChart === 'function' && project.chartConfig) {
      renderModalChart(project.chartConfig);
    }
  }, 100);
}

function navigateModalProject(direction) {
  if (!currentModalProjectId) return;
  const currentIndex = projectsData.findIndex(p => p.id === currentModalProjectId);
  if (currentIndex === -1) return;

  let nextIndex = currentIndex + direction;
  if (nextIndex < 0) nextIndex = projectsData.length - 1;
  if (nextIndex >= projectsData.length) nextIndex = 0;

  const nextProject = projectsData[nextIndex];
  openCaseStudyModal(nextProject.id);
}

function populateModalData(p) {
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalBadge').textContent = p.badgeText;
  document.getElementById('modalOverview').textContent = p.overview;
  document.getElementById('modalProblem').textContent = p.businessProblem;
  document.getElementById('modalObjective').textContent = p.objective;
  document.getElementById('modalDataset').textContent = p.dataset;
  document.getElementById('modalToolsTech').textContent = p.toolsTech;
  document.getElementById('modalDataPrep').textContent = p.dataPreparation;
  document.getElementById('modalAnalysisProcess').textContent = p.analysisProcess;
  document.getElementById('modalOutcome').textContent = p.outcome;

  // Render KPIs
  const kpiContainer = document.getElementById('modalKpiGrid');
  if (kpiContainer) {
    kpiContainer.innerHTML = p.kpis.map(kpi => `
      <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
        <div class="flex items-center justify-between text-slate-400 text-xs mb-1">
          <span>${kpi.label}</span>
          <i class="fas ${kpi.icon} text-cyan-400"></i>
        </div>
        <div class="text-2xl font-bold text-white font-heading">${kpi.value}</div>
        <div class="text-xs font-medium text-emerald-400 mt-1">${kpi.growth}</div>
      </div>
    `).join('');
  }

  // Render Insights
  const insightsContainer = document.getElementById('modalInsightsList');
  if (insightsContainer) {
    insightsContainer.innerHTML = p.keyInsights.map(item => `
      <li class="flex items-start gap-2.5 text-slate-300 text-sm">
        <i class="fas fa-check-circle text-cyan-400 mt-1 text-xs shrink-0"></i>
        <span>${item}</span>
      </li>
    `).join('');
  }

  // Render Recommendations
  const recsContainer = document.getElementById('modalRecsList');
  if (recsContainer) {
    recsContainer.innerHTML = p.businessRecommendations.map(item => `
      <li class="flex items-start gap-2.5 text-slate-300 text-sm">
        <i class="fas fa-lightbulb text-violet-400 mt-1 text-xs shrink-0"></i>
        <span>${item}</span>
      </li>
    `).join('');
  }
}

/**
 * 6. Contact Form Validation & Toast Notification
 */
function initContactForm() {
  const form = document.getElementById('portfolioContactForm');
  const toast = document.getElementById('contactToast');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    // Success simulation
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending...`;

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      showToast('Thank you! Your message has been sent successfully.', 'success');
    }, 1200);
  });
}

function showToast(message, type = 'success') {
  const toast = document.getElementById('contactToast');
  if (!toast) return;

  const bgClass = type === 'success' ? 'bg-slate-900 border-cyan-500 text-cyan-300' : 'bg-slate-900 border-red-500 text-red-300';
  const iconClass = type === 'success' ? 'fa-check-circle text-cyan-400' : 'fa-exclamation-triangle text-red-400';

  toast.className = `fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3.5 rounded-xl border shadow-2xl backdrop-blur-md flex items-center gap-3 transition-all duration-300 ${bgClass}`;
  toast.innerHTML = `<i class="fas ${iconClass} text-lg"></i> <span class="text-sm font-medium">${message}</span>`;

  toast.style.opacity = '1';
  toast.style.transform = 'translate(-50%, 0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translate(-50%, 20px)';
  }, 4000);
}

/**
 * 7. Stat Counter Animation on Scroll
 */
function initStatCounters() {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.dataset.target, 10);
        const prefix = counter.dataset.prefix || '';
        const suffix = counter.dataset.suffix || '';
        let count = 0;
        const duration = 1500;
        const increment = target / (duration / 16);

        const updateCount = () => {
          count += increment;
          if (count < target) {
            counter.textContent = `${prefix}${Math.ceil(count)}${suffix}`;
            requestAnimationFrame(updateCount);
          } else {
            counter.textContent = `${prefix}${target}${suffix}`;
          }
        };

        updateCount();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/**
 * 8. AOS Animation Library Initializer
 */
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      disable: window.innerWidth < 768
    });
  }
}
