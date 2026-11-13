import { useState } from 'react';
import {
  Bot,
  Workflow,
  ClipboardCheck,
  Network,
  ArrowRight,
  Target,
  Clock,
  Layers,
  TrendingUp,
  Building2,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  Store,
  ChevronDown,
  Mail,
  FileText,
  Calendar,
  Database,
  Check,
} from 'lucide-react';
import { DesertRidgeHorizon } from '../components/BrandMark';
import { HeroWorkflowVisual } from '../components/HeroWorkflowVisual';
import { BeforeAfterWorkflow } from '../components/BeforeAfterWorkflow';
import { NavigateOptions, ServiceOption } from '../types';

interface HomePageProps {
  onNavigate: (opts: NavigateOptions) => void;
}

const SERVICES_OVERVIEW: {
  number: string;
  title: ServiceOption;
  sectionId: string;
  description: string;
  Icon: typeof Bot;
}[] = [
  {
    number: '01',
    title: 'AI Agents & Chatbots',
    sectionId: 'service-ai-agents',
    description:
      'Intelligent chatbots that handle customer inquiries, qualify leads, and provide automated assistance.',
    Icon: Bot,
  },
  {
    number: '02',
    title: 'AI Workflow Automation',
    sectionId: 'service-ai-workflows',
    description:
      'Automate repetitive business operations, data processing, notifications, and multi-step workflows.',
    Icon: Workflow,
  },
  {
    number: '03',
    title: 'Business Process Automation',
    sectionId: 'service-bpa',
    description:
      'Reduce manual work and streamline administrative and operational activities.',
    Icon: ClipboardCheck,
  },
  {
    number: '04',
    title: 'System Integration',
    sectionId: 'service-integration',
    description:
      'Connect business applications, CRM platforms, communication tools, and existing systems.',
    Icon: Network,
  },
];

const WHY_CHOOSE_ITEMS = [
  {
    title: 'Business-Focused Solutions',
    description: 'Automation designed around actual business requirements.',
    Icon: Target,
  },
  {
    title: 'Improved Efficiency',
    description: 'Reduce repetitive tasks and manual processes.',
    Icon: Clock,
  },
  {
    title: 'Seamless Integration',
    description: 'Connect existing applications and business tools.',
    Icon: Layers,
  },
  {
    title: 'Scalable Solutions',
    description: 'Build automation that can evolve with business needs.',
    Icon: TrendingUp,
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    description:
      'Understand your business processes and identify repetitive tasks.',
  },
  {
    step: '02',
    title: 'Analyze',
    description:
      'Find opportunities where automation can improve efficiency.',
  },
  {
    step: '03',
    title: 'Implement',
    description:
      'Develop and integrate suitable automation solutions.',
  },
  {
    step: '04',
    title: 'Optimize',
    description:
      'Test, refine, and improve automated workflows.',
  },
];

const INDUSTRIES = [
  {
    title: 'Real Estate',
    description:
      'Capture property inquiries automatically, qualify prospective buyers or renters, and route follow-up tasks to the right agent.',
    Icon: Building2,
  },
  {
    title: 'Healthcare & Clinics',
    description:
      'Streamline appointment reminders, digital patient intake routing, and routine administrative coordination.',
    Icon: Stethoscope,
  },
  {
    title: 'E-commerce & Retail',
    description:
      'Automate common order status responses, customer support triage, and internal order or supplier notifications.',
    Icon: ShoppingBag,
  },
  {
    title: 'Professional Services',
    description:
      'Simplify client onboarding, document collection, consultation scheduling, and recurring administrative workflows.',
    Icon: Briefcase,
  },
  {
    title: 'Education',
    description:
      'Organize admissions inquiries, automate enrollment checklists, and keep student communications timely and consistent.',
    Icon: GraduationCap,
  },
  {
    title: 'Small & Mid-Sized Businesses',
    description:
      'Eliminate repetitive spreadsheet entry and connect everyday email, calendar, invoicing, and CRM tools.',
    Icon: Store,
  },
];

const FAQS = [
  {
    question: 'What is business process automation?',
    answer:
      'Business process automation uses software and structured workflows to handle repetitive, rule-based tasks—such as copying form data into a spreadsheet, sending confirmation emails, or assigning follow-up reminders—so your team can focus on higher-value work.',
  },
  {
    question: 'How can AI automation help my business?',
    answer:
      'AI automation goes beyond basic triggers by reading unstructured messages, categorizing customer inquiries, drafting helpful responses, and extracting details from documents or emails before routing them into your existing tools.',
  },
  {
    question: 'Can automation integrate with my existing tools?',
    answer:
      'Yes. Most modern CRMs, email platforms, calendars, spreadsheets, and accounting tools support integrations or APIs. ArizoTek focuses on connecting the software your team already relies on rather than forcing you to replace it.',
  },
  {
    question: 'Do I need technical knowledge to use automation?',
    answer:
      'No. We design workflows to run quietly in the background and provide simple, clear ways for your team to review results or receive notifications without managing code or complex dashboards.',
  },
  {
    question: 'Can automation solutions be customized?',
    answer:
      'Yes. Every business handles inquiries, approvals, and customer communication slightly differently. We map your exact workflow first and tailor each automation step around your real operational needs.',
  },
  {
    question: 'How do I get started with ArizoTek?',
    answer:
      'Start by reaching out through our Contact Us page to schedule a consultation. We will walk through one or two repetitive bottlenecks in your business and outline practical automation options.',
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div>
      {/* A. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAF8F5] to-white border-b border-[#402015]/10">
        <DesertRidgeHorizon
          tone="light"
          className="absolute inset-x-0 bottom-0 h-44 w-full opacity-90"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-sm font-semibold text-[#D66A25]">
                ArizoTek · IT Automation for Small to Mid-Size Businesses
              </p>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.1] text-[#402015] text-balance">
                Make Your Business Work Smarter with AI Automation.
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-[#626262] max-w-xl">
                ArizoTek helps small and mid-sized businesses eliminate repetitive tasks, streamline operations, and improve productivity through intelligent automation solutions.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'services' })}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#D66A25] px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#BC581B] active:translate-y-[1px] transition-all duration-150 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#402015] focus-visible:ring-offset-2"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'contact', sectionId: 'contact-form' })}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#402015]/20 bg-white px-6 py-3.5 text-sm font-semibold text-[#402015] hover:border-[#D66A25] hover:text-[#D66A25] transition-colors duration-150 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D66A25]"
                >
                  <span>Let’s Talk Automation</span>
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="lg:col-span-6">
              <HeroWorkflowVisual />
            </div>
          </div>
        </div>
      </section>

      {/* B. AUTOMATION DEMONSTRATION SECTION */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <p className="text-sm font-semibold text-[#D66A25] mb-2">
              Workflow Comparison
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#402015] text-balance">
              See How Automation Transforms Everyday Business Tasks
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#626262]">
              Most growing businesses lose hours each week to copy-pasting inquiries, updating spreadsheets, and sending manual follow-ups. Compare how a typical customer request flows before and after automation.
            </p>
          </div>

          <BeforeAfterWorkflow />
        </div>
      </section>

      {/* C. SERVICES OVERVIEW */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] border-y border-[#402015]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#D66A25] mb-2">
                Core Capabilities
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#402015] text-balance">
                Smart Automation Solutions for Growing Businesses
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate({ page: 'services' })}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D66A25] hover:text-[#BC581B] transition-colors cursor-pointer whitespace-nowrap self-start md:self-auto"
            >
              <span>View All Service Details</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES_OVERVIEW.map((service) => {
              const Icon = service.Icon;
              return (
                <article
                  key={service.sectionId}
                  className="group rounded-2xl border border-[#402015]/10 bg-white p-7 sm:p-8 flex flex-col justify-between hover:border-[#D66A25]/50 hover:shadow-[0_14px_34px_-20px_rgba(64,32,21,0.18)] transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FAF8F5] border border-[#402015]/10 text-[#D66A25] group-hover:bg-[#D66A25] group-hover:text-white group-hover:border-[#D66A25] transition-colors">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-xs font-medium tabular-nums text-[#626262]">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#402015]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#626262]">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-7 pt-5 border-t border-[#402015]/8">
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate({
                          page: 'services',
                          sectionId: service.sectionId,
                        });
                      }}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#D66A25] hover:text-[#BC581B] transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight
                        className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* D. ABOUT ARIZOTEK */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-sm font-semibold text-[#D66A25]">
                About ArizoTek
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#402015] text-balance">
                Technology That Makes Business Simpler
              </h2>
              <p className="text-base leading-relaxed text-[#626262]">
                At ArizoTek, we help businesses identify operational challenges and transform repetitive processes into efficient automated workflows. Our focus is on practical technology solutions that save time, reduce manual effort, and allow businesses to focus on what matters most.
              </p>
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-[#FAF8F5] border border-[#402015]/10 p-4">
                  <p className="font-display text-sm font-bold text-[#402015]">
                    Practical Implementation
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-[#626262]">
                    Built around real daily tasks instead of unnecessary complexity.
                  </p>
                </div>
                <div className="rounded-xl bg-[#FAF8F5] border border-[#402015]/10 p-4">
                  <p className="font-display text-sm font-bold text-[#402015]">
                    Connected Operations
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-[#626262]">
                    Aligning your existing email, CRM, forms, and team notifications.
                  </p>
                </div>
              </div>
            </div>

            {/* Supporting Visual: Clean Connected Operations Diagram */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl border border-[#402015]/12 bg-[#FAF8F5] p-6 sm:p-8">
                <DesertRidgeHorizon
                  tone="light"
                  className="absolute inset-x-0 bottom-0 h-28 w-full opacity-80"
                />
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between gap-4 border-b border-[#402015]/10 pb-4">
                    <div>
                      <p className="text-xs font-semibold text-[#D66A25]">
                        Operational Architecture
                      </p>
                      <p className="font-display text-base font-bold text-[#402015]">
                        One Connected Workflow Hub
                      </p>
                    </div>
                  </div>

                  {/* Source Tools Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white border border-[#402015]/10 p-4 flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FAF8F5] text-[#D66A25]">
                        <Mail className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#402015]">Inbox & Forms</p>
                        <p className="text-[11px] text-[#626262]">Customer requests</p>
                      </div>
                    </div>

                    <div className="rounded-xl bg-white border border-[#402015]/10 p-4 flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FAF8F5] text-[#D66A25]">
                        <FileText className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#402015]">Documents</p>
                        <p className="text-[11px] text-[#626262]">Invoices & intake</p>
                      </div>
                    </div>

                    <div className="rounded-xl bg-white border border-[#402015]/10 p-4 flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FAF8F5] text-[#D66A25]">
                        <Database className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#402015]">CRM & Sheets</p>
                        <p className="text-[11px] text-[#626262]">Organized records</p>
                      </div>
                    </div>

                    <div className="rounded-xl bg-white border border-[#402015]/10 p-4 flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FAF8F5] text-[#D66A25]">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#402015]">Scheduling</p>
                        <p className="text-[11px] text-[#626262]">Tasks & follow-ups</p>
                      </div>
                    </div>
                  </div>

                  {/* Central ArizoTek Orchestration Bar */}
                  <div className="rounded-xl bg-[#402015] p-5 text-white">
                    <p className="text-xs font-semibold text-[#E9A04A]">
                      ArizoTek Automation Layer
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      Consistent routing, clean data sync, and reliable follow-through across your tools.
                    </p>
                    <ul className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-white/85">
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#E9A04A] shrink-0" aria-hidden="true" />
                        <span>Less manual entry</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#E9A04A] shrink-0" aria-hidden="true" />
                        <span>Faster responses</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#E9A04A] shrink-0" aria-hidden="true" />
                        <span>Clear visibility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E. WHY CHOOSE ARIZOTEK */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-y border-[#402015]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-[#D66A25] mb-2">
              Why Choose ArizoTek
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#402015] text-balance">
              Practical Automation Built Around Real Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_ITEMS.map((item) => {
              const Icon = item.Icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#402015]/10 bg-white p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D66A25]/10 text-[#D66A25] mb-5">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#402015]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#626262]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* F. HOW WE WORK */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-[#D66A25] mb-2">
              How We Work
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#402015] text-balance">
              A Clear Four-Step Process From Discovery to Optimization
            </h2>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((item, idx) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-[#402015]/10 bg-[#FAF8F5] p-6 sm:p-7"
              >
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#402015] font-mono text-sm font-semibold tabular-nums text-white">
                    {item.step}
                  </span>
                  {idx < PROCESS_STEPS.length - 1 && (
                    <ArrowRight
                      className="hidden lg:block w-4 h-4 text-[#D66A25]"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="font-display text-xl font-bold text-[#402015]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#626262]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* G. INDUSTRIES WE SUPPORT */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] border-y border-[#402015]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-[#D66A25] mb-2">
              Industries We Support
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#402015] text-balance">
              Automation for Different Business Needs
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#626262]">
              Every industry has recurring coordination, customer communication, and data-entry tasks that can be simplified with reliable workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((industry) => {
              const Icon = industry.Icon;
              return (
                <div
                  key={industry.title}
                  className="rounded-2xl border border-[#402015]/10 bg-white p-6 sm:p-7 hover:border-[#E9A04A] transition-colors"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAF8F5] border border-[#402015]/10 text-[#D66A25] mb-5">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#402015]">
                    {industry.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#626262]">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* H. FAQ SECTION */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-[#D66A25] mb-2">
              Frequently Asked Questions
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#402015] text-balance">
              Common Questions About Business Automation
            </h2>
          </div>

          <div className="divide-y divide-[#402015]/10 rounded-2xl border border-[#402015]/12 bg-white">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-[#FAF8F5]/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D66A25]"
                  >
                    <span className="font-display text-base sm:text-lg font-bold text-[#402015]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-[#D66A25] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-0 text-sm sm:text-[15px] leading-relaxed text-[#626262]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* I. FINAL CTA */}
      <section className="relative overflow-hidden bg-[#402015] py-16 sm:py-20 text-white">
        <DesertRidgeHorizon
          tone="dark"
          className="absolute inset-x-0 bottom-0 h-36 w-full"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Ready to Automate Your Business?
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/85 max-w-2xl mx-auto">
            Let’s identify the tasks taking up your valuable time and explore how automation can make your operations more efficient.
          </p>
          <div className="mt-8">
            <button
              type="button"
              onClick={() => onNavigate({ page: 'contact', sectionId: 'contact-form' })}
              className="inline-flex items-center gap-2 rounded-lg bg-[#D66A25] px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#BC581B] active:translate-y-[1px] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9A04A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#402015]"
            >
              <span>Contact ArizoTek</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
