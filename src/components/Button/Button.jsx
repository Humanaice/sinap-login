import { forwardRef } from "react";

const baseStyles =
  "inline-flex items-center justify-center rounded-lg px-2 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:pointer-events-none disabled:opacity-60";

const variantStyles = {
  primary: "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
  secondary: "border border-white/10 bg-white/10 text-white hover:bg-white/15",
};

const Button = forwardRef(function Button(
  { text, className = "", variant = "primary", type = "button", ...props },
  ref,
) {
  const styles = variantStyles[variant] ?? variantStyles.primary;

  return (
    <button
      ref={ref}
      type={type}
      className={`${baseStyles} ${styles} ${className}`.trim()}
      {...props}
    >
      {text}
    </button>
  );
});

export default Button;
