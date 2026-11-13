import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ArizoTekLogo } from './BrandMark';
import { NavigateOptions, PageRoute } from '../types';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (opts: NavigateOptions) => void;
}

const NAV_ITEMS: { label: string; page: PageRoute }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Services', page: 'services' },
  { label: 'Contact Us', page: 'contact' },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (opts: NavigateOptions) => {
    setMobileMenuOpen(false);
    onNavigate(opts);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-[#402015]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[74px] items-center justify-between gap-8">
          {/* Zone 1: Logo on the left */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNav({ page: 'home' });
            }}
            className="inline-flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D66A25] rounded-md"
            aria-label="ArizoTek Home"
          >
            <ArizoTekLogo className="h-10 sm:h-12 w-auto" />
          </a>

          {/* Zone 2: Single-line navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <a
                  key={item.page}
                  href={`#${item.page}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav({ page: item.page });
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-2 text-[15px] font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D66A25] rounded-sm ${
                    isActive
                      ? 'text-[#402015] font-semibold'
                      : 'text-[#626262] hover:text-[#D66A25]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-[#D66A25] rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA button + Mobile menu button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleNav({ page: 'contact', sectionId: 'contact-form' })}
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#D66A25] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#BC581B] active:translate-y-[1px] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#402015] focus-visible:ring-offset-2"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#402015]/15 text-[#402015] hover:bg-[#FAF8F5] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D66A25]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-t border-[#402015]/10 bg-white px-4 py-5 shadow-lg"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <a
                  key={item.page}
                  href={`#${item.page}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav({ page: item.page });
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#FAF8F5] text-[#D66A25] font-semibold'
                      : 'text-[#402015] hover:bg-[#FAF8F5]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="text-xs font-medium text-[#D66A25]">Current</span>
                  )}
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-[#402015]/10">
              <button
                type="button"
                onClick={() => handleNav({ page: 'contact', sectionId: 'contact-form' })}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#D66A25] px-5 py-3 text-sm font-semibold text-white hover:bg-[#BC581B] transition-colors cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
