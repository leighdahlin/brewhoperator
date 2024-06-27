import React from 'react';
import homepageVideo from './videos/brewhoperator-homepage.hevc.mp4';
import SearchForm from '../common/BrewerySearchForm';

const HeroVideo: React.FC = () => {
  return (
    <div className="flex flex-col justify-start overflow-hidden">
      <div className="bg-black h-screen relative">
        <div className="relative flex flex-col items-start sm:items-center justify-center w-full h-full left-0 mx-auto p-[1.25rem] text-center top-0 z-10">
          <div className="h-full w-full flex flex-col items-center pt-[5rem] sm:justify-center gap-[0.25rem]">
            <h1 className="text-soft-white text-center text-4xl md:text-5xl mb-0 uppercase font-nectarine">
              Discover Brews Near You
            </h1>
            <p className="max-w-[500px] text-soft-white text-md md:text-xl font-medium tracking-[0.25rem] uppercase font-sans mb-[1.5rem]">
              Your Brewery Operator
            </p>
            <SearchForm />
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
};

export default HeroVideo;


