"use client"
import { useState, useEffect } from "react"
import { RadioLink } from "@/components/inputs/RadioLink"

export default function SortFilter({ onFilterSelect }) {
  // Recebe onFilterSelect como prop
  const [selectedFilter, setSelectedFilter] = useState("daily")

  const handleFilterSelect = (filter) => setSelectedFilter(filter)

  useEffect(() => {
    onFilterSelect(selectedFilter)
  }, [selectedFilter, onFilterSelect])

  return (
    <div className="flex flex-row justify-between sm:flex-col text-xl content px-10 sm:gap-y-3 font-light text-neutralDesaturatedBlue">
      <RadioLink
        id="daily"
        className="hidden"
        type="radio"
        name="filter"
        value="daily"
        checked={selectedFilter === "daily"}
        onChange={() => handleFilterSelect("daily")}
      >
        Daily
      </RadioLink>
      <RadioLink
        id="weekly"
        className="hidden"
        type="radio"
        name="filter"
        value="weekly"
        checked={selectedFilter === "weekly"}
        onChange={() => handleFilterSelect("weekly")}
      >
        Weekly
      </RadioLink>
      <RadioLink
        id="Monthly"
        className="hidden"
        type="radio"
        name="filter"
        value="monthly"
        checked={selectedFilter === "monthly"}
        onChange={() => handleFilterSelect("monthly")}
      >
        Monthly
      </RadioLink>
    </div>
  )
}
