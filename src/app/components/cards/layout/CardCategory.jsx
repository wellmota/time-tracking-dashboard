import Icons from "../../icons/Icons";

export default function CardCategory({ category }) {
  console.log(Icons);
  return (
    <figure className="flex justify-end pr-4 max-h-10">
      <Icons category={category} />
    </figure>
  );
}
