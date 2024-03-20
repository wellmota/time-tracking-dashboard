"use client";
import { useState, useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Column } from "@/components/layout/Column";
import { ProfileCard } from "@/components/cards/ProfileCard";
import { TimeTrackCard } from "@/components/cards/TimeTrackCard";
import { LoadingSpinner } from "@/components/navigation/LoadingSpinner";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [timeEntries, setTimeEntries] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("daily");
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:9000/dashboard");
      const data = await response.json();
      setTimeEntries(data);
      setTimeout(() => {
        setLoading(false); // Set loading delay
      }, 3000); //
    };

    fetchData();
  }, []);

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  return (
    <main className="flex min-h-screen flex-col justify-center p-4 md:p-24">
      <Container>
        {loading ? (
          <LoadingSpinner /> // Show loading while loading state is true
        ) : (
          // show content after loading
          <>
            <ProfileCard onFilterSelect={handleFilterSelect} />
            <Column>
              {timeEntries.map((item, index) => (
                <TimeTrackCard
                  key={index}
                  props={item}
                  filter={selectedFilter}
                  animationKey={animationKey}
                />
              ))}
            </Column>
          </>
        )}
      </Container>
    </main>
  );
}
