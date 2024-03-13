import CardBase from "./layout/CardBase";
import CardCategory from "./layout/CardCategory";
import CardContent from "./layout/CardContent";
import ActionTitle from "../../components/navigation/ActionTitle";

export function TimeTrackCard({ category }) {
  return (
    <CardBase category={category}>
      <CardCategory category={category} />
      <CardContent>
        <ActionTitle title={category} />
        <div>
          <h2 className="text-5xl font-extralight ">32hrs</h2>
          <p className="text-neutralPaleBlue ">Last Week - 32hrs</p>
        </div>
      </CardContent>
    </CardBase>
  );
}
