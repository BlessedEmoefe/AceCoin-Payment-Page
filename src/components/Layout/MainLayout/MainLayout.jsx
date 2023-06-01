import React from "react";
import Drawer from "../../drawer/drawer.component";

import Header from "../../header/header.component";
import { GeneralBackground } from "../GeneralBackground/GeneralBackground.component";
import {
  MainLayoutContainer,
  Section,
  ContentContainer,
} from "./MainLayout.styles";

const MainLayout = ({ children,height }) => {
  return (
    <GeneralBackground>
      <MainLayoutContainer>
        <Header />
        <Section>
          <Drawer />
          <ContentContainer height={height}>{children}</ContentContainer>
        </Section>
      </MainLayoutContainer>
    </GeneralBackground>
  );
};

export default MainLayout;
