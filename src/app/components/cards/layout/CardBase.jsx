
export default function CardBase({ children, category }) {
  const bgGradient = category
    ? `bg-gradient-to-t from-slate-950  via-slate-950 via-10%  via-slate-950 to-10%`
    : "bg-gray-800";
  return (
    <div
      className={`bg-${category} w-1/4 max-w-[25%] min-w-60 rounded-lg  flex flex-grow flex-col overflow-hidden p-0 ${bgGradient}
      `}
    >
      {children}
    </div>
  );
}
