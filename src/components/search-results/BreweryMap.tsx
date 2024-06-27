import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from "react-leaflet";
import L, { LatLngTuple } from "leaflet";

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

interface BreweryMapProps {
    breweries: Brewery[];
}

const BreweryMap: React.FC<BreweryMapProps> = ({ breweries }) => {
    const defaultPosition: LatLngTuple = [37.7749, -122.4194]; // Default position (San Francisco)

    const markerIcon = new L.Icon({
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

    const validBreweries = breweries.filter(brewery => brewery.latitude && brewery.longitude);

    const MapEvents = ({ validBreweries }: { validBreweries: Brewery[] }) => {
        const map = useMap();
        useEffect(() => {
            if (map && validBreweries.length > 0) {
                const bounds = validBreweries.map(brewery => [
                    parseFloat(brewery.latitude!),
                    parseFloat(brewery.longitude!)
                ]) as LatLngTuple[];
                map.fitBounds(bounds);
            }
        }, [map, validBreweries]);
        return null;
    };

    return (
        <MapContainer
            center={defaultPosition}
            zoom={4}
            style={{ height: "100%", width: "100%" }}
        >
            <MapEvents validBreweries={validBreweries} />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {validBreweries.map(brewery => (
                <Marker
                    key={brewery.id}
                    position={[parseFloat(brewery.latitude!), parseFloat(brewery.longitude!)] as LatLngTuple}
                    icon={markerIcon}
                >
                    <Tooltip direction="top" offset={[0, -41]} opacity={1} interactive>
                        <div className="p-2 bg-white border border-gray-300 rounded shadow">
                            <strong>{brewery.name}</strong>
                            <br />
                            {brewery.city}, {brewery.state}
                        </div>
                    </Tooltip>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default BreweryMap;









