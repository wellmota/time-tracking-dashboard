import CardBase from "./layout/CardBase";
import CardCategory from "./layout/CardCategory";
import CardContent from "./layout/CardContent";
import ActionTitle from "../../components/navigation/ActionTitle";

export function TimeTrackCard() {
  return (
    <CardBase>
      <CardCategory category="study" />
      <CardContent>
        <ActionTitle title="Work" />
        <div>
          <h2 className="text-5xl font-extralight ">32hrs</h2>
          <p className="text-neutralPaleBlue ">Last Week - 32hrs</p>
        </div>
      </CardContent>
    </CardBase>
  );
}
