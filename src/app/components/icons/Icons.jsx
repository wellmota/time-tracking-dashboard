import Image from "next/image";

import Exercise from "../../images/icon-exercise.svg";
import Play from "../../images/icon-play.svg";
import SelfCare from "../../images/icon-self-care.svg";
import Social from "../../images/icon-social.svg";
import Study from "../../images/icon-study.svg";
import Work from "../../images/icon-work.svg";

export default function Icons({ category }) {
  const iconsList = {
    exercise: Exercise,
    play: Play,
    selfCare: SelfCare,
    social: Social,
    study: Study,
    work: Work,
  };
  const icon = iconsList[category];
  return <Image src={icon} alt={category} className="self-start mt-[-16px]" />;
}
