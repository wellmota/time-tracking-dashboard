export default function CardContent({ children }) {
  return (
    <div
      className="
     hover:bg-mediumDesaturatedBlue flex flex-col flex-grow p-8 gap-6 rounded-t-lg  bg-neutralDarkBlue"
    >
      {children}
    </div>
  );
}
