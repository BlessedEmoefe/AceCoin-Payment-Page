import React, { useState } from "react";
import { Button } from "../button/button.component";
import DropDown from "../dropdown/dropDown.component";
import {
  HorizontalHeaderRowContainer,
  DropDownWrapper,
  Heading,
  MainHeadingWrapper,
  HeaderInfoSection,
  HeadingText,
  NavigationToggleSection,
  LinkWrapper,
  Wrapper,
  PageText,
  BottomActiveBorder,
} from "./horizontalHeaderRow.styles";
import { FaArrowCircleLeft as BackArrow } from "react-icons/fa";

export const HorizontalHeaderRow = ({
  marginTop,
  marginBottom,
  heading,
  headingWeight,
  headingColor,
  backButtonHeading,
  backButton = true,
  pageToggle,
  dropdown,
  dropdownData,
  btn,
  btnText,
  btnColor,
  TopTabToggle,
}) => {
  const [active, setActive] = useState("Lessons");
  const [activeTab, setActiveTab] = useState();

  return (
    <HorizontalHeaderRowContainer
      marginBottom={marginBottom}
      marginTop={marginTop}
    >
      {dropdown ? (
        <DropDownWrapper>
          <DropDown
            components={
              dropdownData ? dropdownData : ["Jss 1", "Jss 2", "Jss 3"]
            }
          />
        </DropDownWrapper>
      ) : null}
      {heading ? (
        <Heading headingWeight={headingWeight} headingColor={headingColor}>
          {heading}
        </Heading>
      ) : null}

      {pageToggle && backButtonHeading ? (
        <MainHeadingWrapper pageToggle={pageToggle}>
          <HeaderInfoSection>
            {backButton ? (
              <BackArrow fontSize={"1.3rem"} color={"#002069"} />
            ) : null}
            <HeadingText headingColor={headingColor} backButton={backButton}>
              {backButtonHeading ? backButtonHeading : "Mathematics"}
            </HeadingText>
          </HeaderInfoSection>

          <NavigationToggleSection>
            {/* <LinkWrapper to={"lessons"}> */}
            <Wrapper
              onClick={() => {
                setActive("Lessons");
                TopTabToggle("Lessons");
              }}
            >
              <PageText active={active === "Lessons" ? true : null}>
                Lessons
              </PageText>
              <BottomActiveBorder active={active === "Lessons" ? true : null} />
            </Wrapper>
            {/* </LinkWrapper>
            <LinkWrapper to={"exercises"}> */}
            <Wrapper
              onClick={() => {
                setActive("ExercisesPreview");
                TopTabToggle("ExercisesPreview");
              }}
            >
              <PageText active={active === "ExercisesPreview" ? true : null}>
                Exercises
              </PageText>
              <BottomActiveBorder
                active={active === "ExercisesPreview" ? true : null}
              />
            </Wrapper>
            {/* </LinkWrapper> */}
          </NavigationToggleSection>
        </MainHeadingWrapper>
      ) : backButtonHeading ? (
        <MainHeadingWrapper>
          {backButton ? (
            <BackArrow fontSize={"1.3rem"} color={"#002069"} />
          ) : null}
          <HeadingText headingColor={headingColor} backButton={backButton}>
            {backButtonHeading ? backButtonHeading : "Mathematics"}
          </HeadingText>
        </MainHeadingWrapper>
      ) : null}

      {btn ? (
        <Button
          btnText={btnText ? btnText : "See All"}
          width={"max-content"}
          background={
            btnColor
              ? btnColor
              : "linear-gradient(156.3deg, #007DCB 39.83%, #002069 186.65%)"
          }
          borderRadius={"10px"}
          // paddingHorizontal
        />
      ) : null}
    </HorizontalHeaderRowContainer>
  );
};
