import Icons from "../../icons/Icons";

export default function CardCategory({ category }) {
  console.log(Icons);
  return (
    <figure className="flex justify-end pr-4 ">
      <div className="h-12">
        <Icons category={category} />
      </div>
    </figure>
  );
}
