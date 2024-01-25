import { create } from "zustand";
import { GuestCount } from "@/types";

type State = {
  status: "idle" | "loading";
  guestCount: GuestCount;
};

type Action = {
  setLoading: () => void;
  setIdle: () => void;
};

export const useStore = create<State & Action>((set) => ({
  status: "idle",
  guestCount: {
    adult: 2,
    children: 0,
  },
  setLoading: () => set((state: any) => ({ status: "loading" })),
  setIdle: () => set((state: any) => ({ status: "idle" })),
  setAdultCount: (type: "-" | "+") =>
    set((state: any) => ({
      guestCount: {
        ...state.guestCount,
        adult:
          type === "-"
            ? state.guestCount.adult - 1
            : state.guestCount.adult + 1,
      },
    })),
  setChildrenCount: (type: "-" | "+") =>
    set((state: any) => ({
      guestCount: {
        ...state.guestCount,
        children:
          type === "-"
            ? state.guestCount.children - 1
            : state.guestCount.children + 1,
      },
    })),
}));
