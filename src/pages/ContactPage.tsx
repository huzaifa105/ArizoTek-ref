import { FormEvent, useEffect, useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Send,
  AlertCircle,
  Info,
  RotateCcw,
} from 'lucide-react';
import { DesertRidgeHorizon } from '../components/BrandMark';
import { ServiceOption } from '../types';

interface ContactPageProps {
  preselectedService?: ServiceOption;
}

interface FormValues {
  fullName: string;
  businessEmail: string;
  companyName: string;
  serviceOfInterest: ServiceOption;
  message: string;
}

interface FormErrors {
  fullName?: string;
  businessEmail?: string;
  message?: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  'AI Agents & Chatbots',
  'AI Workflow Automation',
  'Business Process Automation',
  'System Integration',
  'Other',
];

export function ContactPage({ preselectedService }: ContactPageProps) {
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    serviceOfInterest: preselectedService || 'AI Agents & Chatbots',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setValues((prev) => ({
        ...prev,
        serviceOfInterest: preselectedService,
      }));
      setSubmittedData(null);
    }
  }, [preselectedService]);

  const validate = (form: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    const emailTrimmed = form.businessEmail.trim();
    if (!emailTrimmed) {
      nextErrors.businessEmail = 'Please enter your business email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      nextErrors.businessEmail = 'Please enter a valid email address (for example, name@company.com).';
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message =
        'Please share a short description of your workflow or automation goals (at least 10 characters).';
    }

    return nextErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmittedData({ ...values });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setErrors({});
    setValues({
      fullName: '',
      businessEmail: '',
      companyName: '',
      serviceOfInterest: preselectedService || 'AI Agents & Chatbots',
      message: '',
    });
  };

  return (
    <div>
      {/* A. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAF8F5] to-white border-b border-[#402015]/10">
        <DesertRidgeHorizon
          tone="light"
          className="absolute inset-x-0 bottom-0 h-32 w-full opacity-85"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#D66A25] mb-3">
              Contact ArizoTek · Schedule a Consultation
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.12] text-[#402015] text-balance">
              Let’s Discuss Your Automation Goals
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#626262] max-w-2xl">
              Whether you want to automate repetitive tasks, improve customer communication, or connect your business systems, we’re ready to explore the possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* B. CONTACT INFORMATION & C. CONTACT FORM */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-[#402015]">
                  Contact Information
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#626262]">
                  Editable placeholder fields below can be updated with final business contact details during WordPress setup.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email Card */}
                <div className="rounded-2xl border border-[#402015]/10 bg-[#FAF8F5] p-5 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-[#402015]/10 text-[#D66A25]">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-[#402015]">
                      Email
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#402015]">
                      [contact@your-domain.com]
                    </p>
                    <p className="mt-0.5 text-xs text-[#626262]">
                      Editable placeholder email address
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="rounded-2xl border border-[#402015]/10 bg-[#FAF8F5] p-5 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-[#402015]/10 text-[#D66A25]">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-[#402015]">
                      Phone
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#402015]">
                      [(000) 000-0000]
                    </p>
                    <p className="mt-0.5 text-xs text-[#626262]">
                      Editable placeholder business phone
                    </p>
                  </div>
                </div>

                {/* Business Location Card */}
                <div className="rounded-2xl border border-[#402015]/10 bg-[#FAF8F5] p-5 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-[#402015]/10 text-[#D66A25]">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-[#402015]">
                      Business Location
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#402015]">
                      [City, State — Business Location]
                    </p>
                    <p className="mt-0.5 text-xs text-[#626262]">
                      Editable placeholder service region / office
                    </p>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="rounded-2xl border border-[#402015]/10 bg-white p-6">
                <h3 className="font-display text-base font-bold text-[#402015]">
                  What to Expect
                </h3>
                <ol className="mt-4 space-y-3 text-sm text-[#626262]">
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-xs font-semibold text-[#D66A25] mt-0.5">
                      01.
                    </span>
                    <span>We review the repetitive tasks or tool gaps you describe.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-xs font-semibold text-[#D66A25] mt-0.5">
                      02.
                    </span>
                    <span>We schedule a brief discovery conversation to map your current workflow.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-xs font-semibold text-[#D66A25] mt-0.5">
                      03.
                    </span>
                    <span>You receive clear, practical automation recommendations tailored to your business.</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div id="contact-form" className="lg:col-span-7 scroll-mt-24">
              <div className="rounded-2xl border border-[#402015]/12 bg-white p-6 sm:p-8 lg:p-10 shadow-[0_14px_40px_-24px_rgba(64,32,21,0.16)]">
                {submittedData ? (
                  <div className="py-6 space-y-6" role="status" aria-live="polite">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D66A25]/10 text-[#D66A25]">
                      <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold text-[#402015]">
                        Inquiry Preview Confirmed
                      </h2>
                      <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#626262]">
                        Thank you, <span className="font-semibold text-[#402015]">{submittedData.fullName}</span>. Your form input passed validation cleanly.
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#402015]/10 bg-[#FAF8F5] p-5 space-y-2.5 text-sm">
                      <div className="flex flex-wrap justify-between gap-2">
                        <span className="text-[#626262]">Business Email:</span>
                        <span className="font-medium text-[#402015]">
                          {submittedData.businessEmail}
                        </span>
                      </div>
                      {submittedData.companyName && (
                        <div className="flex flex-wrap justify-between gap-2">
                          <span className="text-[#626262]">Company Name:</span>
                          <span className="font-medium text-[#402015]">
                            {submittedData.companyName}
                          </span>
                        </div>
                      )}
                      <div className="flex flex-wrap justify-between gap-2">
                        <span className="text-[#626262]">Service of Interest:</span>
                        <span className="font-medium text-[#D66A25]">
                          {submittedData.serviceOfInterest}
                        </span>
                      </div>
                      <div className="pt-2 border-t border-[#402015]/10">
                        <span className="text-[#626262] block mb-1">
                          Project Details:
                        </span>
                        <p className="text-[#402015] leading-relaxed">
                          {submittedData.message}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-[#E9A04A]/40 bg-[#FAF8F5] p-4 flex items-start gap-3">
                      <Info className="w-4 h-4 text-[#D66A25] shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-xs leading-relaxed text-[#626262]">
                        Demo Prototype Notice: No email was transmitted because this is a static design preview. Live email routing and notifications will be configured during the WordPress implementation.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 rounded-lg border border-[#402015]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#402015] hover:border-[#D66A25] hover:text-[#D66A25] transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" aria-hidden="true" />
                      <span>Submit Another Demo Inquiry</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="border-b border-[#402015]/10 pb-5">
                      <h2 className="font-display text-2xl font-bold text-[#402015]">
                        Send Us a Message
                      </h2>
                      <p className="mt-1.5 text-sm text-[#626262]">
                        Tell us about the workflows you would like to simplify.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-semibold text-[#402015] mb-1.5"
                        >
                          Full Name <span className="text-[#D66A25]">*</span>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          autoComplete="name"
                          required
                          value={values.fullName}
                          onChange={(e) => {
                            setValues((prev) => ({ ...prev, fullName: e.target.value }));
                            if (errors.fullName) {
                              setErrors((prev) => ({ ...prev, fullName: undefined }));
                            }
                          }}
                          aria-invalid={Boolean(errors.fullName)}
                          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                          placeholder="Jane Doe"
                          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-[#402015] placeholder:text-[#626262]/60 focus:outline-none focus:ring-2 focus:ring-[#D66A25]/30 transition-colors ${
                            errors.fullName
                              ? 'border-red-600 bg-red-50/30 focus:border-red-600'
                              : 'border-[#402015]/20 bg-white focus:border-[#D66A25]'
                          }`}
                        />
                        {errors.fullName && (
                          <p
                            id="fullName-error"
                            role="alert"
                            className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      {/* Business Email */}
                      <div>
                        <label
                          htmlFor="businessEmail"
                          className="block text-sm font-semibold text-[#402015] mb-1.5"
                        >
                          Business Email <span className="text-[#D66A25]">*</span>
                        </label>
                        <input
                          id="businessEmail"
                          name="businessEmail"
                          type="email"
                          autoComplete="email"
                          required
                          value={values.businessEmail}
                          onChange={(e) => {
                            setValues((prev) => ({
                              ...prev,
                              businessEmail: e.target.value,
                            }));
                            if (errors.businessEmail) {
                              setErrors((prev) => ({
                                ...prev,
                                businessEmail: undefined,
                              }));
                            }
                          }}
                          aria-invalid={Boolean(errors.businessEmail)}
                          aria-describedby={
                            errors.businessEmail ? 'businessEmail-error' : undefined
                          }
                          placeholder="jane@company.com"
                          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-[#402015] placeholder:text-[#626262]/60 focus:outline-none focus:ring-2 focus:ring-[#D66A25]/30 transition-colors ${
                            errors.businessEmail
                              ? 'border-red-600 bg-red-50/30 focus:border-red-600'
                              : 'border-[#402015]/20 bg-white focus:border-[#D66A25]'
                          }`}
                        />
                        {errors.businessEmail && (
                          <p
                            id="businessEmail-error"
                            role="alert"
                            className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.businessEmail}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Company Name */}
                      <div>
                        <label
                          htmlFor="companyName"
                          className="block text-sm font-semibold text-[#402015] mb-1.5"
                        >
                          Company Name
                        </label>
                        <input
                          id="companyName"
                          name="companyName"
                          type="text"
                          autoComplete="organization"
                          value={values.companyName}
                          onChange={(e) =>
                            setValues((prev) => ({
                              ...prev,
                              companyName: e.target.value,
                            }))
                          }
                          placeholder="Your Company LLC"
                          className="w-full rounded-lg border border-[#402015]/20 bg-white px-4 py-2.5 text-sm text-[#402015] placeholder:text-[#626262]/60 focus:border-[#D66A25] focus:outline-none focus:ring-2 focus:ring-[#D66A25]/30 transition-colors"
                        />
                      </div>

                      {/* Service of Interest Dropdown */}
                      <div>
                        <label
                          htmlFor="serviceOfInterest"
                          className="block text-sm font-semibold text-[#402015] mb-1.5"
                        >
                          Service of Interest
                        </label>
                        <select
                          id="serviceOfInterest"
                          name="serviceOfInterest"
                          value={values.serviceOfInterest}
                          onChange={(e) =>
                            setValues((prev) => ({
                              ...prev,
                              serviceOfInterest: e.target.value as ServiceOption,
                            }))
                          }
                          className="w-full rounded-lg border border-[#402015]/20 bg-white px-4 py-2.5 text-sm text-[#402015] focus:border-[#D66A25] focus:outline-none focus:ring-2 focus:ring-[#D66A25]/30 transition-colors"
                        >
                          {SERVICE_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message / Project Details */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-[#402015] mb-1.5"
                      >
                        Message / Project Details{' '}
                        <span className="text-[#D66A25]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={values.message}
                        onChange={(e) => {
                          setValues((prev) => ({ ...prev, message: e.target.value }));
                          if (errors.message) {
                            setErrors((prev) => ({ ...prev, message: undefined }));
                          }
                        }}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        placeholder="Describe the manual tasks, customer communication, or tools you want to connect..."
                        className={`w-full rounded-lg border px-4 py-3 text-sm text-[#402015] placeholder:text-[#626262]/60 focus:outline-none focus:ring-2 focus:ring-[#D66A25]/30 transition-colors ${
                          errors.message
                            ? 'border-red-600 bg-red-50/30 focus:border-red-600'
                            : 'border-[#402015]/20 bg-white focus:border-[#D66A25]'
                        }`}
                      />
                      {errors.message && (
                        <p
                          id="message-error"
                          role="alert"
                          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button & WordPress Demo Notice */}
                    <div className="pt-2 space-y-4">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#D66A25] px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#BC581B] active:translate-y-[1px] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#402015] focus-visible:ring-offset-2"
                      >
                        <span>Send Inquiry</span>
                        <Send className="w-4 h-4" aria-hidden="true" />
                      </button>

                      <div className="rounded-xl border border-[#402015]/10 bg-[#FAF8F5] p-3.5 flex items-start gap-2.5">
                        <Info
                          className="w-4 h-4 text-[#D66A25] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <p className="text-xs leading-relaxed text-[#626262]">
                          Demo Website Notice: This form demonstrates field layout, validation, and confirmation UI. Final email submission functionality will be configured during the WordPress implementation.
                        </p>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
