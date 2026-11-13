import {
  Bot,
  Workflow,
  ClipboardCheck,
  Network,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  FileText,
  Database,
  Mail,
  Send,
  Inbox,
  Cpu,
  Cog,
  Zap,
  Check,
} from 'lucide-react';
import { DesertRidgeHorizon } from '../components/BrandMark';
import { NavigateOptions, ServiceOption } from '../types';

interface ServicesPageProps {
  onNavigate: (opts: NavigateOptions) => void;
}

const HOW_IT_WORKS_STAGES = [
  {
    stage: '01',
    title: 'Input',
    description:
      'A form submission, email, customer message, document, or schedule trigger starts the workflow.',
    Icon: Inbox,
  },
  {
    stage: '02',
    title: 'AI Analysis',
    description:
      'AI reads context, extracts structured fields, and classifies what needs attention.',
    Icon: Cpu,
  },
  {
    stage: '03',
    title: 'Automated Processing',
    description:
      'Business rules format data, check records, and prepare the next operational steps.',
    Icon: Cog,
  },
  {
    stage: '04',
    title: 'Action',
    description:
      'Updates are synced to your CRM, emails are sent, and team tasks are created automatically.',
    Icon: Zap,
  },
  {
    stage: '05',
    title: 'Result',
    description:
      'Consistent, timely execution without manual copy-pasting or forgotten follow-ups.',
    Icon: Check,
  },
];

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDiscuss = (service: ServiceOption) => {
    onNavigate({
      page: 'contact',
      sectionId: 'contact-form',
      preselectedService: service,
    });
  };

  return (
    <div>
      {/* A. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAF8F5] to-white border-b border-[#402015]/10">
        <DesertRidgeHorizon
          tone="light"
          className="absolute inset-x-0 bottom-0 h-36 w-full opacity-85"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#D66A25] mb-3">
              ArizoTek Services · Practical Automation Capabilities
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.12] text-[#402015] text-balance">
              Automation Solutions Designed Around Your Business
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#626262] max-w-2xl">
              From intelligent AI assistants to automated business workflows, we help businesses simplify operations and work more efficiently.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  onNavigate({ page: 'contact', sectionId: 'contact-form' })
                }
                className="inline-flex items-center gap-2 rounded-lg bg-[#D66A25] px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#BC581B] transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#402015] focus-visible:ring-offset-2"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {/* Quick Section Jump Links */}
            <div className="mt-10 pt-6 border-t border-[#402015]/10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <span className="font-semibold text-[#402015]">Explore:</span>
              <button
                type="button"
                onClick={() => scrollToSection('service-ai-agents')}
                className="font-medium text-[#626262] hover:text-[#D66A25] transition-colors cursor-pointer"
              >
                01. AI Agents & Chatbots
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('service-ai-workflows')}
                className="font-medium text-[#626262] hover:text-[#D66A25] transition-colors cursor-pointer"
              >
                02. AI Workflow Automation
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('service-bpa')}
                className="font-medium text-[#626262] hover:text-[#D66A25] transition-colors cursor-pointer"
              >
                03. Business Process Automation
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('service-integration')}
                className="font-medium text-[#626262] hover:text-[#D66A25] transition-colors cursor-pointer"
              >
                04. System Integration
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* B. DETAILED SERVICES */}
      {/* Service 1: AI Agents & Chatbots */}
      <section
        id="service-ai-agents"
        className="py-16 sm:py-20 bg-white scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D66A25]/10 text-[#D66A25]">
                  <Bot className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="font-mono text-xs font-semibold text-[#D66A25]">
                  01 · Customer & Lead Assistance
                </span>
              </div>

              <h2 className="font-display text-3xl font-bold tracking-tight text-[#402015]">
                AI Agents & Chatbots
              </h2>
              <p className="text-base leading-relaxed text-[#626262]">
                Provide prompt, helpful responses to visitor questions around the clock while automatically capturing and qualifying inquiries for your team.
              </p>

              <ul className="space-y-3 pt-1">
                {[
                  'Customer support automation.',
                  'Lead generation and qualification.',
                  'Automated customer responses.',
                  'Website and messaging-platform chatbots.',
                  'Knowledge-base-powered AI assistants.',
                ].map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-sm sm:text-[15px] text-[#402015]">
                    <CheckCircle2
                      className="w-5 h-5 text-[#D66A25] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleDiscuss('AI Agents & Chatbots')}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#D66A25] px-5 py-3 text-sm font-semibold text-white hover:bg-[#BC581B] transition-colors cursor-pointer"
                >
                  <span>Discuss This Solution</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Distinct Visual Schematic for Service 1 */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-[#402015]/12 bg-[#FAF8F5] p-6 sm:p-8 space-y-4">
                <p className="text-xs font-semibold text-[#D66A25]">
                  Example Assistant Flow
                </p>
                <div className="space-y-3">
                  <div className="rounded-xl bg-white border border-[#402015]/10 p-4 flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-[#402015] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold text-[#626262]">Visitor Question</p>
                      <p className="text-sm font-medium text-[#402015] mt-0.5">
                        “Do you integrate with our existing scheduling and CRM tools?”
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white border border-[#D66A25]/35 p-4 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#D66A25] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold text-[#D66A25]">
                        Knowledge-Base Response + Qualification
                      </p>
                      <p className="text-sm text-[#626262] mt-0.5">
                        Answers using approved business information, then collects name, email, and project context.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#402015] p-4 text-white flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold text-[#E9A04A]">
                        Qualified Handoff
                      </p>
                      <p className="text-sm mt-0.5">
                        Transcript & contact summary routed to your team
                      </p>
                    </div>
                    <Send className="w-4 h-4 text-[#E9A04A] shrink-0" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: AI Workflow Automation */}
      <section
        id="service-ai-workflows"
        className="py-16 sm:py-20 bg-[#FAF8F5] border-y border-[#402015]/10 scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Visual Left on Desktop */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl border border-[#402015]/12 bg-white p-6 sm:p-8 space-y-4">
                <p className="text-xs font-semibold text-[#D66A25]">
                  Multi-Step Workflow Blueprint
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-xl bg-[#FAF8F5] border border-[#402015]/10 p-4">
                    <span className="font-mono text-xs text-[#D66A25] font-semibold">01</span>
                    <p className="font-display text-sm font-bold text-[#402015] mt-1">
                      Trigger Event
                    </p>
                    <p className="text-xs text-[#626262] mt-1">
                      New inquiry or incoming email arrives
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#FAF8F5] border border-[#402015]/10 p-4">
                    <span className="font-mono text-xs text-[#D66A25] font-semibold">02</span>
                    <p className="font-display text-sm font-bold text-[#402015] mt-1">
                      AI Categorization
                    </p>
                    <p className="text-xs text-[#626262] mt-1">
                      Extracts key details and summarizes intent
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#FAF8F5] border border-[#402015]/10 p-4">
                    <span className="font-mono text-xs text-[#D66A25] font-semibold">03</span>
                    <p className="font-display text-sm font-bold text-[#402015] mt-1">
                      Auto Routing
                    </p>
                    <p className="text-xs text-[#626262] mt-1">
                      Logs record & sends team notification
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-[#402015]/10 bg-[#FAF8F5] p-4 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#D66A25] shrink-0" aria-hidden="true" />
                  <p className="text-xs sm:text-sm text-[#402015]">
                    Eliminates manual sorting, forwarding, and status follow-up emails across departments.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D66A25]/10 text-[#D66A25]">
                  <Workflow className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="font-mono text-xs font-semibold text-[#D66A25]">
                  02 · Intelligent Operations
                </span>
              </div>

              <h2 className="font-display text-3xl font-bold tracking-tight text-[#402015]">
                AI Workflow Automation
              </h2>
              <p className="text-base leading-relaxed text-[#626262]">
                Replace manual handoffs between apps with intelligent workflows that process incoming information, notify the right team members, and keep tasks moving smoothly.
              </p>

              <ul className="space-y-3 pt-1">
                {[
                  'Repetitive task automation.',
                  'Automated email and notification workflows.',
                  'Data processing and organization.',
                  'Lead management automation.',
                  'Multi-step business workflows.',
                ].map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-sm sm:text-[15px] text-[#402015]">
                    <CheckCircle2
                      className="w-5 h-5 text-[#D66A25] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleDiscuss('AI Workflow Automation')}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#D66A25] px-5 py-3 text-sm font-semibold text-white hover:bg-[#BC581B] transition-colors cursor-pointer"
                >
                  <span>Discuss This Solution</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Business Process Automation */}
      <section
        id="service-bpa"
        className="py-16 sm:py-20 bg-white scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D66A25]/10 text-[#D66A25]">
                  <ClipboardCheck className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="font-mono text-xs font-semibold text-[#D66A25]">
                  03 · Administrative Efficiency
                </span>
              </div>

              <h2 className="font-display text-3xl font-bold tracking-tight text-[#402015]">
                Business Process Automation
              </h2>
              <p className="text-base leading-relaxed text-[#626262]">
                Streamline back-office operations such as document handling, invoice organization, data entry, and recurring internal reporting so your staff spend less time on paperwork.
              </p>

              <ul className="space-y-3 pt-1">
                {[
                  'Administrative task automation.',
                  'Document and invoice processing.',
                  'Data entry automation.',
                  'Reporting and operational workflows.',
                  'Improved internal business processes.',
                ].map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-sm sm:text-[15px] text-[#402015]">
                    <CheckCircle2
                      className="w-5 h-5 text-[#D66A25] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleDiscuss('Business Process Automation')}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#D66A25] px-5 py-3 text-sm font-semibold text-white hover:bg-[#BC581B] transition-colors cursor-pointer"
                >
                  <span>Discuss This Solution</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Distinct Visual Schematic for Service 3 */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-[#402015]/12 bg-[#FAF8F5] p-6 sm:p-8 space-y-4">
                <p className="text-xs font-semibold text-[#D66A25]">
                  Document & Back-Office Flow
                </p>
                <div className="rounded-xl bg-white border border-[#402015]/10 p-5 space-y-4">
                  <div className="flex items-center justify-between gap-4 border-b border-[#402015]/10 pb-3">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-5 h-5 text-[#D66A25]" aria-hidden="true" />
                      <span className="font-display text-sm font-bold text-[#402015]">
                        Incoming Invoices & Forms
                      </span>
                    </div>
                    <span className="text-xs text-[#626262]">Automated Intake</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-lg bg-[#FAF8F5] p-3">
                      <p className="font-semibold text-[#402015]">Field Extraction</p>
                      <p className="text-[#626262] mt-1">
                        Dates, totals, vendor names, and references captured cleanly
                      </p>
                    </div>
                    <div className="rounded-lg bg-[#FAF8F5] p-3">
                      <p className="font-semibold text-[#402015]">Structured Filing</p>
                      <p className="text-[#626262] mt-1">
                        Organized into folders, sheets, and approval queues
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: System Integration */}
      <section
        id="service-integration"
        className="py-16 sm:py-20 bg-[#FAF8F5] border-y border-[#402015]/10 scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Visual Left on Desktop */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl border border-[#402015]/12 bg-white p-6 sm:p-8 space-y-5">
                <p className="text-xs font-semibold text-[#D66A25]">
                  Connected Business Ecosystem
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'Website & Forms', role: 'Lead & request capture' },
                    { name: 'Google Workspace', role: 'Gmail, Drive & Calendar' },
                    { name: 'CRM Platforms', role: 'Contacts & deal pipelines' },
                    { name: 'Internal Databases', role: 'Reporting & sync' },
                  ].map((node) => (
                    <div
                      key={node.name}
                      className="rounded-xl border border-[#402015]/10 bg-[#FAF8F5] p-4"
                    >
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-[#D66A25] shrink-0" aria-hidden="true" />
                        <p className="font-display text-sm font-bold text-[#402015]">
                          {node.name}
                        </p>
                      </div>
                      <p className="mt-1 text-xs text-[#626262]">{node.role}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-[#402015] px-4 py-3 text-xs sm:text-sm text-white/90 text-center">
                  Synchronized via reliable API & webhook connections so data stays accurate everywhere.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D66A25]/10 text-[#D66A25]">
                  <Network className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="font-mono text-xs font-semibold text-[#D66A25]">
                  04 · Connected Tools
                </span>
              </div>

              <h2 className="font-display text-3xl font-bold tracking-tight text-[#402015]">
                System Integration
              </h2>
              <p className="text-base leading-relaxed text-[#626262]">
                Eliminate disconnected silos between your website, inbox, spreadsheets, and CRM by connecting the applications your business already uses every day.
              </p>

              <ul className="space-y-3 pt-1">
                {[
                  'CRM integrations.',
                  'Connecting business applications.',
                  'Google Workspace integrations.',
                  'API-based integrations.',
                  'Automated data synchronization.',
                ].map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-sm sm:text-[15px] text-[#402015]">
                    <CheckCircle2
                      className="w-5 h-5 text-[#D66A25] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleDiscuss('System Integration')}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#D66A25] px-5 py-3 text-sm font-semibold text-white hover:bg-[#BC581B] transition-colors cursor-pointer"
                >
                  <span>Discuss This Solution</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* C. HOW OUR AUTOMATION WORKS */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-[#D66A25] mb-2">
              Architecture Overview
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#402015] text-balance">
              How Our Automation Works
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#626262]">
              Every solution follows a transparent, dependable sequence from initial trigger to measurable business result.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {HOW_IT_WORKS_STAGES.map((item, idx) => {
              const Icon = item.Icon;
              return (
                <div
                  key={item.stage}
                  className="relative rounded-2xl border border-[#402015]/10 bg-[#FAF8F5] p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#402015]/10 text-[#D66A25]">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-xs font-semibold tabular-nums text-[#626262]">
                        {item.stage}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#402015]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#626262]">
                      {item.description}
                    </p>
                  </div>
                  {idx < HOW_IT_WORKS_STAGES.length - 1 && (
                    <div className="mt-4 pt-3 border-t border-[#402015]/8 flex items-center gap-1.5 text-xs font-semibold text-[#D66A25]">
                      <span>Next Stage</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* D. OUR APPROACH */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-y border-[#402015]/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#402015]/10 bg-white p-8 sm:p-12">
            <p className="text-sm font-semibold text-[#D66A25] mb-3">
              Our Approach
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#402015] text-balance">
              Start with the Problem. Build the Right Solution.
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#626262]">
              Technology works best when it solves a clear operational problem. Instead of pushing one-size-fits-all software, ArizoTek begins by mapping how your team handles inquiries, documents, and internal updates today. From there, we recommend and implement the simplest, most reliable automation solution that saves time and fits naturally into your workflow.
            </p>
          </div>
        </div>
      </section>

      {/* E. CTA */}
      <section className="relative overflow-hidden bg-[#402015] py-16 sm:py-20 text-white">
        <DesertRidgeHorizon
          tone="dark"
          className="absolute inset-x-0 bottom-0 h-36 w-full"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Let’s Find the Right Solution for Your Business.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/85 max-w-2xl mx-auto">
            Tell us which repetitive workflows are slowing your team down, and we will help you explore practical ways to automate them.
          </p>
          <div className="mt-8">
            <button
              type="button"
              onClick={() => onNavigate({ page: 'contact', sectionId: 'contact-form' })}
              className="inline-flex items-center gap-2 rounded-lg bg-[#D66A25] px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#BC581B] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9A04A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#402015]"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
