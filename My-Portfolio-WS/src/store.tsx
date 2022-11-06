import create from 'zustand'

interface PageState {
  currentPage: number
  setPage: (to:number) => void
}

export const usePageStore = create<PageState>()((set) => ({
  currentPage:0,
  setPage: (currentPage) => {
    set({ currentPage })
  }
}))