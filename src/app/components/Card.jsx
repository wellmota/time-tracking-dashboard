import Image from "next/image";

import Icon from "../images/icon-self-care.svg";

export function Card({ children, style }) {
  const className = ` rounded-lg flex flex-col bg-neutralDarkBlue self-stretch overflow-hidden`;
  return (
    <div className={className}>
      <figure className="flex justify-end pr-4 max-h-12">
        <Image
          src={Icon}
          alt="User Avatar"
          className=" h-20 w-20w self-start mt-[-16px]"
        />
      </figure>
      <div className="flex flex-col flex-grow p-8 rounded-lg  bg-blue">
        <p>Work</p>
        <h2>32hrs</h2>
        <p>Last Week - 32hrs</p>
      </div>
    </div>
  );
}
