export default function CardBase({ children, category}) {
  const bgGradient = category
    ? `bg-gradient-to-t from-slate-950  via-slate-950 via-10%  via-slate-950 to-10%`
    : "bg-gray-800";
  return (
    <div
      className={`flex bg-${category} w-1/4 min-w-full sm:min-w-min md:min-w-60 lg:max-w-[25%] rounded-lg md:max-h-60 flex-col overflow-hidden p-0 transition-all duration-500 delay-100 ease-in-out transform hover:scale-105 ${bgGradient}
      `}
    >
      {children}
    </div>
  );
}
