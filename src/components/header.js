import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router";
// import logo from "../images/6.png";
import { StaticImage } from "gatsby-plugin-image";
// import useIsMobile from './hooks/useIsMobile';


export default function Header() {
  // const isMobile = useIsMobile(768);
  // const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const links = [
      {
        displayName: 'FIND BREWS',
        link: '/search/',
      },
      {
        displayName: 'BEER GUIDE',
        link: '/beer-guide/',
      },
      {
        displayName: 'BREWS & VIEWS BLOG',
        link: '/blog/',
      },
      // {
      //   displayName: 'BREW AI',
      //   link: '/login/',
      // },
      // {
      //   displayName: 'LOGIN',
      //   link: '/login/',
      // },
  ];

return (
<header className={`${isHomePage ? "absolute" : "relative bg-[#734E39] shadow-xl"} top-0 z-40 flex justify-center w-full`}>
      <div className="flex flex-row justify-between w-full max-w-[85.75rem] items-center mx-auto px-[0.875rem] md:px-[1.5625rem] m-2">
        <Link to="/">
          <StaticImage
            src="../images/bh-logo-6.png"
            alt="Brew Hoperator logo"
            height={60}
            width={160}
            placeholder="blurred"
          />
        </Link>
        <nav className="flex flex-row items-center">
          <ul className="hidden sm:flex justify-center items-center list-none gap-[35px] m-0">
            {links.map((l) => {
                const isActive = location.pathname === l.link;
                return (
                  <li key={l.displayName} className="group relative m-0">
                    <Link
                      to={l.link}
                      className="uppercase font-semibold no-underline text-soft-white m-0"
                    >
                      {l.displayName}
                    </Link>
                    <StaticImage 
                      src="../images/nav-foam.png" 
                      alt="beer foam" 
                      height={32} 
                      width={60} 
                      placeholder="none" 
                      className={`!absolute ${isActive ? "!flex" : "!hidden"} group-hover:!flex z-[-1] top-[-15px] right-[-22px] w-[60px]`}
                    />
                  </li>
                );
              })}
          </ul>
        </nav>
      </div>
    </header>
)
}
