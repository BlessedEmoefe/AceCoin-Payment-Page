import styled from "styled-components";
import { fontSizes } from "../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Title } from "../typography/text.component";
import { Link } from "react-router-dom";

export const HorizontalHeaderRowContainer = styled(FlexibleDiv)`
  /* background: teal; */
  padding: 0;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : `1rem`};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : `0px`)};

  @media only screen and (max-width: 800px) {
    flex-direction: row;
  }
`;

export const DropDownWrapper = styled(FlexibleDiv)`
  /* background: red; */
  padding: 0;
  min-width: 150px;
  width: max-content;

  @media only screen and (max-width: 800px) {
  }
`;

export const Heading = styled(Title)`
  /* background: red; */
  font-size: ${fontSizes.body};
  line-height: 25px;
  color: ${({ headingColor }) => (headingColor ? headingColor : "#002069")};
  font-weight: ${({ headingWeight }) =>
    headingWeight ? headingWeight : "auto"};
  width: max-content;

  @media only screen and (max-width: 800px) {
  }
`;

export const MainHeadingWrapper = styled(FlexibleDiv)`
  /* background: green; */
  padding: 0;
  width: ${({ pageToggle }) => (pageToggle ? "100%" : "max-content")};
  cursor: pointer;

  @media only screen and (max-width: 800px) {
  }
`;
export const HeaderInfoSection = styled(FlexibleDiv)`
  /* background: pink; */
  padding: 0;
  width: max-content;
  cursor: pointer;

  @media only screen and (max-width: 800px) {
  }
`;

export const HeadingText = styled(Title)`
  /* background: red; */
  font-size: ${fontSizes.smallTitle};
  line-height: 35px;
  color: ${({ headingColor }) => (headingColor ? headingColor : "#002069")};
  width: max-content;
  padding-left: ${({ backButton }) => (backButton ? "0.7rem" : 0)};

  @media only screen and (max-width: 800px) {
  }
`;

export const NavigationToggleSection = styled(FlexibleDiv)`
  /* background: pink; */
  padding: 0;
  width: max-content;
  gap: 1rem;

  @media only screen and (max-width: 800px) {
  }
`;
export const LinkWrapper = styled(Link)`
  width: max-content;
  cursor: pointer;
  text-decoration: none;
  color: auto;

  @media only screen and (max-width: 800px) {
  }
`;
export const Wrapper = styled(FlexibleDiv)`
  /* background: blue; */
  padding: 0;
  width: max-content;
  flex-direction: column;
  gap: 0.1rem;
  /* cursor: pointer; */

  @media only screen and (max-width: 800px) {
  }
`;

export const PageText = styled(Title)`
  /* background: red; */
  font-size: ${fontSizes.smallBody};
  line-height: 25px;
  width: max-content;

  color: ${({ active }) => (active ? "#002069" : "#0179C7")};
  /* font-size: 16px; */
  text-transform: capitalize;
  font-weight: ${({ active }) => (active ? "600" : "400")};

  @media only screen and (max-width: 800px) {
  }
`;
export const BottomActiveBorder = styled(FlexibleDiv)`
  background: ${({ active }) => (active ? "#002069" : "transparent")};
  border-radius: 0.5rem;
  width: 98%;
  padding: 0.07rem 0;

  @media only screen and (max-width: 800px) {
  }
`;
