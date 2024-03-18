"use client";
import { useState, useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Colum } from "@/components/layout/Colum";
import { ProfileCard } from "@/components/cards/ProfileCard";
import { TimeTrackCard } from "@/components/cards/TimeTrackCard";

export default function Dashboard() {
  const [timeEntries, setTimeEntries] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("daily");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:9000/dashboard");
      const data = await response.json();
      setTimeEntries(data);
    };

    fetchData();
  }, []);

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <Container>
        <ProfileCard onFilterSelect={handleFilterSelect} />
        <Colum>
          {timeEntries.map((item, index) => (
            <TimeTrackCard key={index} props={item} filter={selectedFilter} />
          ))}
        </Colum>
      </Container>
    </main>
  );
}
