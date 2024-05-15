import React from "react"
import { Link } from "gatsby"
// import logo from "../images/6.png";
import { StaticImage } from "gatsby-plugin-image";
// import useIsMobile from './hooks/useIsMobile';


export default function Header() {
  // const isMobile = useIsMobile(768);
  // const [navOpen, setNavOpen] = useState(false);
  const links = [
      {
        displayName: 'FIND BREWS',
        link: '/findbrews/',
      },
      {
        displayName: 'BEER GUIDE',
        link: '/findbrews/',
      },
      {
        displayName: 'BREWS & VIEWS BLOG',
        link: '/findbrews/',
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
  <header className="absolute top-0 z-40 flex justify-center w-full">
  <div className="flex flex-row justify-between w-full max-w-[85.75rem] items-center relative h-[4.75rem] mx-auto px-[0.875rem] md:px-[1.5625rem] m-5">
    <Link href="/">
      <StaticImage
        src="../images/bh-logo-6.png"
        alt="Brew Hoperator logo"
        height={60}
        width={160}
        placeholder="blurred"
        className=""
      />
    </Link>

    <nav className="flex flex-row items-center">
        {/* (!isMobile ? ( */}
          <ul className="hidden sm:flex justify-center items-center list-none gap-[35px] m-0">
            {links.map((l) => (
                <li key={l.displayName} className="group relative m-0">
                  <StaticImage src="../images/nav-foam.png" alt="beer foam" height={32} width={60} placeholder="none" className="!absolute !hidden group-hover:!flex z-[-1]  top-[-15px] left-[-22px] group-hover:w-[60px]"/>
                  <Link
                    href={l.link}
                    className="uppercase font-semibold no-underline text-[#F5F3EF] m-0"
                  >
                    {l.displayName}
                  </Link>
                </li>
            ))}
          </ul>
        {/* ) : (
          <button
            onClick={() => {
              setNavOpen(!navOpen);
            }}
            className="flex flex-col items-center justify-between w-[22px] h-[20px] p-0"
          >
            <div className="bg-black h-[2px] w-full " />
            <div className="bg-black h-[2px] w-full " />
            <div className="bg-black h-[2px] w-full " />
          </button>
        )) */}
    </nav>
  </div>
</header>
)
}
