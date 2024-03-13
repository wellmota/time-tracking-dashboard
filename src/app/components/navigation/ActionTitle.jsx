import Ellipsis from "../../images/icon-ellipsis.svg";
import Image from "next/image";

export default function ActionTitle({ title }) {
  return (
    <div className="flex flex-row justify-between items-center">
      <p>{title}</p>
      <a href="" className="flex items-center min-h-6">
        <Image src={Ellipsis} alt="More" />
      </a>
    </div>
  );
}
