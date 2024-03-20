import { Icons } from "@/components/icons/Icons"

export default function CardCategory({ category }) {
  return (
    <figure className="flex justify-end pr-3 overflow-hidden ">
      <div className="h-12">
        <Icons category={category} />
      </div>
    </figure>
  )
}
