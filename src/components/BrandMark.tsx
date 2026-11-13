import { useState } from 'react';

interface ArizoTekLogoProps {
  className?: string;
}

export function ArizoTekLogo({ className = 'h-11 sm:h-12 w-auto' }: ArizoTekLogoProps) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <span className="inline-flex items-baseline gap-1 font-display text-2xl font-extrabold tracking-tight">
        <span className="text-[#402015]">Arizo</span>
        <span className="text-[#D66A25]">Tek</span>
      </span>
    );
  }

  return (
    <img
      src="/assets/aistudio/image_d534bb24.png"
      alt="ArizoTek — IT Automation for Small to Mid-Size Businesses"
      referrerPolicy="no-referrer"
      onError={() => setImgError(true)}
      className={`${className} object-contain select-none`}
    />
  );
}

/**
 * Subtle geometric horizon ridge inspired by the mountain & desert contour in the ArizoTek mark.
 * Used sparingly as architectural background linework.
 */
export function DesertRidgeHorizon({
  className = '',
  tone = 'light',
}: {
  className?: string;
  tone?: 'light' | 'dark';
}) {
  const strokeMain = tone === 'dark' ? 'rgba(233, 160, 74, 0.22)' : 'rgba(214, 106, 37, 0.14)';
  const strokeSub = tone === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(64, 32, 21, 0.07)';

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 220"
      fill="none"
      preserveAspectRatio="none"
      className={`pointer-events-none select-none ${className}`}
    >
      <path
        d="M0 190 L210 142 L340 165 L540 94 L680 132 L890 62 L1065 118 L1245 78 L1440 138"
        stroke={strokeMain}
        strokeWidth="1.5"
      />
      <path
        d="M0 205 L290 174 L470 188 L675 136 L830 164 L1030 112 L1220 152 L1440 120"
        stroke={strokeSub}
        strokeWidth="1"
      />
    </svg>
  );
}
