import create from 'zustand'

const useStore = create((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export const selectOpen = (state) => state.isOpen
export const selectToggleOpen = (state) => state.toggleOpen

export default useStore
