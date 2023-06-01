import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../typography/text.component";
import { Link } from "react-router-dom";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

export const HeaderContainer = styled(FlexibleDiv)`
  background-color: #d2e3f0;
  padding: 1rem 4%;
  /* z-index: 100; */
  /* transition: 300ms ease-in-out; */
  /* height: 60px; */
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const InnerWrapper = styled(FlexibleDiv)`
  width: 100%;
  padding: 0;
  /* background: blue; */
  @media (max-width: 800px) {
    flex-direction: row;
  }

  `

  export const MenuIconWrapper = styled(FlexibleDiv)`
      width: auto;
      height: max-content;
      padding:0.5rem;

      @media (max-width: 800px) {
        width: max-content;
      }
      @media (min-width: 600px) {
        display: none;
      }
      @keyframes rippleforward {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
          background: transparent;
        }
      }
      @keyframes rippleBack {
        0% {
          transform: scale(1);
        }
        100% {
          background: transparent;
          transform: scale(0);
        }
      }

        position: relative;
        left: ${({ smallDrawer }) => (!smallDrawer ? "0" : "15px")};
        right: ${({ smallDrawer }) => (!smallDrawer ? "0" : "auto")};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        height: 35px;
        width: 35px;
        overflow: hidden;
        cursor: pointer;
        .ripple {
          width: 100%;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: ${({ smallDrawer }) => !(smallDrawer === true) && "red"};
          animation: ${({ smallDrawer }) =>
            smallDrawer
              ? " rippleforward 300ms ease-in-out forwards"
              : "rippleBack 300ms ease-in-out forwards"};
          position: absolute;
          border-radius: 50%;
        }
        &:hover {
          background: #88898c1a;
        }
        @media (min-width: 600px) {
          /* display: none; */
        }
      
    
  `;
export const LogoWrapper = styled(Link)`
  width: auto;
  height: 2rem;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 50px;
    display: none;
  }
`;
export const Logo = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 600px) {
  }
`;
export const NavIconWrapper = styled(FlexibleDiv)`
  padding: 0;
  width: 20%;
  gap: 1rem;
  /* background: red; */
  @media (max-width: 1150px) {
    width: 25%;
  }
  @media (max-width: 900px) {
    width: 35%;
  }

  @media (max-width: 800px) {
    flex-direction: row;
  }
  @media (max-width: 900px) {
    width: 45%;
  }
`;
export const IconWrapper = styled(FlexibleDiv)`
  padding: 0;
  width: max-content;
  cursor: pointer;
  /* background: teal; */
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;
// export const Icon = styled(ReactIcon)`
//   @media (max-width: 800px) {
//   }
// `;
export const SearchBarAndAvatarWrapper = styled(FlexibleDiv)`
  /* background: pink; */

  padding: 0;
  gap: 1rem;
  width: max-content;
  @media (max-width: 1150px) {
    /* width: 50%; */
  }
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;
export const SearchBarWrapper = styled(FlexibleDiv)`
  padding: 0;
  width: max-content;
  /* background: yellow; */
  @media (max-width: 900px) {
    display: none;
  }
`;

export const AvatarWrapper = styled(FlexibleDiv)`
  padding: 0;
  width: max-content;
  height: max-content;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  /* background: teal; */
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

export const Avatar = styled.img`
  height: 52px;
  width: 52px;
  object-fit: cover;
  /* border-radius:50%; */
`;
