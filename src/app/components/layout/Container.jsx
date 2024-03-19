export function Container({ children }) {
  return (
    <div className="container mx-auto flex justify-center content-center flex-col sm:flex-row gap-8 w-fit max-w-[1240px]">
      {children}
    </div>
  );
}
