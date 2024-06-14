import { create } from "zustand";

const useStore = create((set) => ({
  isLoggedIn: false,
  newParams: {},
  setNewParams: (id) => set((state) => ({ newParams: id })),
  setIsLoggedIn: (data) => set((state) => ({ isLoggedIn: data })),
}));


export default useStore
