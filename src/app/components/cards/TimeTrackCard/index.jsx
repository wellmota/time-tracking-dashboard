import CardBase from "@/components/cards/layout/CardBase";
import CardCategory from "@/components/cards/layout/CardCategory";
import CardContent from "@/components/cards/layout/CardContent";
import ActionTitle from "@/components/navigation/ActionTitle";
import { camelCase } from "@/utils/stringUtils";

export const TimeTrackCard = ({ title, timeframes, filter, animationKey }) => {
  // Function to determine filter feedback based on the selected filter
  const filterFeedback = (filter) => {
    const timeInformation = { label: "", timeFrame: {} };

    // Switch to handle different filter cases
    switch (filter) {
      case "weekly":
        timeInformation.label = "Last Week";
        timeInformation.timeFrame = {
          current: timeframes.weekly.current,
          previous: timeframes.weekly.previous,
        };
        break;
      case "monthly":
        timeInformation.label = "Last Month";
        timeInformation.timeFrame = {
          current: timeframes.monthly.current,
          previous: timeframes.monthly.previous,
        };
        break;
      case "daily":
      default:
        timeInformation.label = "Yesterday";
        timeInformation.timeFrame = {
          current: timeframes.daily.current,
          previous: timeframes.daily.previous,
        };
        break;
    }

    return timeInformation;
  };

  const { label, timeFrame } = filterFeedback(filter);

  return (
    <CardBase category={camelCase(title)}>
      <CardCategory category={camelCase(title)} />
      <CardContent>
        <ActionTitle title={title} />
        <div
          key={animationKey}
          className="flex flex-row lg:flex-col justify-between"
        >
          <h2
            key={animationKey}
            className="text-5xl font-extralight animate-fade-right animate-once animate-delay-100 animate-ease-out"
          >
            {timeFrame.current}hrs
          </h2>
          <p
            key={animationKey}
            className="self-center md:self-start text-neutralPaleBlue animate-fade animate-once animate-delay-300"
          >
            {label} - {timeFrame.previous}hrs
          </p>
        </div>
      </CardContent>
    </CardBase>
  );
};
