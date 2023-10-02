"use client";

import { FilterType } from "@/types/filter-types";
import React, { ReactNode } from "react";

export const FilterContext = React.createContext({
  search: "",
  page: 0,
  type: FilterType.ALL,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
});

interface ProviderProps {
  children: ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [type, setType] = React.useState(FilterType.ALL);

  return (
    <FilterContext.Provider
      value={{ search, page, type, setSearch, setPage, setType }}
    >
      {children}
    </FilterContext.Provider>
  );
}
