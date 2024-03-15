
import ProfilePic from "../../../images/image-jeremy.png";
import Avatar from "../../imagery/Avatar";
import SortFilter from "../../navigation/SortFilter";


export function ProfileCard({ onFilterSelect }) {
  return (
    <div className="pb-8 rounded-lg flex flex-col gap-y-6 bg-neutralDarkBlue">
      <figure className="px-10 pt-10 pb-20 sm:mx-auto sm:max-w-lg rounded-lg  flex flex-col gap-y-6 bg-blue">
        <Avatar src={ProfilePic}></Avatar>
        <div>
          <p className="text-neutralPaleBlue font-light">Report for</p>
          <h2 className="text-5xl font-extralight">Jeremy Robson</h2>
        </div>
      </figure>
      <SortFilter onFilterSelect={onFilterSelect} />
    </div>
  );
}
