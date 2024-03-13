export default function CardBase({ children, category }) {
  return (
    <div
      className={`w-1/4 max-w-[25%] min-w-60 rounded-lg  flex flex-grow flex-col overflow-hidden bg-${category}`}
    >
      {children}
    </div>
  );
}
