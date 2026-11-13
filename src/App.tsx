/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { NavigateOptions, PageRoute, ServiceOption } from './types';

function getPageFromHash(): PageRoute {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash === 'services') return 'services';
  if (hash === 'contact') return 'contact';
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(getPageFromHash);
  const [preselectedService, setPreselectedService] = useState<
    ServiceOption | undefined
  >(undefined);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = ({
    page,
    sectionId,
    preselectedService: service,
  }: NavigateOptions) => {
    if (service) {
      setPreselectedService(service);
    }

    setCurrentPage(page);
    if (window.location.hash !== `#${page}`) {
      window.location.hash = page;
    }

    if (sectionId) {
      window.setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#626262]">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && (
          <ContactPage preselectedService={preselectedService} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
