import React, { useState } from "react";
import logo from "../../assets/svg/Logo.svg";
import {
  HeaderContainer,
  InnerWrapper,
  MenuIconWrapper,
  LogoWrapper,
  Logo,
  NavIconWrapper,
  IconWrapper,
  SearchBarAndAvatarWrapper,
  SearchBarWrapper,
  AvatarWrapper,
  Avatar,
} from "./header.styles";

// import { Link } from "react-router-dom";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { colors } from "../../infrastructure/theme/colors";
import {
  AlarmClock,
  FilledHeart,
  NotificationIcon,
  StickyNote,
} from "../../assets/svg";
import { SearchBar } from "../SearchBar/searchBar.component";
import AvatarImage from "../../assets/images/avatar.jpg";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = ({ smallDrawer, handleNoDrawer }) => {
  // const [displayNav, setDisplayNav] = useState(false);
  const navigate = useNavigate()
  const [showMenu] = useState(undefined);
  // const toggleNav = () => {
  //   setDisplayNav(!displayNav);
  // };
  return (
    <HeaderContainer smallDrawer={smallDrawer}>
      <InnerWrapper showMenu={showMenu}>
        <MenuIconWrapper onClick={() => handleNoDrawer()}>
          <div className="ripple" />
          <MenuIcon size="20px" color={colors.black} />
        </MenuIconWrapper>
        <LogoWrapper to="/">
          <Logo src={logo} alt="logo" />
        </LogoWrapper>

        <NavIconWrapper>
          <IconWrapper>
            <FilledHeart width="2.4rem" height="2.4rem" />
          </IconWrapper>
          <IconWrapper>
            <AlarmClock width="2.4rem" height="2.4rem" />
          </IconWrapper>
          <IconWrapper>
            <NotificationIcon width="2.4rem" height="2.4rem" />
          </IconWrapper>
          <IconWrapper>
            <StickyNote width="2.4rem" height="2.4rem" />
          </IconWrapper>
        </NavIconWrapper>

        <SearchBarAndAvatarWrapper>
          <SearchBarWrapper>
            <SearchBar
              placeholder=" "
              // handleChange ={}
              // fullWidth = true
              // height={}
              // xl = false
              // color = {colors.black.strong}
            />
          </SearchBarWrapper>
          <AvatarWrapper onClick={()=>{navigate("/profile")}}>
            <Avatar src={AvatarImage} alt="avatar" />
          </AvatarWrapper>
        </SearchBarAndAvatarWrapper>
      </InnerWrapper>
    </HeaderContainer>
  );
};

export default Header;
