/**
 * Projects Data & Case Study Configurations
 * Noori Fatema Hokayat - Data Analytics Portfolio
 */

const projectsData = [
  {
    id: 'sales-performance',
    title: 'Sales Performance Analytics Dashboard',
    category: 'Power BI',
    categoryLabel: 'Power BI / SQL',
    shortDescription: 'Enterprise sales intelligence solution consolidating cross-regional revenue streams, customer acquisition trends, and product margin performance.',
    tools: ['Power BI', 'SQL Server', 'Microsoft Excel', 'DAX'],
    imageGradient: 'from-cyan-900/40 via-blue-900/30 to-slate-900',
    iconClass: 'fa-chart-line',
    badgeText: 'Sales Analytics',
    
    // Case Study Detail Fields
    overview: 'Developed an interactive enterprise sales dashboard for a global retail & distribution organization. Consolidated raw transactional data spanning over 2.4M line items into a unified Power BI relational model.',
    businessProblem: 'The company suffered from fragmented sales data across 4 regional branches, leading to a 3-week delay in monthly revenue reporting and zero visibility into low-margin product lines.',
    objective: 'Create an automated, real-time executive dashboard to track revenue, gross margin %, regional growth, top-performing product categories, and sales rep performance.',
    dataset: '2.4 Million transactional rows spanning 3 years (2023-2025) across SQL Server relational tables (Orders, Customers, Products, Regions, Representatives).',
    toolsTech: 'SQL Server (Complex CTEs, Window Functions), Power BI (DAX Measures, Data Modeling), Power Query (ETL), Microsoft Excel.',
    dataPreparation: 'Cleaned null entries, removed duplicate transactions, standard currency conversions across multi-region transactions, and created custom date tables with fiscal calendar hierarchies.',
    analysisProcess: 'Formulated advanced DAX measures for Year-Over-Year (YoY) revenue growth, Moving 12-Month Averages, Dynamic Pareto (80/20) Product Classifications, and Sales Representative Commission Tiers.',
    
    kpis: [
      { label: 'Total Revenue', value: '$4.82M', growth: '+18.4% YoY', icon: 'fa-dollar-sign' },
      { label: 'Avg Order Value', value: '$248.50', growth: '+6.2% YoY', icon: 'fa-shopping-bag' },
      { label: 'Gross Margin', value: '42.8%', growth: '+3.5% Target', icon: 'fa-percentage' },
      { label: 'Reporting Time', value: 'Instant', growth: 'Reduced by 95%', icon: 'fa-clock' }
    ],

    chartConfig: {
      type: 'line',
      title: 'Monthly Revenue vs Target Trend ($ USD)',
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Actual Revenue ($K)',
          data: [320, 350, 410, 380, 450, 490, 520, 480, 560, 610, 670, 720],
          borderColor: '#06b6d4',
          backgroundColor: 'rgba(6, 182, 212, 0.15)',
          fill: true,
          tension: 0.4
        },
        {
          label: 'Revenue Target ($K)',
          data: [300, 320, 350, 370, 400, 420, 450, 460, 500, 530, 580, 620],
          borderColor: '#8b5cf6',
          borderDash: [5, 5],
          fill: false,
          tension: 0.4
        }
      ]
    },

    keyInsights: [
      'Top 15% of premium product SKUs accounted for 64% of total net profits.',
      'Q4 holiday sales spiked by 34%, driven primarily by regional online campaign conversions.',
      'Identified 3 underperforming sales territories where discount rates exceeded historical profitability thresholds.'
    ],
    businessRecommendations: [
      'Reallocate marketing budget toward high-margin product bundles identified in Pareto analysis.',
      'Implement strict approval workflows for discount requests exceeding 12% in Western region sales.',
      'Automate weekly sales summary email alerts to regional managers directly via Power BI Service.'
    ],
    outcome: 'Streamlined executive decision-making, reduced monthly reporting latency from 21 days to zero, and unlocked an estimated $340,000 in incremental profit margins.'
  },

  {
    id: 'customer-churn',
    title: 'Customer Churn Analysis & Risk Modeling',
    category: 'Python',
    categoryLabel: 'Python / ML / SQL',
    shortDescription: 'Diagnostic data analysis and churn risk scoring model pinpointing customer friction points and retention opportunities for subscription SaaS services.',
    tools: ['Python', 'Pandas', 'SQL', 'Seaborn', 'Power BI'],
    imageGradient: 'from-violet-900/40 via-purple-900/30 to-slate-900',
    iconClass: 'fa-users-slash',
    badgeText: 'Predictive Analytics',

    overview: 'Executed an end-to-end customer churn diagnosis for a digital subscription platform with 85,000 active subscribers, identifying primary churn drivers and building risk profiles.',
    businessProblem: 'Annual customer churn rose to 14.2%, resulting in $1.2M lost recurring revenue without actionable insight into why customers were canceling.',
    objective: 'Segment customer cohorts, analyze behavioral indicators of churn, build predictive risk tiers, and formulate targeted retention strategies.',
    dataset: '85,000 anonymized customer profiles containing demographics, billing history, support tickets, app usage telemetry, and contract durations.',
    toolsTech: 'Python (Pandas, NumPy, Scikit-Learn for Logistic Regression/Random Forest, Matplotlib, Seaborn), PostgreSQL, Power BI.',
    dataPreparation: 'Handled missing usage logs, normalized numerical features, encoded categorical variables (contract type, payment method), and performed SMOTE oversampling for class balancing.',
    analysisProcess: 'Conducted Exploratory Data Analysis (EDA) uncovering non-linear relationships between customer service ticket frequency, onboarding completion rates, and churn probability.',

    kpis: [
      { label: 'Baseline Churn', value: '14.2%', growth: '-4.1% Post-Action', icon: 'fa-user-minus' },
      { label: 'Analyzed Cohort', value: '85,000', growth: 'Subscribers', icon: 'fa-users' },
      { label: 'Retention Rate', value: '89.9%', growth: '+3.8% Boost', icon: 'fa-user-check' },
      { label: 'At-Risk Revenue Saved', value: '$420K', growth: 'Annualized', icon: 'fa-shield-alt' }
    ],

    chartConfig: {
      type: 'bar',
      title: 'Churn Rate by Customer Tenure & Contract Type (%)',
      labels: ['0-3 Months', '4-6 Months', '7-12 Months', '1-2 Years', '2+ Years'],
      datasets: [
        {
          label: 'Month-to-Month Contract',
          data: [42.5, 31.2, 22.8, 14.5, 8.2],
          backgroundColor: '#ef4444'
        },
        {
          label: 'One-Year Contract',
          data: [18.2, 12.4, 8.5, 5.1, 2.9],
          backgroundColor: '#3b82f6'
        },
        {
          label: 'Two-Year Contract',
          data: [6.1, 4.2, 2.8, 1.9, 0.8],
          backgroundColor: '#10b981'
        }
      ]
    },

    keyInsights: [
      'Month-to-month contract holders were 4.8x more likely to churn during their first 90 days compared to annual plan subscribers.',
      'Customers logging more than 3 support tickets regarding onboarding had an 68% churn rate within 60 days.',
      'Electronic check payment method correlated with 32% higher churn due to payment failure friction.'
    ],
    businessRecommendations: [
      'Introduce a discounted annual contract incentive during customer onboarding.',
      'Establish a proactive customer success intervention trigger when a account submits 2+ support tickets in 30 days.',
      'Automate credit card retry logic and incentivize auto-pay setup with a one-time $10 account credit.'
    ],
    outcome: 'Successfully reduced overall churn rate from 14.2% to 10.1%, saving approximately $420,000 in ARR during the first two quarters of implementation.'
  },

  {
    id: 'ecommerce-analytics',
    title: 'E-Commerce Customer Behavior & Cohort Dashboard',
    category: 'Power BI',
    categoryLabel: 'Power BI / SQL',
    shortDescription: 'Comprehensive customer lifetime value (CLV), purchase funnel conversion, and RFM segmentation matrix for an omnichannel e-commerce store.',
    tools: ['Power BI', 'SQL', 'Microsoft Excel', 'DAX'],
    imageGradient: 'from-emerald-900/40 via-teal-900/30 to-slate-900',
    iconClass: 'fa-shopping-cart',
    badgeText: 'E-Commerce Intelligence',

    overview: 'Built an advanced customer analytics suite analyzing multi-channel shopping behaviors, conversion funnels, repeat purchase cadence, and RFM (Recency, Frequency, Monetary) customer segments.',
    businessProblem: 'Marketing teams lacked clarity on customer acquisition cost (CAC) vs. Customer Lifetime Value (CLV) across organic, paid search, and social media ad channels.',
    objective: 'Deliver actionable customer segmentation, calculate cohort retention, optimize funnel drop-offs, and track product cross-selling metrics.',
    dataset: '1.8 Million customer transactions, website event logs, and marketing campaign attribution datasets spanning 24 months.',
    toolsTech: 'MySQL, Power BI (DAX, Custom Visualizations), Power Query, Microsoft Excel.',
    dataPreparation: 'Aggregated website session events with completed orders, mapped UTM tracking parameters, and created RFM scoring algorithms in SQL.',
    analysisProcess: 'Calculated 12-month rolling CLV per customer cohort, mapped cart abandonment drop-off rates by checkout step, and evaluated product co-purchase frequencies.',

    kpis: [
      { label: 'Avg Order Value', value: '$84.20', growth: '+12.5% YoY', icon: 'fa-tag' },
      { label: 'Cart Conversion', value: '3.42%', growth: '+0.8% YoY', icon: 'fa-filter' },
      { label: 'Repeat Rate', value: '38.6%', growth: '+5.4% YoY', icon: 'fa-redo' },
      { label: 'Customer LTV', value: '$345.00', growth: '+16.2% YoY', icon: 'fa-gem' }
    ],

    chartConfig: {
      type: 'doughnut',
      title: 'Customer Segmentation by RFM Matrix (%)',
      labels: ['Champions (High Value)', 'Loyal Customers', 'Potential Loyalists', 'At Risk', 'Lost Customers'],
      datasets: [
        {
          data: [22, 28, 24, 16, 10],
          backgroundColor: ['#06b6d4', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444'],
          borderWidth: 0
        }
      ]
    },

    keyInsights: [
      'Champions and Loyal Customers (top 50% RFM score) generated 78% of overall gross profit.',
      'Mobile checkout funnel experienced a 24% higher drop-off rate at the payment step compared to desktop users.',
      'Email re-engagement campaigns targeting "At Risk" customers yielded a 14% win-back conversion rate.'
    ],
    businessRecommendations: [
      'Streamline mobile payment experience by adding one-click Apple Pay / Google Pay options.',
      'Design tailored VIP reward incentives exclusively for the Champions customer segment.',
      'Automate automated win-back email workflows 45 days after last purchase for At-Risk customers.'
    ],
    outcome: 'Increased repeat customer purchase rate by 5.4% and boosted mobile checkout conversion by 1.1%, generating an estimated $280K in new revenue.'
  },

  {
    id: 'financial-performance',
    title: 'Financial Performance & Expense Analytics',
    category: 'Business Intelligence',
    categoryLabel: 'Power BI / Excel',
    shortDescription: 'Executive P&L reporting system providing deep-dive budgeting variance analysis, operational expense allocation, and cash flow forecasting.',
    tools: ['Power BI', 'DAX', 'Microsoft Excel', 'Power Query'],
    imageGradient: 'from-amber-900/40 via-yellow-900/30 to-slate-900',
    iconClass: 'fa-file-invoice-dollar',
    badgeText: 'Financial BI',

    overview: 'Designed a dynamic corporate financial dashboard automating Profit & Loss (P&L) statements, OPEX vs. CAPEX variance analysis, and departmental budget tracking.',
    businessProblem: 'Finance department spent 40+ hours per month manually consolidating Excel spreadsheets from 6 business units, resulting in frequent formatting errors and delayed reporting.',
    objective: 'Automate P&L generation, provide interactive drill-downs from high-level EBITDA to General Ledger accounts, and track budget variances in real time.',
    dataset: 'General Ledger transactions, Trial Balances, Departmental Budget spreadsheets, and Forecast revisions over 4 fiscal years.',
    toolsTech: 'Power BI (Advanced DAX Financial Matrices, Time Intelligence functions), Power Query (M Language for custom fiscal balance logic), Excel.',
    dataPreparation: 'Standardized chart of accounts across legacy ERP systems, mapped parent-child account hierarchies, and automated currency translation.',
    analysisProcess: 'Implemented matrix-level DAX calculations for Net Profit Margin, Operating Expense Ratios, Working Capital, and Actual vs. Budget Variance percentages.',

    kpis: [
      { label: 'Net Profit Margin', value: '24.5%', growth: '+2.1% vs Budget', icon: 'fa-chart-pie' },
      { label: 'OPEX Savings', value: '$185K', growth: 'Identified', icon: 'fa-piggy-bank' },
      { label: 'EBITDA', value: '$1.42M', growth: '+11.8% YoY', icon: 'fa-coins' },
      { label: 'Audit Cycle', value: '2 Days', growth: 'Reduced from 10', icon: 'fa-check-double' }
    ],

    chartConfig: {
      type: 'bar',
      title: 'Departmental Budget vs Actual Expenses ($K)',
      labels: ['Engineering', 'Marketing', 'Sales', 'Operations', 'HR & Admin', 'IT & Support'],
      datasets: [
        {
          label: 'Budget Allocated ($K)',
          data: [450, 380, 520, 290, 180, 240],
          backgroundColor: '#3b82f6'
        },
        {
          label: 'Actual Spend ($K)',
          data: [425, 410, 495, 275, 175, 260],
          backgroundColor: '#06b6d4'
        }
      ]
    },

    keyInsights: [
      'Marketing department exceeded Q2 budget by 7.9% due to unforecasted digital media acquisition costs.',
      'Identified $185,000 in duplicate vendor SaaS subscriptions across IT and Operations departments.',
      'Working capital cycle improved by 8 days following automated accounts receivable aging alerts.'
    ],
    businessRecommendations: [
      'Consolidate departmental software licensing into centralized IT vendor contracts.',
      'Implement real-time budget threshold alerts when department spend hits 85% of monthly allocation.',
      'Adopt automated financial dashboard for monthly executive board meetings.'
    ],
    outcome: 'Eliminated 40 hours of manual monthly report preparation and uncovered $185,000 in immediate vendor cost reduction opportunities.'
  },

  {
    id: 'hr-analytics',
    title: 'HR Workforce Analytics & Attrition Insights',
    category: 'Business Intelligence',
    categoryLabel: 'Power BI / SQL',
    shortDescription: 'Strategic workforce intelligence platform analyzing employee attrition patterns, performance benchmarks, and compensation equity metrics.',
    tools: ['Power BI', 'SQL Server', 'Excel', 'DAX'],
    imageGradient: 'from-pink-900/40 via-rose-900/30 to-slate-900',
    iconClass: 'fa-user-tie',
    badgeText: 'Workforce Analytics',

    overview: 'Built a human resources analytics dashboard for a multi-location enterprise to monitor employee headcount dynamics, voluntary turnover drivers, and performance ratings.',
    businessProblem: 'High voluntary employee turnover (18.6% annual) in key technical roles increased recruiting costs and slowed project delivery deadlines.',
    objective: 'Identify key risk factors leading to employee resignations, analyze salary equity, track promotion velocity, and optimize recruitment pipelines.',
    dataset: 'HRIS database records covering 4,200 current and past employees, exit interview survey scores, performance reviews, and compensation bands.',
    toolsTech: 'SQL Server, Power BI, Power Query, Microsoft Excel.',
    dataPreparation: 'Anonymized sensitive PII, mapped job family hierarchies, calculated tenure lengths, and merged exit interview survey ratings.',
    analysisProcess: 'Performed survival rate analysis across employee tenure brackets, correlated commute times and overtime hours with turnover, and evaluated pay ratio equity.',

    kpis: [
      { label: 'Total Headcount', value: '3,850', growth: '+4.2% YoY', icon: 'fa-id-badge' },
      { label: 'Voluntary Turnover', value: '11.8%', growth: 'Down from 18.6%', icon: 'fa-walking' },
      { label: 'Avg Tenure', value: '3.8 Yrs', growth: '+0.6 Yrs', icon: 'fa-user-clock' },
      { label: 'Engagement Score', value: '8.4 / 10', growth: '+1.2 Pts', icon: 'fa-smile' }
    ],

    chartConfig: {
      type: 'line',
      title: 'Employee Turnover Rate by Department (%)',
      labels: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025'],
      datasets: [
        {
          label: 'Technology & Engineering',
          data: [21.4, 19.8, 17.2, 14.5, 12.8, 10.5],
          borderColor: '#ef4444',
          tension: 0.3
        },
        {
          label: 'Customer Operations',
          data: [16.5, 15.2, 14.8, 13.9, 12.4, 11.2],
          borderColor: '#f59e0b',
          tension: 0.3
        },
        {
          label: 'Sales & Marketing',
          data: [14.2, 13.5, 12.1, 11.4, 10.8, 9.6],
          borderColor: '#06b6d4',
          tension: 0.3
        }
      ]
    },

    keyInsights: [
      'Employees who had not received a salary adjustment or promotion within 24 months showed a 3.2x higher resignation rate.',
      'Engineering turnover concentrated in mid-level developers with 2-3 years company tenure.',
      'Hybrid work flexibility ratings directly correlated with a 45% reduction in voluntary exit requests.'
    ],
    businessRecommendations: [
      'Establish bi-annual salary benchmark reviews for mid-tier engineering roles.',
      'Develop formal career progression pathways and mentorship programs for employees hitting the 2-year tenure mark.',
      'Formalize flexible hybrid work policies across eligible operational departments.'
    ],
    outcome: 'Helped reduce voluntary employee turnover from 18.6% to 11.8% over 18 months, saving estimated recruitment and onboarding costs of $650,000.'
  },

  {
    id: 'marketing-campaign',
    title: 'Multi-Channel Marketing ROI & Attribution Analysis',
    category: 'Tableau',
    categoryLabel: 'Python / Tableau',
    shortDescription: 'Multi-touch attribution analysis measuring ROI across paid search, social media, content marketing, and email acquisition channels.',
    tools: ['Python', 'Pandas', 'Tableau', 'SQL'],
    imageGradient: 'from-indigo-900/40 via-blue-900/30 to-slate-900',
    iconClass: 'fa-bullhorn',
    badgeText: 'Marketing Analytics',

    overview: 'Delivered an advanced marketing analytics dashboard evaluating campaign performance, lead funnel velocity, Customer Acquisition Cost (CAC), and Return on Ad Spend (ROAS).',
    businessProblem: 'Marketing spend was distributed evenly across 5 digital channels without clarity on which channels generated qualified pipeline vs. non-converting traffic.',
    objective: 'Implement multi-touch attribution (First-Touch, Last-Touch, Linear), measure channel-specific CAC, and optimize ad budget allocation.',
    dataset: '500,000 ad impression events, click streams, lead capture records, and CRM deal conversion histories spanning 12 active ad campaigns.',
    toolsTech: 'Python (Pandas data manipulation, SciPy statistical testing), PostgreSQL, Tableau Public / Desktop.',
    dataPreparation: 'Cleaned UTM parameter anomalies, merged Google Ads / Meta Ads API exports with CRM sales records, and built linear attribution models.',
    analysisProcess: 'Calculated Cost Per Acquisition (CPA) per channel, benchmarked ad creative CTRs, and tracked lead-to-opportunity velocity.',

    kpis: [
      { label: 'Overall ROAS', value: '4.25x', growth: '+1.1x Improvement', icon: 'fa-bullseye' },
      { label: 'Avg CAC', value: '$142.00', growth: '-18.5% Reduction', icon: 'fa-hand-holding-usd' },
      { label: 'Marketing Qualified Leads', value: '14,800', growth: '+28.4% YoY', icon: 'fa-filter' },
      { label: 'Ad Budget Saved', value: '$120K', growth: 'Reallocated', icon: 'fa-funnel-dollar' }
    ],

    chartConfig: {
      type: 'bar',
      title: 'Customer Acquisition Cost (CAC) vs ROAS by Channel',
      labels: ['Paid Search', 'Organic Search', 'LinkedIn Ads', 'Meta Ads', 'Email Marketing'],
      datasets: [
        {
          label: 'CAC ($ USD - Lower is Better)',
          data: [165, 45, 210, 185, 32],
          backgroundColor: '#8b5cf6',
          yAxisID: 'y'
        },
        {
          label: 'ROAS (Multiplier - Higher is Better)',
          data: [3.8, 6.2, 2.4, 2.9, 8.5],
          backgroundColor: '#06b6d4',
          yAxisID: 'y1'
        }
      ]
    },

    keyInsights: [
      'LinkedIn Ads had the highest CAC ($210) and lowest ROAS (2.4x) for general awareness campaigns.',
      'Email marketing and organic search content yielded the highest ROAS (8.5x and 6.2x respectively).',
      'Paid Search campaigns targeting branded keywords converted 3x faster than non-branded search terms.'
    ],
    businessRecommendations: [
      'Shift 30% of underperforming LinkedIn awareness ad spend into high-converting Paid Search and Email nurture campaigns.',
      'Refine LinkedIn targeting strictly to senior decision-makers for high-ticket enterprise solutions.',
      'Invest in SEO content creation to scale organic lead acquisition capabilities.'
    ],
    outcome: 'Improved overall Return on Ad Spend from 3.15x to 4.25x while decreasing customer acquisition cost by 18.5%, generating $310K additional sales pipeline.'
  }
];
