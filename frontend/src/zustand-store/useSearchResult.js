
import { create } from "zustand";
export const useSearchResults = create((set) => ({
	SearchResult: [],
	setSearchResult: (SearchResult) => set({SearchResult}),
}));