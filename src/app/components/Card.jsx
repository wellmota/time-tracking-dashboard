export function Card({ children }) {
  return (
    <div
    className="bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 text-gray-900"
    >
      {children}
    </div>
  );
}
