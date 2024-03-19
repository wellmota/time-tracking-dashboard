import CardBase from "@/components/cards/layout/CardBase";
import CardCategory from "@/components/cards/layout/CardCategory";
import CardContent from "@/components/cards/layout/CardContent";
import ActionTitle from "@/components/navigation/ActionTitle";
import { camelCase } from "../../../../utils/stringUtils";

export const TimeTrackCard = ({ props, filter }) => {
  // Destructure props to extract title and timeframes
  const { title, timeframes } = props;
  const { daily, weekly, monthly } = timeframes;

  // Function to determine filter feedback based on the selected filter
  const filterFeedback = (filter) => {
    let label = "";
    let timeFrame = {};

    // Switch to handle different filter cases
    switch (filter) {
      case "daily":
        label = "Yesterday";
        timeFrame = { current: daily.current, previous: daily.previous };
        break;
      case "weekly":
        label = "Last Week";
        timeFrame = { current: weekly.current, previous: weekly.previous };
        break;
      case "monthly":
        label = "Last Month";
        timeFrame = { current: monthly.current, previous: monthly.previous };
        break;
      default:
        break;
    }

    return { label, timeFrame };
  };

  // Camel case conversion for category
  const category = camelCase(title);

  const { label, timeFrame } = filterFeedback(filter);

  return (
    <CardBase category={category}>
      <CardCategory category={category} />
      <CardContent>
        <ActionTitle title={title} />
        <div className="flex flex-row lg:flex-col justify-between">
          <h2 className="text-5xl font-extralight transition-opacity duration-500 delay-200 ">
            {timeFrame.current}hrs
          </h2>
          <p className="self-center md:self-start text-neutralPaleBlue transition-opacity duration-500 delay-200">
            {label} - {timeFrame.previous}hrs
          </p>
        </div>
      </CardContent>
    </CardBase>
  );
};
