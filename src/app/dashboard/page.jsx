'use client'

import { ProfileCard } from '@/components/cards/ProfileCard'
import { TimeTrackCard } from '@/components/cards/TimeTrackCard'
import { Column } from '@/components/layout/Column'
import { Container } from '@/components/layout/Container'
import { LoadingSpinner } from '@/components/navigation/LoadingSpinner'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { useCallback, useState } from 'react'

export default function Dashboard() {
  const {
    data: timeEntries,
    isFetching,
    error,
  } = useQuery({
    queryKey: ['timeEntries'],
    queryFn: async () => {
      const response = await axios.get('/api/dashboard')
      return response.data
    },
  })

  const [selectedFilter, setSelectedFilter] = useState('daily')
  const [animationKey, setAnimationKey] = useState(0)

  const handleFilterSelect = useCallback(
    (filter) => {
      setSelectedFilter(filter)
      setAnimationKey((prevKey) => prevKey + 1)
    },
    [setSelectedFilter, setAnimationKey]
  )

  // Show loading spinner while fetching
  if (isFetching) {
    return (
      <main className='flex min-h-screen flex-col justify-center p-4 md:p-24'>
        <Container>
          <LoadingSpinner />
        </Container>
      </main>
    )
  }

  // Show error if something went wrong
  if (error) {
    return (
      <main className='flex min-h-screen flex-col justify-center p-4 md:p-24'>
        <Container>
          <div className='text-center text-red-500'>
            <h2 className='text-xl font-bold mb-2'>Error loading data</h2>
            <p>{error.message}</p>
          </div>
        </Container>
      </main>
    )
  }

  // Ensure timeEntries is an array and has data
  const entries = Array.isArray(timeEntries) ? timeEntries : []

  return (
    <main className='flex min-h-screen flex-col justify-center p-4 md:p-24'>
      <Container>
        {entries.length === 0 ? (
          <div className='text-center text-gray-500'>
            <h2 className='text-xl font-bold mb-2'>No data available</h2>
            <p>Please try refreshing the page</p>
          </div>
        ) : (
          <>
            <ProfileCard onFilterSelect={handleFilterSelect} />
            <Column>
              {entries.map((item, index) => (
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
