import CardBase from "../layout/CardBase";
import CardCategory from "../layout/CardCategory";
import CardContent from "../layout/CardContent";
import ActionTitle from "../../navigation/ActionTitle";
import { camelCase } from "../../../utils/stringUtils";

export const TimeTrackCard = ({ props, filter }) => {
  const { title, timeframes } = props;
  const { daily, weekly, monthly } = timeframes;

  const filterTextFeedback = (filter) => {
    switch (filter) {
      case "daily":
        return "Yesterday";
      case "weekly":
        return "Last Week";
      case "monthly":
        return "Last Month";
      default:
        return "";
    }
  };

  const category = camelCase(title);
  return (
    <CardBase category={category}>
      <CardCategory category={category} />
      <CardContent>
        <ActionTitle title={title} />
        <div>
          <h2 className="text-5xl font-extralight ">{daily.current}hrs</h2>
          <p className="text-neutralPaleBlue ">
            {filterTextFeedback(filter)} - {daily.previous}hrs
          </p>
        </div>
      </CardContent>
    </CardBase>
  );
};
