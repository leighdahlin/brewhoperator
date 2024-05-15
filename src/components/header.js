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
  ];

return (
  <header className="absolute top-0 z-40 flex justify-center w-full">
  <div className="flex flex-row justify-between w-full max-w-[85.75rem] items-center relative h-[4.75rem] mx-auto px-[0.875rem] md:px-[1.5625rem] m-5">
    <Link href="/">
      <StaticImage
        src="../images/13.png"
        alt="Brew Hoperator logo"
        height={80}
        width={80}
        placeholder="blurred"
        layout="fixed"
        className=""
      />
    </Link>

    <nav className="flex flex-row items-center">
        {/* (!isMobile ? ( */}
          <ul className="hidden sm:flex justify-center items-center list-none gap-[35px] m-0">
            {links.map((l) => (
              <li key={l.displayName} className="group relative m-0">
                <Link
                  href={l.link}
                  className="uppercase font-semibold no-underline text-[#F5F3EF] m-0"
                >
                  {l.displayName}
                </Link>
                <div className="h-[.25rem] transition-[width] duration-250 ease-in-out w-0 bg-golden absolute block right-auto bottom-[-.3125rem] top-[auto] group-hover:w-[1.5rem] group-hover:right-[auto]" />
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
