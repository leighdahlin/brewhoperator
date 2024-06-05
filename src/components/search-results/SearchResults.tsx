import React, { useEffect, useState } from "react";
import { useLocation } from "@reach/router";
import queryString from "query-string";
import BreweryCard from "./BreweryCard";

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
    longitude: string;
    latitude: string;
    phone: string;
    website_url: string;
    state: string;
    street: string;
}

const SearchResults = () => {
    const location = useLocation();
    const { query } = queryString.parse(location.search);
    const [breweries, setBreweries] = useState<Brewery[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (query) {
            fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${query}`)
                .then(response => response.json())
                .then(data => {
                    setBreweries(data);
                    setLoading(false);
                })
                .catch(error => {
                    setError('Failed to fetch data');
                    setLoading(false);
                });
        }
    }, [query]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-[#734E39] mb-6">Breweries in {query}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {breweries.map(brewery => (
                    <BreweryCard key={brewery.id} {...brewery} />
                ))}
            </div>
        </div>
    );
};

export default SearchResults;

       
