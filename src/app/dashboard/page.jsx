"use client";
import { useState, useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Column } from "@/components/layout/Column";
import { ProfileCard } from "@/components/cards/ProfileCard";
import { TimeTrackCard } from "@/components/cards/TimeTrackCard";
import { LoadingSpinner } from "@/components/navigation/LoadingSpinner";

export default function Dashboard() {
  const [loading, setLoading] = useState(true); // State for loading
  const [timeEntries, setTimeEntries] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("daily");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:9000/dashboard");
      const data = await response.json();
      setTimeEntries(data);
      setLoading(false); // Set loading as complete after api fetch
    };

    fetchData();
  }, []);

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
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
            <Colum>
              {timeEntries.map((item, index) => (
                <TimeTrackCard
                  key={index}
                  props={item}
                  filter={selectedFilter}
                />
              ))}
            </Colum>
          </>
        )}
      </Container>
    </main>
  );
}
