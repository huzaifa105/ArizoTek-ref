import { useEffect, useState } from 'react';
import {
  Inbox,
  Sparkles,
  Zap,
  Database,
  Bell,
  ArrowDown,
  Pause,
  Play,
} from 'lucide-react';

interface WorkflowStep {
  id: number;
  number: string;
  title: string;
  summary: string;
  detail: string;
  exampleOutput: string;
  Icon: typeof Inbox;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 0,
    number: '01',
    title: 'Customer Inquiry',
    summary: 'Website form, email, or chat request arrives',
    detail:
      'Incoming prospect questions are captured in a structured format without anyone monitoring an inbox.',
    exampleOutput: 'New request received: Service consultation inquiry',
    Icon: Inbox,
  },
  {
    id: 1,
    number: '02',
    title: 'AI Processing',
    summary: 'Intent, urgency, and key contact details extracted',
    detail:
      'AI reads the message, identifies the requested service, and prepares clean structured fields.',
    exampleOutput: 'Categorized: Workflow Automation · Priority: Standard',
    Icon: Sparkles,
  },
  {
    id: 2,
    number: '03',
    title: 'Automated Action',
    summary: 'Tailored acknowledgment drafted & routed',
    detail:
      'A helpful confirmation email is sent to the customer while internal next steps are triggered.',
    exampleOutput: 'Confirmation reply sent · Consultation link attached',
    Icon: Zap,
  },
  {
    id: 3,
    number: '04',
    title: 'CRM Update',
    summary: 'Contact record created and tagged automatically',
    detail:
      'Customer name, company, inquiry notes, and follow-up date are logged with zero manual typing.',
    exampleOutput: 'Contact saved in CRM · Follow-up task assigned',
    Icon: Database,
  },
  {
    id: 4,
    number: '05',
    title: 'Notification',
    summary: 'Right team member alerted with full context',
    detail:
      'Your team receives a clean summary in email or chat so they can step in immediately when needed.',
    exampleOutput: 'Team summary delivered to assigned account lead',
    Icon: Bell,
  },
];

export function HeroWorkflowVisual() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % WORKFLOW_STEPS.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const currentStep = WORKFLOW_STEPS[activeIndex];

  return (
    <div className="rounded-2xl border border-[#402015]/12 bg-white p-5 sm:p-6 shadow-[0_18px_50px_-24px_rgba(64,32,21,0.16)]">
      {/* Top Panel Header */}
      <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-[#402015]/10">
        <div>
          <p className="text-xs font-semibold text-[#D66A25]">
            Illustrative Workflow Blueprint
          </p>
          <h2 className="font-display text-base font-bold text-[#402015] mt-0.5">
            Automated Inquiry-to-Follow-Up Flow
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setIsPlaying((prev) => !prev)}
          aria-label={isPlaying ? 'Pause workflow step cycle' : 'Play workflow step cycle'}
          className="inline-flex items-center gap-1.5 rounded-lg border border-[#402015]/15 bg-[#FAF8F5] px-3 py-1.5 text-xs font-medium text-[#402015] hover:border-[#D66A25] hover:text-[#D66A25] transition-colors cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D66A25]"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Play</span>
            </>
          )}
        </button>
      </div>

      {/* Connected 5-Step Pipeline */}
      <div className="space-y-2">
        {WORKFLOW_STEPS.map((step, index) => {
          const isActive = index === activeIndex;
          const Icon = step.Icon;

          return (
            <div key={step.id}>
              <button
                type="button"
                onClick={() => {
                  setActiveIndex(index);
                  setIsPlaying(false);
                }}
                aria-current={isActive ? 'step' : undefined}
                className={`w-full text-left rounded-xl border px-4 py-3 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D66A25] ${
                  isActive
                    ? 'border-[#D66A25] bg-[#FAF8F5] shadow-sm'
                    : 'border-[#402015]/10 bg-white hover:border-[#E9A04A]'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'bg-[#D66A25] text-white'
                        : 'bg-[#F4EFEA] text-[#402015]'
                    }`}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display text-sm font-bold text-[#402015] truncate">
                        {step.number}. {step.title}
                      </span>
                      <span
                        className={`font-mono text-[11px] tabular-nums shrink-0 ${
                          isActive ? 'text-[#D66A25] font-medium' : 'text-[#626262]/70'
                        }`}
                      >
                        {isActive ? 'Active Stage' : `Step ${index + 1}`}
                      </span>
                    </div>
                    <p className="text-xs text-[#626262] truncate mt-0.5">
                      {step.summary}
                    </p>
                  </div>
                </div>
              </button>

              {index < WORKFLOW_STEPS.length - 1 && (
                <div className="flex justify-center py-0.5" aria-hidden="true">
                  <ArrowDown
                    className={`w-3.5 h-3.5 transition-colors duration-200 ${
                      isActive ? 'text-[#D66A25]' : 'text-[#402015]/25'
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Step Explanation Box */}
      <div className="mt-5 rounded-xl bg-[#402015] p-4 text-white">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-xs font-semibold text-[#E9A04A]">
            Stage {currentStep.number} · {currentStep.title}
          </span>
          <span className="font-mono text-[11px] tabular-nums text-white/70">
            {activeIndex + 1} / {WORKFLOW_STEPS.length}
          </span>
        </div>
        <p className="text-xs sm:text-[13px] leading-relaxed text-white/90">
          {currentStep.detail}
        </p>
        <p className="mt-2.5 pt-2.5 border-t border-white/15 font-mono text-[11px] text-[#E9A04A]">
          Example: {currentStep.exampleOutput}
        </p>
      </div>
    </div>
  );
}
