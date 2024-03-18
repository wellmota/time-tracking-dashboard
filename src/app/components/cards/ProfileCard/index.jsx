import ProfilePic from "@/images/image-jeremy.png";
import Avatar from "@/components/imagery/Avatar";
import SortFilter from "@/components/navigation/SortFilter";

export function ProfileCard({ onFilterSelect }) {
  return (
    <div className="flex flex-col pb-8 rounded-lg gap-y-6 bg-neutralDarkBlue">
      <div className="flex flex-col px-6 sm:px-10 pt-10 pb-10 sm:pb-20 sm:mx-auto sm:max-w-lg rounded-lg bg-blue">
        <div className="flex flex-row sm:flex-col gap-x-4 sm:gap-y-6 items-center sm:items-start ">
          <Avatar src={ProfilePic}></Avatar>
          <div>
            <p className="text-neutralPaleBlue font-light">Report for</p>
            <h2 className="text-4xl sm:text-5xl font-extralight">
              Jeremy Robson
            </h2>
          </div>
        </div>
      </div>
      <SortFilter onFilterSelect={onFilterSelect} />
    </div>
  );
}
