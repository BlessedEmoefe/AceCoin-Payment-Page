import styled from "styled-components";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";
import AuthBG from "../../../assets/images/AuthBG.png";

export const PageWrapper = styled(FlexibleDiv)`
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
  background: url(${AuthBG});
  background-repeat: round;
  background-size: cover;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-start")};
  flex: 1;
  z-index: -10;
  min-height: 100vh;
  width: 100%;
  padding: 0;
`;

export const StarWrapper = styled(FlexibleDiv)`
  flex: 1;
  height: 100%;
  width: 100%;
  z-index: 0;
  position: absolute;
  padding: 0;
  overflow: hidden;
`;

export const StarContainer = styled(FlexibleDiv)`
  position: absolute;
  padding: 0;
  width: max-content;
  height: max-content;
  z-index: 0;
  transform: ${({ rotateX }) => (rotateX ? `rotateX(${rotateX})` : "none")};
  transform: ${({ rotateY }) => (rotateY ? `rotateY(${rotateY})` : "none")};
  transform: ${({ rotateZ }) => (rotateZ ? `rotateZ(${rotateZ})` : "none")};
  top: ${({ top }) => (top ? top : "none")};
  bottom: ${({ bottom }) => (bottom ? bottom : "none")};
  right: ${({ right }) => (right ? right : "none")};
  left: ${({ left }) => (left ? left : "none")};
`;
