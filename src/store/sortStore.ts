import { SortValue } from "@/Types/global";
import { create } from "zustand";

interface SortState {
  value: SortValue
}

interface SortStroeAction {
  setValue: (value: SortValue) => void
}

export const SortStroe = create<SortState & SortStroeAction>((set) => {
  return {
    value: 'latest',
    setValue: (value) => {
      set({ value })
    }
  }
})