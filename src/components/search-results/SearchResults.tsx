import React, { useEffect, useState } from "react";
import { useLocation, navigate } from "@reach/router";
import queryString from "query-string";
import BreweryCard from "./BreweryCard";
import loadable from '@loadable/component';
import US_STATES from "./const"

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
    const [searchQuery, setSearchQuery] = useState<string>(query as string || '');

    useEffect(() => {
        if (query) {
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
            apiUrl = `https://api.openbrewerydb.org/v1/breweries?by_city=${searchQuery}`;
        }
        
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                setBreweries(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    };

    const handleSearch = () => {
        const trimmedQuery = searchQuery.trim().toLowerCase();

        if (trimmedQuery) {
            navigate(`/search?query=${encodeURIComponent(trimmedQuery)}`);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="p-6">
            <div className="mb-6">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by city"
                    className="px-4 py-2 border border-gray-300 rounded"
                />
                <button
                    onClick={handleSearch}
                    className="ml-2 px-4 py-2 bg-[#EFBE4F] text-soft-white rounded"
                >
                    Search
                </button>
            </div>

            {breweries.length > 0 ? (
                <div className="">
                    {/* <h1 className="text-3xl font-bold text-[#734E39] mb-6">Breweries in {query}</h1> */}
                    <LoadableBreweryMap breweries={breweries} />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {breweries.map(brewery => (
                            <BreweryCard key={brewery.id} {...brewery} />
                        ))}
                    </div>
                </div>
            ) : (
                <p>No breweries found for "{query}".</p>
            )}
        </div>
    );
};

export default SearchResults;


   
