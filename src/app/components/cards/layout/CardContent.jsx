export default function CardContent({ children }) {
  return (
    <div
      className="transition ease-in-out delay-150
    translate-y-1 hover:bg-indigo-500 duration-300 flex flex-col flex-grow p-8 gap-6 rounded-lg  bg-blue"
    >
      {children}
    </div>
  );
}
