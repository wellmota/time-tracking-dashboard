import CardBase from "../layout/CardBase";
import CardCategory from "../layout/CardCategory";
import CardContent from "../layout/CardContent";
import ActionTitle from "../../navigation/ActionTitle";
import { camelCase } from "../../../utils/stringUtils";

export const TimeTrackCard = ({ props, filter }) => {
  const { title, timeframes } = props;
  const { daily, weekly, monthly } = timeframes;
  let timeFrame = [];
  const filterFeedback = (filter) => {
    switch (filter) {
      case "daily":
        return { label: "Yesterday", timeFrame: daily };
      case "weekly":
        timeFrame = weekly;
        return { label: "Lest Week", timeFrame: weekly };
      case "monthly":
        timeFrame = monthly;
        return { label: "Last Month", timeFrame: monthly };
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
          <h2 className="text-5xl font-extralight ">
            {filterFeedback(filter).timeFrame.current}hrs
          </h2>
          <p className="text-neutralPaleBlue ">
            {filterFeedback(filter).label} - {timeFrame.previous}hrs
          </p>
        </div>
      </CardContent>
    </CardBase>
  );
};
