interface LiveProjectButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

/**
 * LiveProjectButton: Ghost / outline pill button.
 * Used in Projects section cards.
 */
export default function LiveProjectButton({
  label = "Live Project",
  onClick,
  href,
  className = "",
}: LiveProjectButtonProps) {
  const classNames = `inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 ${className}`;

  if (href) {
    return (
      <a href={href} className={classNames}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classNames}>
      {label}
    </button>
  );
}
