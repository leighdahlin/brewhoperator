import { create } from 'zustand';

export interface LocationState {
  pathname: string;
  setLocation: (path: string) => void;
}

const useLocationStore = create<LocationState>((set) => ({
  pathname: '',
  setLocation: (path: string) => set({ pathname: path })
}));

export default useLocationStore;

