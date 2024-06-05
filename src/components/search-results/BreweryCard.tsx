import React from "react";

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

const BreweryCard: React.FC<Brewery> = ({
    name,
    brewery_type,
    address_1,
    address_2,
    address_3,
    city,
    state_province,
    postal_code,
    country,
    phone,
    website_url,
    street
}) => {
    return (
        <div className="bg-[#FAFAFA] shadow-lg rounded-lg p-6 mb-6 border-l-4 border-[#EFBE4F]">
            <h2 className="text-2xl font-bold text-[#734E39]">{name}</h2>
            <p className="text-sm text-[#96451E] uppercase mb-2">{brewery_type}</p>
            <p className="text-[#734E39]">{street}</p>
            <p className="text-[#734E39]">
                {city}, {state_province} {postal_code}
            </p>
            <p className="text-[#734E39]">{country}</p>
            {address_2 && <p className="text-[#734E39]">{address_2}</p>}
            {address_3 && <p className="text-[#734E39]">{address_3}</p>}
            <p className="text-[#734E39]">Phone: {phone}</p>
            <a href={website_url} className="text-[#AAC87B] underline">
                {website_url}
            </a>
        </div>
    );
};

export default BreweryCard;
