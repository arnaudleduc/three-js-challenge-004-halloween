import {create} from 'zustand'

const useGemsStore = create((set) => ({
        /**
         * Handle gem count
         */
        gemCount: 0,
        increaseGemCount: () => set((state) => ({ gemCount: state.gemCount + 1 })),
        watchScene: true,
        hidePostGameInterface: () => set((state) => ({ watchScene: false}))
}))

export default useGemsStore