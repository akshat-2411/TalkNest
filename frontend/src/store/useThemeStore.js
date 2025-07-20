import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("talknest-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("talknest-theme", theme);
    set({ theme });
  },
}));
