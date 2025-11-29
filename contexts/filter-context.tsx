"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { FilterState, ThematicArea } from "@/lib/types/dashboard"

interface FilterContextType {
  filters: FilterState
  setThematicArea: (area: ThematicArea) => void
  setDateRange: (range: { start: string; end: string } | null) => void
  setDonor: (donor: string | null) => void
  setStatus: (status: string | null) => void
  resetFilters: () => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

const defaultFilters: FilterState = {
  thematicArea: "all",
  dateRange: null,
  donor: null,
  status: null,
}

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FilterState>(defaultFilters)

  const setThematicArea = (area: ThematicArea) => {
    setFilters((prev) => ({ ...prev, thematicArea: area }))
  }

  const setDateRange = (range: { start: string; end: string } | null) => {
    setFilters((prev) => ({ ...prev, dateRange: range }))
  }

  const setDonor = (donor: string | null) => {
    setFilters((prev) => ({ ...prev, donor }))
  }

  const setStatus = (status: string | null) => {
    setFilters((prev) => ({ ...prev, status }))
  }

  const resetFilters = () => {
    setFilters(defaultFilters)
  }

  return (
    <FilterContext.Provider
      value={{
        filters,
        setThematicArea,
        setDateRange,
        setDonor,
        setStatus,
        resetFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export function useFilters() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error("useFilters must be used within a FilterProvider")
  }
  return context
}
