import React from "react";
import { ContentContainer } from "./styles";
import { Star as StarIllustration } from "../../../assets/svg";
import { GeneralBackground } from "../GeneralBackground/GeneralBackground.component";

export const AuthenticationLayout = ({ children }) => {
  return (
    <GeneralBackground alignItems="center" justifyContent={"center"}>
      <ContentContainer>{children}</ContentContainer>
    </GeneralBackground>
  );
};
