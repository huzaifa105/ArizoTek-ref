import { useState } from 'react';
import {
  FileSpreadsheet,
  UserCheck,
  Mail,
  Clock,
  AlertCircle,
  CheckCircle2,
  Cpu,
  Database,
  Send,
  CalendarCheck,
  ArrowRight,
} from 'lucide-react';

interface ComparisonPair {
  step: string;
  manualTitle: string;
  manualNote: string;
  automatedTitle: string;
  automatedNote: string;
  ManualIcon: typeof AlertCircle;
  AutoIcon: typeof CheckCircle2;
}

const COMPARISON_PAIRS: ComparisonPair[] = [
  {
    step: '01',
    manualTitle: 'Customer submits an inquiry.',
    manualNote: 'Request sits in a shared email inbox until someone checks it.',
    automatedTitle: 'Inquiry is captured automatically.',
    automatedNote: 'Form, email, or chat details enter the workflow immediately.',
    ManualIcon: Mail,
    AutoIcon: CheckCircle2,
  },
  {
    step: '02',
    manualTitle: 'Employee manually reviews the request.',
    manualNote: 'Staff read through messages to figure out priority and topic.',
    automatedTitle: 'AI processes and categorizes the request.',
    automatedNote: 'AI identifies the service needed and organizes key fields.',
    ManualIcon: AlertCircle,
    AutoIcon: Cpu,
  },
  {
    step: '03',
    manualTitle: 'Information is entered into a spreadsheet.',
    manualNote: 'Copy-pasting names, emails, and notes risks typos or missed entries.',
    automatedTitle: 'Customer information is saved to the CRM.',
    automatedNote: 'Contact record and inquiry summary sync cleanly without retyping.',
    ManualIcon: FileSpreadsheet,
    AutoIcon: Database,
  },
  {
    step: '04',
    manualTitle: 'Employee sends a response.',
    manualNote: 'Customers wait hours or days for a basic acknowledgment.',
    automatedTitle: 'Automated response is triggered.',
    automatedNote: 'A tailored confirmation and next-step message goes out promptly.',
    ManualIcon: Clock,
    AutoIcon: Send,
  },
  {
    step: '05',
    manualTitle: 'Follow-up is performed manually.',
    manualNote: 'Reminders depend on sticky notes or personal memory.',
    automatedTitle: 'Follow-up is scheduled.',
    automatedNote: 'Tasks and calendar reminders are created automatically for your team.',
    ManualIcon: UserCheck,
    AutoIcon: CalendarCheck,
  },
];

export function BeforeAfterWorkflow() {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  return (
    <div className="space-y-6">
      {/* Interactive Step Selector Tabs (Desktop & Mobile) */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-[#626262]">
          Select any stage below to compare manual effort with an automated workflow:
        </p>
        <div
          role="tablist"
          aria-label="Workflow comparison stages"
          className="inline-flex flex-wrap items-center gap-1.5 rounded-xl bg-[#F4EFEA] p-1.5"
        >
          {COMPARISON_PAIRS.map((item, idx) => {
            const isSelected = selectedStep === idx;
            return (
              <button
                key={item.step}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedStep(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tabular-nums transition-colors cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-white text-[#402015] shadow-sm'
                    : 'text-[#626262] hover:text-[#402015]'
                }`}
              >
                Stage {item.step}
              </button>
            );
          })}
        </div>
      </div>

      {/* Before and After Side-by-Side Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Manual Process (Before) */}
        <div className="rounded-2xl border border-[#402015]/12 bg-[#FAF8F5] p-6 sm:p-8 flex flex-col">
          <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-[#402015]/10">
            <div>
              <span className="text-xs font-semibold text-[#626262]">
                Before Automation
              </span>
              <h3 className="font-display text-xl font-bold text-[#402015] mt-1">
                Manual Process
              </h3>
            </div>
            <span className="text-xs font-medium text-[#626262]">
              5 Manual Handoffs
            </span>
          </div>

          <ol className="space-y-3 flex-1">
            {COMPARISON_PAIRS.map((item, idx) => {
              const isSelected = selectedStep === idx;
              const Icon = item.ManualIcon;
              return (
                <li key={item.step}>
                  <button
                    type="button"
                    onClick={() => setSelectedStep(idx)}
                    className={`w-full text-left rounded-xl border p-4 transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'border-[#402015]/35 bg-white shadow-sm'
                        : 'border-[#402015]/8 bg-white/60 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F4EFEA] text-[#626262]">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs tabular-nums text-[#626262]">
                            {item.step}.
                          </span>
                          <p className="font-display text-sm font-bold text-[#402015]">
                            {item.manualTitle}
                          </p>
                        </div>
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#626262]">
                          {item.manualNote}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Automated Process (After) */}
        <div className="rounded-2xl border border-[#D66A25]/30 bg-white p-6 sm:p-8 shadow-[0_14px_40px_-24px_rgba(214,106,37,0.22)] flex flex-col">
          <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-[#402015]/10">
            <div>
              <span className="text-xs font-semibold text-[#D66A25]">
                With ArizoTek Automation
              </span>
              <h3 className="font-display text-xl font-bold text-[#402015] mt-1">
                Automated Process
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D66A25]">
              <span>Streamlined Flow</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          </div>

          <ol className="space-y-3 flex-1">
            {COMPARISON_PAIRS.map((item, idx) => {
              const isSelected = selectedStep === idx;
              const Icon = item.AutoIcon;
              return (
                <li key={item.step}>
                  <button
                    type="button"
                    onClick={() => setSelectedStep(idx)}
                    className={`w-full text-left rounded-xl border p-4 transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'border-[#D66A25] bg-[#FAF8F5] shadow-sm'
                        : 'border-[#402015]/10 bg-white hover:border-[#E9A04A]'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                          isSelected
                            ? 'bg-[#D66A25] text-white'
                            : 'bg-[#D66A25]/10 text-[#D66A25]'
                        }`}
                      >
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs tabular-nums text-[#D66A25] font-semibold">
                            {item.step}.
                          </span>
                          <p className="font-display text-sm font-bold text-[#402015]">
                            {item.automatedTitle}
                          </p>
                        </div>
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#626262]">
                          {item.automatedNote}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      {/* Clear Demo Disclaimer */}
      <p className="text-xs text-[#626262] text-center">
        Visual demonstration illustrating how manual administrative steps are converted into an automated workflow. Actual integrations are tailored to your business tools.
      </p>
    </div>
  );
}
