import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function ComingSoon(){
    return (
        <div className="h-[calc(100vh-76px)] w-screen flex flex-col justify-center items-center">
                        <h1 className="font-bold text-[#734E39] text-[3rem] font-nectarine">Page Coming Soon</h1>

            <StaticImage 
                src="../images/hopglass.png" 
                alt="beer glass" 
                height={500} 
                width={500} 
                placeholder="blurred" 
            />
        </div>
    )
}