export default function Window({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl ${className || ""}`}
    >
      <div className="flex items-center gap-[6px] border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
        <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f57]" />
        <span className="h-[10px] w-[10px] rounded-full bg-[#febc2e]" />
        <span className="h-[10px] w-[10px] rounded-full bg-[#28c840]" />
        {title && (
          <span className="ml-2 select-none text-[11px] text-white/25">
            {title}
          </span>
        )}
      </div>
      <div className="p-6 md:p-8">{children}</div>
    </div>
  );
}
