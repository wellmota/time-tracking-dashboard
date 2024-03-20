import Image from "next/image"
import Ellipsis from "@/images/icon-ellipsis.svg"
import { formatTitle } from "@/utils/stringUtils"

export default function ActionTitle({ title }) {
  const headerTitle = formatTitle(title)
  return (
    <div className="flex flex-row justify-between items-center">
      <p>{headerTitle}</p>
      <button href="" className="flex items-center min-h-6">
        <Image src={Ellipsis} alt="More" />
      </button>
    </div>
  )
}
