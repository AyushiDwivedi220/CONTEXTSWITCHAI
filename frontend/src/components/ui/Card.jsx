export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
      bg-white/[0.03]
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-6
      shadow-[0_8px_40px_rgba(0,0,0,0.35)]
      ${className}
      `}
    >
      {children}
    </div>
  );
}