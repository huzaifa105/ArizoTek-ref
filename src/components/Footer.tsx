import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe, Share2 } from 'lucide-react';
import { ArizoTekLogo } from './BrandMark';
import { NavigateOptions, ServiceOption } from '../types';

interface FooterProps {
  onNavigate: (opts: NavigateOptions) => void;
}

const SERVICE_LINKS: { label: ServiceOption; sectionId: string }[] = [
  { label: 'AI Agents & Chatbots', sectionId: 'service-ai-agents' },
  { label: 'AI Workflow Automation', sectionId: 'service-ai-workflows' },
  { label: 'Business Process Automation', sectionId: 'service-bpa' },
  { label: 'System Integration', sectionId: 'service-integration' },
];

export function Footer({ onNavigate }: FooterProps) {
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  const handleSocialPlaceholder = (network: string) => {
    setSocialNotice(`${network} profile link will be connected during WordPress launch.`);
    window.setTimeout(() => {
      setSocialNotice(null);
    }, 3500);
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#402015]/10 text-[#626262]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-block rounded-lg bg-white px-3.5 py-2.5 border border-[#402015]/8">
              <ArizoTekLogo className="h-10 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-[#626262] max-w-sm">
              Practical AI and IT automation solutions designed to help small and mid-sized businesses reduce manual effort, connect everyday systems, and operate more efficiently.
            </p>
            <div className="pt-1">
              <p className="text-xs font-semibold text-[#402015] mb-3">
                Connect (Social Placeholders)
              </p>
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => handleSocialPlaceholder('LinkedIn')}
                  aria-label="ArizoTek LinkedIn placeholder"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#402015]/12 bg-white text-[#402015] hover:border-[#D66A25] hover:text-[#D66A25] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D66A25]"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialPlaceholder('Website / Blog')}
                  aria-label="ArizoTek Website placeholder"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#402015]/12 bg-white text-[#402015] hover:border-[#D66A25] hover:text-[#D66A25] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D66A25]"
                >
                  <Globe className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialPlaceholder('Social Channel')}
                  aria-label="ArizoTek Social placeholder"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#402015]/12 bg-white text-[#402015] hover:border-[#D66A25] hover:text-[#D66A25] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D66A25]"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
              {socialNotice && (
                <p role="status" className="mt-2.5 text-xs text-[#D66A25] font-medium">
                  {socialNotice}
                </p>
              )}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold text-[#402015] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ page: 'home' });
                  }}
                  className="hover:text-[#D66A25] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ page: 'services' });
                  }}
                  className="hover:text-[#D66A25] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ page: 'contact' });
                  }}
                  className="hover:text-[#D66A25] transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ page: 'contact', sectionId: 'contact-form' });
                  }}
                  className="font-semibold text-[#D66A25] hover:text-[#BC581B] transition-colors"
                >
                  Book a Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold text-[#402015] mb-4">
              Automation Services
            </h3>
            <ul className="space-y-3 text-sm">
              {SERVICE_LINKS.map((item) => (
                <li key={item.sectionId}>
                  <a
                    href={`#services`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate({ page: 'services', sectionId: item.sectionId });
                    }}
                    className="hover:text-[#D66A25] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Editable Contact Placeholders */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold text-[#402015] mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D66A25] shrink-0 mt-0.5" aria-hidden="true" />
                <span>[contact@your-domain.com]</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D66A25] shrink-0 mt-0.5" aria-hidden="true" />
                <span>[(000) 000-0000]</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D66A25] shrink-0 mt-0.5" aria-hidden="true" />
                <span>[City, State — Business Location]</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-[#626262]/80">
              Placeholder details ready to be updated with final business info in WordPress.
            </p>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-12 pt-6 border-t border-[#402015]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#626262]">
          <p>© 2026 ArizoTek. All Rights Reserved.</p>
          <p>IT Automation for Small to Mid-Size Businesses</p>
        </div>
      </div>
    </footer>
  );
}
