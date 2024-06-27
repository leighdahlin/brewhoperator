import { create } from 'zustand';
import { navigate } from 'gatsby';
import { ChangeEvent, FormEvent } from 'react';

interface SearchState {
  searchQuery: string;
  error: string;
  isSearchNavigating: boolean;
  setSearchQuery: (query: string) => void;
  setError: (error: string) => void;
  handleSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
  clearSearch: () => void;
  setSearchNavigating: (isNavigating: boolean) => void;
}

const useSearchStore = create<SearchState>((set) => ({
  searchQuery: '',
  error: '',
  isSearchNavigating: false,
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  setError: (error: string) => set({ error }),
  handleSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => set({ searchQuery: e.target.value }),
  handleSearch: (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    set((state) => {
      const trimmedQuery = state.searchQuery.trim().toLowerCase();

      // Regex to validate city, state, or zip code
      const cityStateZipRegex = /^([a-zA-Z\s,]+|\d{5}(?:-\d{4})?)$/;

      if (cityStateZipRegex.test(trimmedQuery) && trimmedQuery.length > 0) {
        set({ isSearchNavigating: true });
        navigate(`/search?query=${encodeURIComponent(trimmedQuery)}`);
        return { error: '' };
      } else {
        return { error: 'Please enter a valid city, state, or zip code.' };
      }
    });
  },
  clearSearch: () => set({ searchQuery: '', error: '', isSearchNavigating: false }),
  setSearchNavigating: (isNavigating: boolean) => set({ isSearchNavigating: isNavigating })
}));

export default useSearchStore;





