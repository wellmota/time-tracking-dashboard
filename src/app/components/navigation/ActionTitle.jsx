import Ellipsis from "../../images/icon-ellipsis.svg";
import Image from "next/image";

export default function ActionTitle({ title }) {
  const formatTitle = (title) => {
    // Check if the string contains more than one word separated by camelCase
    if (title.match(/[A-Z]/g)) {
      // Split the words by the uppercase letter
      const words = title.split(/(?=[A-Z])/);
      // Capitalize the first letter of each word
      const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
      // Join the words with spaces and return the result
      return capitalizedWords.join(" ");
    } else {
      // If it's a single word, capitalize only the first letter
      return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    }
  };
  const headerTitle = formatTitle(title);
  return (
    <div className="flex flex-row justify-between items-center">
      <p>{headerTitle}</p>
      <a href="" className="flex items-center min-h-6">
        <Image src={Ellipsis} alt="More" />
      </a>
    </div>
  );gi
}
