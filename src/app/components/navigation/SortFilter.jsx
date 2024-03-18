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
    <div className="text-2xl content px-10 flex flex-col gap-y-5 font-light text-neutralDesaturatedBlue">
      <input
        id="daily"
        className="hidden"
        type="radio"
        name="filter"
        value="daily"
        checked={selectedFilter === "daily"}
        onChange={() => handleFilterSelect("daily")}
      />
      <label
        className="cursor-pointer focus:outline-none checked:text-white hover:text-white"
        htmlFor="daily"
      >
        Daily
      </label>

      <label
        className="cursor-pointer focus:outline-none peer-checked:text-white hover:text-white"
        htmlFor="weekly"
      >
        <input
          id="weekly"
          className="hidden"
          type="radio"
          name="filter"
          value="weekly"
          checked={selectedFilter === "weekly"}
          onChange={() => handleFilterSelect("weekly")}
        />
        Weekly
      </label>
      <label
        className="cursor-pointer focus:outline-none peer-checked:text-white hover:text-white"
        htmlFor="monthly"
      >
        <input
          id="monthly"
          className="hidden"
          type="radio"
          name="filter"
          value="monthly"
          checked={selectedFilter === "monthly"}
          onChange={() => handleFilterSelect("monthly")}
        />
        Monthly
      </label>
    </div>
  );
}
