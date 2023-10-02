"use client";

import { FilterTypes } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";
import React, { ReactNode } from "react";

export const FilterContext = React.createContext({
  search: "",
  page: 0,
  type: FilterTypes.ALL,
  priority: PriorityTypes.POPULARITY,
  setPriority: (value: PriorityTypes) => {},
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterTypes) => {},
});

interface ProviderProps {
  children: ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [type, setType] = React.useState(FilterTypes.ALL);
  const [priority, setPriority] = React.useState(PriorityTypes.POPULARITY);

  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        priority,
        setSearch,
        setPage,
        setType,
        setPriority,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
