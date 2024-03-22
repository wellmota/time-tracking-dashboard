"use client"
import { useState, useEffect } from "react"
import { useFetch } from "@/hooks/useFetch"
import { Container } from "@/components/layout/Container"
import { Column } from "@/components/layout/Column"
import { ProfileCard } from "@/components/cards/ProfileCard"
import { TimeTrackCard } from "@/components/cards/TimeTrackCard"
import { LoadingSpinner } from "@/components/navigation/LoadingSpinner"

export default function Dashboard() {
  const [selectedFilter, setSelectedFilter] = useState("daily")
  const [animationKey, setAnimationKey] = useState(0)

  const { data: timeEntries, isFetching } = useFetch(
    "http://localhost:9000/dashboard"
  )

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter)
    setAnimationKey((prevKey) => prevKey + 1)
  }

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
