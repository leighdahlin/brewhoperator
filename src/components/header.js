import React, { useState, useEffect, useMemo } from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router";
import useIsMobile from './hooks/useIsMobile';
import Logo from "./Logo";
import BrewerySearchForm from "./common/BrewerySearchForm";
import useLocationStore from "../stores/common/useLocationStore";
import useSearchStore from "../stores/search/useSearchStore";
import { TfiMapAlt, TfiIdBadge, TfiBook } from "react-icons/tfi";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const setLocation = useLocationStore((state) => state.setLocation);
  const pathname = useLocationStore((state) => state.pathname);
  const clearSearch = useSearchStore((state) => state.clearSearch);
  const isMobile = useIsMobile(640)

  useEffect(() => {
    setLocation(location.pathname);
  }, [location.pathname, setLocation]);

  useEffect(() => {
    clearSearch();
  }, [clearSearch]);

  const isHomePage = useMemo(()=>{
    return pathname === "/";
  },[pathname])
  const links = [
    {
      section: 'Create Hop',
      icon: <TfiMapAlt size={24} color={`#6A6A6A`}/>,
      defaultLink:'/brew-crawl/',
      links: [
        {
          displayName: 'Create Brewery Crawl',
          link: '/brew-crawl/',
        },
        {
          displayName: 'Brew AI',
          link: '/brew-ai/',

        },
      ]
    },
    {
      section: 'Learn',
      defaultLink:'/beer-guide/',
      icon:<TfiBook size={24} color={`#6A6A6A`}/>,
      links: [
        {
          displayName: 'Beer Guide',
          link: '/beer-guide/',
        },
        {
          displayName: 'Blog',
          link: '/blog/',
        },
      ]
    },
    {
      section: 'Profile',
      icon: <TfiIdBadge size={26} color={`#6A6A6A`}/>,
      defaultLink:'/login/',
      links: [
        {
          displayName: 'Login',
          link: '/login/',
        },
      ]
    }
  ];

  return (
  <header className={`${isHomePage ? "absolute" : "relative border-b-2 border-gray"} top-0 z-[1000] flex justify-center w-full`}>
      <div className={`flex flex-row ${isHomePage ? "justify-center sm:justify-between":"justify-between"} w-full items-center mx-auto pl-[0.5rem] pr-[1rem] sm:px-[1.5625rem] my-5`}>
        <Link to="/" className="pr-[1rem]">
          <Logo />
        </Link>
        {!isHomePage && <BrewerySearchForm/>}
        <nav className={`fixed bottom-0 left-0 w-full ${isHomePage? "sm:bg-transparent bg-white":"bg-white"} sm:relative sm:w-auto sm:bg-transparent sm:border-none z-[500]`}>
        <button type="button" onClick={() => {setNavOpen(!navOpen) }} className={`hidden sm:flex relative h-[40px] w-[40px] rounded-full border border-border ${isHomePage? "bg-transparent hover:bg-white":"bg-white"} items-center justify-center hover:shadow-nav ${navOpen? "shadow-nav":""}`} aria-label="Open/Close Menu">
            <div className={`h-[2px] w-full bg-dark-golden absolute left-[50%] top-[50%] transition-all duration-250 ease-in transform translate-x-[-50%] translate-y-[-50%]`} style={{ maxWidth: '20px', marginTop: '-5px' }} />
            <div className={`h-[2px] w-full bg-dark-golden absolute left-[50%] top-[50%] transition-all duration-250 ease-in transform translate-x-[-50%] translate-y-[-50%]`} style={{ maxWidth: '20px' }} />
            <div className={`h-[2px] w-full bg-dark-golden absolute left-[50%] top-[50%] transition-all duration-250 ease-in transform translate-x-[-50%] translate-y-[-50%]`} style={{ maxWidth: '20px', marginTop: '5px' }} />
        </button>
        {navOpen && (
          <div className="absolute top-[50px] right-0 py-2 bg-white rounded-md flex flex-col w-[225px] border-[1px] border-border">
            {links.map((u) => {
                return (
                  <ul key={u.section} className="list-none m-0 pb-2 pt-2 first:pt-0 border-b-[1px] border-border last:border-b-0 last:pb-0">
                    {u.links.map((l)=>(
                      <li key={l.displayName} className="group relative m-0 hover:bg-gray">
                      <Link
                        to={l.link}
                        className={`block text-sm font-medium text-black no-underline m-0 w-full px-4 py-2`}
                      >
                        {l.displayName}
                      </Link>
                    </li>
                    ))}
                  </ul>
                )
              })}
          </div>
        )}
        {isMobile && (
          <div className="flex py-3 border-t-[1px] border-border">
          {links.map((u) => {
            return (
              <Link to={u.defaultLink} className="flex flex-col items-center w-[33%] no-underline">
                    {u.icon}
                <span className="mt-2 text-xs text-foggyGrey">{u.section}</span>
              </Link>
            )
          })}
          </div>
        )}
        </nav>
      </div>
    </header>
  )
}
