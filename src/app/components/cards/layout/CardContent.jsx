export default function CardContent({ children }) {
  return (
    <div
      className="transition ease-in-out delay-150
     hover:bg-mediumDesaturatedBlue flex flex-col p-8 gap-6 flex-grow rounded-t-lg  bg-neutralDarkBlue"
    >
      {children}
    </div>
  );
}
