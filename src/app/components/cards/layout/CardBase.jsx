export default function CardBase({ children }) {
  return (
    <div className="rounded-lg  flex flex-grow flex-col bg-neutralDarkBlue overflow-hidden">
      {children}
    </div>
  );
}
