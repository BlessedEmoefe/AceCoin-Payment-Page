import React from "react";
import {
  PageWrapper,
  StarWrapper,
  StarContainer,
} from "./GeneralBackground.styles";
import { Star as StarIllustration } from "../../../assets/svg";

export const GeneralBackground = ({ children, alignItems, justifyContent }) => {
  return (
    <PageWrapper alignItems={alignItems} justifyContent={justifyContent}>
      <StarWrapper>
        <Star
          height={"12rem"}
          width={"12.4rem"}
          rotateX={"50deg"}
          rotateY={"50deg"}
          rotateZ={"-50deg"}
          top={"10vh"}
          left={"-4rem"}
        />
        <Star
          height={"5rem"}
          width={"5.4rem"}
          rotate={"30deg"}
          rotateZ={"70deg"}
          bottom={"20vh"}
          left={"5%"}
        />
        <Star
          height={"12rem"}
          width={"12.4rem"}
          rotate={"30deg"}
          bottom={"10vh"}
          rotateZ={"-50deg"}
          right={"5%"}
        />
      </StarWrapper>
      {children}
    </PageWrapper>
  );
};

export const Star = ({
  height,
  width,
  rotateX,
  rotateY,
  rotateZ,
  top,
  bottom,
  right,
  left,
}) => {
  return (
    <StarContainer
      rotateX={rotateX}
      rotateY={rotateY}
      rotateZ={rotateZ}
      top={top}
      bottom={bottom}
      right={right}
      left={left}
    >
      <StarIllustration height={height} width={width} />
    </StarContainer>
  );
};
