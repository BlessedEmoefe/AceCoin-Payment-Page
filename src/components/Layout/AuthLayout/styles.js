import styled from "styled-components";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";

export const ContentContainer = styled(FlexibleDiv)`
  width: 55%;
  height: max-content;
  min-height: 50vh;
  min-height: max-content;
  padding: 0;
  z-index: 1;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 50px;
  font-family: "Poppins";

  @media only screen and (max-width: 1400px) {
    width: 70%;
  }

  @media only screen and (max-width: 1100px) {
    width: 80%;
  }
  @media only screen and (max-width: 900px) {
    width: 90%;
  }

  @media only screen and (max-width: 600px) {
    /* width: 80%; */
  }
  @media only screen and (max-width: 500px) {
    /* width: 90%; */
  }
`;
