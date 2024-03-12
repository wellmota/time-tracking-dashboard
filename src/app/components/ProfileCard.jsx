import Image from "next/image";

import Avatar from "../images/image-jeremy.png";

export function ProfileCard({ children, style }) {
  const className = `pb-8 rounded-lg flex flex-col gap-y-6 bg-neutralDarkBlue`;
  return (
    <div className={className}>
      <figure className="px-10 pt-10 pb-20 sm:mx-auto sm:max-w-lg rounded-lg  flex flex-col gap-y-6 bg-blue">
        <Image
          src={Avatar}
          alt="User Avatar"
          className=" h-20 w-20 rounded-full border-4"
        />
        <div>
          <p className="text-neutralPaleBlue font-light">Report for</p>
          <h2 className="text-5xl font-extralight">Jeremy Robson</h2>
        </div>
      </figure>
      <div className="text-2xl content px-10 flex flex-col gap-y-6 font-light">
        <a href="" className="font-light">
          Daily
        </a>
        <a href="" className="font-light">
          Montly
        </a>
        <a href="" className="font-light">
          Weekly
        </a>
      </div>
      {children}
    </div>
  );
}
