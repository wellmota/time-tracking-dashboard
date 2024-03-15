"use client";
import { useState, useEffect } from "react";

export default function SortFilter({ onFilterSelect }) {
  // Recebe onFilterSelect como prop
  const [selectedFilter, setSelectedFilter] = useState("daily");

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
  };

  useEffect(() => {
    onFilterSelect(selectedFilter); // Chama a função de retorno de chamada quando o filtro é selecionado
  }, [selectedFilter]);

  return (
    <div className="text-2xl content px-10 flex flex-col gap-y-5 font-light">
      <label>
        <input
          type="radio"
          name="filter"
          value="daily"
          checked={selectedFilter === "daily"}
          onChange={() => handleFilterSelect("daily")}
        />
        Daily
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="monthly"
          checked={selectedFilter === "monthly"}
          onChange={() => handleFilterSelect("monthly")}
        />
        Monthly
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="weekly"
          checked={selectedFilter === "weekly"}
          onChange={() => handleFilterSelect("weekly")}
        />
        Weekly
      </label>
    </div>
  );
}
