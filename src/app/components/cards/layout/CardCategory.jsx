import Icons from "../../icons/Icons";

export default function CardCategory({ category }) {
  return (
    <figure className="flex justify-end pr-4 overflow-clip ">
      <div className="h-12">
        <Icons category={category} />
      </div>
    </figure>
  );
}
