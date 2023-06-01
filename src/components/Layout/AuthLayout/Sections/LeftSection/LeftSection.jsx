import React from "react";
import SignInAvatar from "../../../../../assets/svg/SignInAvatar.svg";
import LogoImage from "../../../../../assets/svg/Logo.svg";
import {
  LeftSectionWrapper,
  LogoWrapper,
  Image,
  AvatarWrapper,
} from "./styles";

const LeftSection = ({ Avatar, right, bottom, height }) => {
  return (
    <LeftSectionWrapper width="35%">
      <LogoWrapper>
        <Image
          src={LogoImage}
          alt="logo-image"
          height={"3rem"}
          width={"3rem"}
        />
      </LogoWrapper>
      <AvatarWrapper right={right} bottom={bottom}>
        <Image
          src={Avatar ? Avatar : SignInAvatar}
          alt="img"
          height={height ? height : "100%"}
        />
      </AvatarWrapper>
    </LeftSectionWrapper>
  );
};

export default LeftSection;
