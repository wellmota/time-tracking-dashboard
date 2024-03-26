"use client"
import { useState, useCallback } from "react"
import axios from "axios"
import { Container } from "@/components/layout/Container"
import { Column } from "@/components/layout/Column"
import { ProfileCard } from "@/components/cards/ProfileCard"
import { TimeTrackCard } from "@/components/cards/TimeTrackCard"
import { LoadingSpinner } from "@/components/navigation/LoadingSpinner"
import { useQuery } from "@tanstack/react-query"

export default function Dashboard() {
  const { data: timeEntries, isFetching } = useQuery({
    queryKey: ["timeEntries"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:9000/dashboard")
      return response.data
    },
  })

  const [selectedFilter, setSelectedFilter] = useState("daily")
  const [animationKey, setAnimationKey] = useState(0)

  const handleFilterSelect = useCallback(
    (filter) => {
      setSelectedFilter(filter)
      setAnimationKey((prevKey) => prevKey + 1)
    },
    [setSelectedFilter, setAnimationKey]
  )

  return (
    <main className="flex min-h-screen flex-col justify-center p-4 md:p-24">
      <Container>
        {isFetching ? (
          <LoadingSpinner /> // Show spinner Loading
        ) : (
          // Show content
          <>
            <ProfileCard onFilterSelect={handleFilterSelect} />
            <Column>
              {timeEntries.map((item, index) => (
                <TimeTrackCard
                  key={index}
                  title={item.title}
                  timeframes={item.timeframes}
                  filter={selectedFilter}
                  animationKey={animationKey}
                />
              ))}
            </Column>
          </>
        )}
      </Container>
    </main>
  )
}
