export function Column({ children }) {
  return (
    <div className="container mx-auto flex flex-row w-fit flex-wrap gap-8 animate-fade-right animate-once animate-delay-300">
      {children}
    </div>
  );
}
