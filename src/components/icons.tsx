import type { SVGProps } from 'react';

export function AppLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M5.636 5.636l1.414 1.414" />
      <path d="M16.95 16.95l1.414 1.414" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M5.636 18.364l1.414-1.414" />
      <path d="M16.95 7.05l1.414-1.414" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(90 12 12)" />
    </svg>
  );
}
