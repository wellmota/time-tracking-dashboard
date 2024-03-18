export function Container({ children }) {
  return (
    <div className="flex flex-col sm:flex-row gap-8 max-w-[1200px]">
      {children}
    </div>
  );
}
