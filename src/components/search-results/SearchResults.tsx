import React, { useEffect, useState, useMemo } from "react";
import { useLocation, navigate } from "@reach/router";
import queryString from "query-string";
import BreweryCard from "./BreweryCard";
import loadable from '@loadable/component';
import US_STATES from "./const"
import useSearchStore from "../../stores/search/useSearchStore";

interface Brewery {
    id: string;
    name: string;
    brewery_type: string;
    address_1: string;
    address_2: string | null;
    address_3: string | null;
    city: string;
    state_province: string;
    postal_code: string;
    country: string;
    longitude: string | null;
    latitude: string | null;
    phone: string;
    website_url: string;
    state: string;
    street: string;
}

const LoadableBreweryMap = loadable(() => import('./BreweryMap'));

const SearchResults = () => {
    const location = useLocation();
    const { query } = queryString.parse(location.search);
    const [breweries, setBreweries] = useState<Brewery[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const setSearch = useSearchStore((state) => state.setSearchQuery);

    useEffect(() => {
        if (query) {
            setSearch(query as string)
            fetchBreweries(query as string);
        } else {
            setLoading(false);
        }
    }, [query]);

    const fetchBreweries = (searchQuery: string) => {
        setLoading(true);
        let apiUrl = '';

            // Determine if the search query is a state, city, or zip code
        if (/^\d{5}(-\d{4})?$/.test(searchQuery)) {
            // Zip code
            apiUrl = `https://api.openbrewerydb.org/v1/breweries?by_postal=${searchQuery}`;
        } else if (US_STATES.map((state: string) => state.toLowerCase()).includes(searchQuery)) {
            // State
            apiUrl = `https://api.openbrewerydb.org/v1/breweries?by_state=${searchQuery.replace(/ /g, '_')}`;
        } else {
            // City
            apiUrl = `https://api.openbrewerydb.org/v1/breweries?by_city=${searchQuery.replace(/ /g, '_')}`;
        }
        
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                console.log(data)
                setBreweries(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    };

    const toTitleCase = (str: string) => {
        return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };    

    const getDisplayLocation = useMemo(() => {
        if(query){
            if (/^\d{5}(-\d{4})?$/.test(query as string)) {
                // Zip code
                return `# ${query}`;
            } else if (US_STATES.map((state: string) => state.toLowerCase()).includes((query as string).toLowerCase())) {
                // State
                return toTitleCase(query as string);
            } else if (breweries.length > 0) {
                // City, return city and state
                const city = breweries[0].city;
                const state = toTitleCase(breweries[0].state_province);
                return `${city}, ${state}`;
            }
            return query;
        }
        return "";
    }, [query, breweries]);
    

    if (loading) {
        return (
            <div className="flex flex-col h-[calc(100vh-90px)] items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col h-[calc(100vh-90px)]">
                <p>Error:{error}</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-[calc(100vh-90px)]">
            {!!breweries.length && (
            <>
                <div className="p-4 border-b-2 border-gray text-sm font-semibold">
                    {breweries.length === 50 ? "Over 50":breweries.length} brewer{breweries.length > 1 ? "ies":"y"} found in {getDisplayLocation}
                </div>
            
                <div className="h-full flex-1">
                    {/* <h1 className="text-3xl font-bold text-[#734E39] mb-6">Breweries in {query}</h1> */}
                    <LoadableBreweryMap breweries={breweries} />
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {breweries.map(brewery => (
                            <BreweryCard key={brewery.id} {...brewery} />
                        ))}
                    </div> */}
                </div>
            </>
            )}
            {!!query && !breweries.length && (
                <div className="flex items-center justify-center h-full w-full">
                    <p>No breweries found for "{query}".</p>
                </div>
            )}
        </div>
    );
};

export default SearchResults;


   
