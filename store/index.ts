import { create } from "zustand";

type State = {
  status: "idle" | "loading";
};

type Action = {
  setLoading: () => void;
  setIdle: () => void;
};

export const useStore = create<State & Action>((set) => ({
  status: "idle",
  setLoading: () => set((state: any) => ({ status: "loading" })),
  setIdle: () => set((state: any) => ({ status: "idle" })),
}));
