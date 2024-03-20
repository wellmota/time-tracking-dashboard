import Image from "next/image"
import ProfilePicture from "@/images/image-jeremy.png"

export default function Avatar({ src }) {
  return (
    <Image
      src={src ? src : ProfilePicture}
      alt="User Avatar"
      className=" h-20 w-20 rounded-full border-4"
    />
  )
}
