import React, {useState} from "react";
import homepageVideo from "./videos/brewhoperator-homepage.hevc.mp4";

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
                    <div className="h-full flex flex-col items-center justify-center gap-[1rem]">
                        <h1 className="text-white text-5xl mb-0">Start Your Search</h1>
                        <p className="max-w-[350px] text-white text-xl">A world of breweries awaits.</p>
                        <input type="text" value={searchQuery} onChange={handleSearchInputChange} placeholder="City, State, or Zip" className="px-[10px] py-[5px] rounded-md focus:outline-none border-b-[1px] bg-softOpal text-navySmoke dark:text-softOpal dark:bg-navySmoke border-navySmoke dark:border-softOpal placeholder:text-black dark:placeholder:text-softOpal font-medium" />
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