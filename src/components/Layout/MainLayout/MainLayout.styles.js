import styled from "styled-components";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";

export const MainLayoutContainer = styled(FlexibleDiv)`
  padding: 0;
  height: max-content;
  width: 100%;
  z-index: 1;
  padding-bottom:2rem;
  /* background: red; */
`;
export const Section = styled(FlexibleDiv)`
  padding: 0;
  height: max-content;
  gap: 1.5rem;
  align-items: flex-start;
  margin-top: 3rem;
`;
export const ContentContainer = styled(FlexibleDiv)`
  padding: 0;
  height: ${({ height }) => (height ? height : "max-content")};
  min-height:90vh;
  /* background:blue; */
  /* width: calc(100% - 320px); */
  align-items:flex-start;
  flex: 1;
  padding-right: 4%;
`;
