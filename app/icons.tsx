type IconProps = {
  className?: string;
  size?: number;
};

function base(size: number) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const
  };
}

export function IconPhone({ className, size = 20 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.37 1.59.71 2.31a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconMail({ className, size = 20 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconFacebook({ className, size = 20 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3v-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconArrow({ className, size = 20 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Service / feature icons ── */

export function IconAttic({ className, size = 26 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M3 10 12 3l9 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 9v11h14V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 20v-5h6v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconTree({ className, size = 26 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path
        d="M12 2c2.8 0 5 2.1 5 4.7 0 .7-.2 1.4-.5 2 1.5.6 2.5 2 2.5 3.6 0 2.2-1.9 4-4.3 4H9.3C6.9 16.3 5 14.5 5 12.3c0-1.6 1-3 2.5-3.6-.3-.6-.5-1.3-.5-2C7 4.1 9.2 2 12 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M12 16v6M9 22h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconYard({ className, size = 26 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M3 20h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 20c0-4 1-7 3-9M10 20c-1-5 0-9 2-12M14 20c0-4 1-7 3-9M18 20c0-3 .5-5 2-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconTruck({ className, size = 26 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M2 6h11v9H2zM13 9h5l3 3v3h-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function IconSofa({ className, size = 26 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path
        d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 9a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 18v2M20 18v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconJeep({ className, size = 26 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M3 13l2-5h11l3 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 16h20v-3H2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="2.2" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="18" r="2.2" stroke="currentColor" strokeWidth="2" />
      <path d="M9 8v5M14 8v5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function IconMower({ className, size = 26 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M3 16h9v-4H5l-2 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 12l6-6 3 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="15" cy="16" r="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 20h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconCheck({ className, size = 20 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconRecycle({ className, size = 26 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path
        d="M20 13.2 13.2 20a2.4 2.4 0 0 1-3.4 0L4 14.2V4h10.2L20 9.8a2.4 2.4 0 0 1 0 3.4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 8.5h.01"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 13.5h5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconPin({ className, size = 18 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
