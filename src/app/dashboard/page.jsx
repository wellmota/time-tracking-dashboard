"use client";
import { useState, useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Colum } from "@/components/layout/Colum";
import { ProfileCard } from "@/components/cards/ProfileCard";
import { TimeTrackCard } from "@/components/cards/TimeTrackCard";
import { LoadingSpinner } from "@/components/navigation/LoadingSpinner";

export default function Dashboard() {
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [timeEntries, setTimeEntries] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("daily");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:9000/dashboard");
      const data = await response.json();
      setTimeEntries(data);
      setLoading(false); // Marca o carregamento como completo após receber os dados
    };

    fetchData();
  }, []);

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 h-full">
      <Container>
        {loading ? (
          <LoadingSpinner /> // Mostra o spinner de carregamento se loading for true
        ) : (
          // Mostra o conteúdo normal se loading for false
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
