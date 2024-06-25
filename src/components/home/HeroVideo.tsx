import React, { useState } from "react";
import { navigate } from "gatsby";
import homepageVideo from "./videos/brewhoperator-homepage.hevc.mp4";
import { StaticImage } from "gatsby-plugin-image";

export default function HeroVideo() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        const trimmedQuery = searchQuery.trim().toLowerCase();

        // Regex to validate city, state, or zip code
        const cityStateZipRegex = /^([a-zA-Z\s,]+|\d{5}(?:-\d{4})?)$/;

        if (cityStateZipRegex.test(trimmedQuery) && trimmedQuery.length > 0) {
            setError('');
            navigate(`/search?query=${encodeURIComponent(trimmedQuery)}`);
        } else {
            setError('Please enter a valid city, state, or zip code.');
        }
    };

    return (
        <div className="flex flex-col justify-start overflow-hidden">
            <div className="bg-black h-screen relative">
                <div className="relative flex flex-col items-center justify-center w-full h-full left-0 mx-auto p-[1.25rem] text-center top-0 z-10">
                    <div className="h-full flex flex-col items-center justify-center gap-[0.25rem]">
                        <h1 className="text-soft-white text-5xl mb-0 uppercase font-nectarine">Discover Brews Near You</h1>
                        <p className="max-w-[450px] text-soft-white text-xl font-medium tracking-[0.25rem] uppercase font-sans mb-[1.5rem]">Find Your Next Favorite Spot</p>
                        <div className="flex gap-[0.5rem]">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchInputChange}
                                aria-label="beer search"
                                placeholder="City, State, or Zip"
                                className="px-[10px] py-[5px] rounded-md focus:outline-none border-b-[1px] bg-softOpal text-navySmoke dark:text-softOpal dark:bg-navySmoke border-navySmoke dark:border-softOpal placeholder:font-sans font-medium font-sans"
                            />
                            <button onClick={handleSearch} className="group">
                                <StaticImage
                                    src="./images/empty-cheers-btn.png"
                                    alt="Brew Hoperator logo"
                                    height={68}
                                    width={100}
                                    placeholder="blurred"
                                    className="w-[55px] group-hover:w-0"
                                />
                                <StaticImage
                                    src="./images/cheers-btn.png"
                                    alt="Brew Hoperator logo"
                                    height={68}
                                    width={100}
                                    placeholder="blurred"
                                    className="w-0 group-hover:w-[55px]"
                                />
                            </button>
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                </div>
                <video
                    id="home-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden={true}
                    src={homepageVideo}
                    className="w-full h-full bg-black object-cover absolute overflow-clip top-0 opacity-75"
                />
            </div>
        </div>
    );
}

