import styled from "styled-components";
import { colors } from "../../../../../infrastructure/theme/colors";
import { FlexibleDiv } from "../../../../flexibleDiv/flexibleDiv.component";

export const LeftSectionWrapper = styled(FlexibleDiv)`
  height: 100%;
  background: linear-gradient(159.46deg, #007dcb -11.75%, #002069 122.32%);
  position: relative;
  padding: 1rem;
  border-radius: 50px 0 0 50px;
  @media only screen and (max-width: 800px) {
    height: 100%;
    width: 100vw;
    z-index: -10;
    /* display:none; */
    background: transparent;
    left:0;
    position: absolute;
    padding: 1rem;
    border-radius: 0;
  }
`;
export const LogoWrapper = styled(FlexibleDiv)`
  height: max-content;
  width: max-content;
  background: ${colors.white};
  border-radius: 50%;
  padding: 0.2rem;
  position: absolute;
  top: 3%;
  left: 3%;
  @media only screen and (max-width: 800px) {
    z-index: -10;
    position: absolute;
  }
`;
export const Image = styled.img`
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "auto")};
  object-fit: contain;
`;
export const AvatarWrapper = styled(FlexibleDiv)`
  height: 100%;
  width: max-content;
  position: absolute;
  bottom:  ${({ bottom }) => (bottom ? bottom : "10%")};
  right:  ${({ right }) => (right ? right : "10%")};
  padding: 0;
  /* background: blueviolet; */
  @media only screen and (max-width: 800px) {
    height: 70%;
    z-index: -10;
    top: 0;
    bottom: none;
    right: 10%;
  }
`;
