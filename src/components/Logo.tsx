import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import useIsMobile from './hooks/useIsMobile';
import useLocationStore from "../stores/common/useLocationStore";

interface ImageQueryResult {
  logoHp: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  logoAll: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  logoIcon: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

const Logo: React.FC = () => {
  const pathname = useLocationStore((state) => state.pathname);
  const isHomePage = pathname === "/";

  const data: ImageQueryResult = useStaticQuery(graphql`
    query {
      logoHp: file(relativePath: { eq: "bh-logo-hp.png" }) {
        childImageSharp {
          gatsbyImageData(height: 50, width: 125, placeholder: NONE)
        }
      }
      logoAll: file(relativePath: { eq: "bh-logo-all.png" }) {
        childImageSharp {
          gatsbyImageData(height: 50, width: 125, placeholder: NONE)
        }
      }
      logoIcon: file(relativePath: { eq: "bh-icon.png" }) {
        childImageSharp {
          gatsbyImageData(height: 50, width: 50, placeholder: NONE)
        }
      }
    }
  `);

  const isMobile = useIsMobile(640);

  const imageData = isMobile ? data.logoIcon.childImageSharp.gatsbyImageData : isHomePage ? data.logoHp.childImageSharp.gatsbyImageData : data.logoAll.childImageSharp.gatsbyImageData;

  return (
    <GatsbyImage image={imageData} alt="Brew Hoperator logo" />
  );
};

export default Logo;

