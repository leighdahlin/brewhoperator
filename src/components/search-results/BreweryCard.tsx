import React from "react";
import { parsePhoneNumberFromString, CountryCode } from 'libphonenumber-js';
import { countryNameToCode } from '../../utils/countryCodes'

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

const BreweryCard: React.FC<Brewery> = ({
    name,
    brewery_type,
    address_1,
    address_2,
    address_3,
    city,
    state_province,
    country,
    phone,
    website_url,
    street,
    state
}) => {
    const formatPhoneNumber = (phone: string, country: string) => {
        const countryCode = countryNameToCode[country] as CountryCode | undefined;
        if (!countryCode) {
            return 'N/A';
        }
        const phoneNumber = parsePhoneNumberFromString(phone, countryCode);
        return phoneNumber ? phoneNumber.formatInternational() : 'N/A';
    };

    return (
        <div className="bg-[#FAFAFA] shadow-lg rounded-lg p-6 mb-6 border-l-4 border-[#EFBE4F]">
            <h2 className="text-2xl font-bold text-[#734E39] font-nectarine">{name || 'Unknown Brewery'}</h2>
            <p className="text-sm text-[#96451E] uppercase mb-2">{brewery_type || 'Unknown Type'}</p>
            <p className="text-[#734E39] mb-3">{street || address_1 || 'Address not available'}</p>
            {address_2 && <p className="text-[#734E39]">{address_2}</p>}
            {address_3 && <p className="text-[#734E39]">{address_3}</p>}
            <p className="text-[#734E39] mb-3">
                {city}, {state_province || state}, {country}
            </p>
            <p className="text-[#734E39]">Phone: {phone ? formatPhoneNumber(phone, country) : 'N/A'}</p>
            {website_url && (
            <a href={website_url || '#'} className="text-[#AAC87B] underline">
                Launch Website
            </a>
            )}

        </div>
    );
};

export default BreweryCard;

