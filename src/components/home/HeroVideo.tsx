import React, {useState} from "react";
import homepageVideo from "./videos/brewhoperator-homepage.hevc.mp4";
import { StaticImage } from "gatsby-plugin-image";

export default function HeroVideo(){
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      };

    return (
          <div className="flex flex-col justify-start overflow-hidden">
            <div className="bg-black h-screen relative">
                <div
                    className="relative flex flex-col items-center justify-center w-full h-full left-0 mx-auto p-[1.25rem] text-center top-0 z-10"
                    >
                    <div className="h-full flex flex-col items-center justify-center gap-[0.25rem]">
                        <h1 className="text-white text-5xl mb-0 uppercase font-nectarine">Discover Brews Near You</h1>
                        <p className="max-w-[450px] text-white text-xl font-medium tracking-[0.25rem] uppercase font-sans mb-[1.5rem]">Find Your Next Favorite Spot</p>
                        <div className="flex gap-[0.5rem]">
                            <input type="text" value={searchQuery} onChange={handleSearchInputChange} placeholder="City, State, or Zip" className="px-[10px] py-[5px] rounded-md focus:outline-none border-b-[1px] bg-softOpal text-navySmoke dark:text-softOpal dark:bg-navySmoke border-navySmoke dark:border-softOpal placeholder:font-sans  font-medium font-sans" />
                            <button>
                            <StaticImage
                                src="./images/cheers-button.png"
                                alt="Brew Hoperator logo"
                                height={68}
                                width={100}
                                placeholder="blurred"
                                className="w-[50px]"
                            />
                            </button>
                        </div>
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
    )
}