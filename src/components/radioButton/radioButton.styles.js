import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontWeights } from "../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";



export const RadioButtonContainer = styled(FlexibleDiv)`
  margin: 0 0 10px 0;
  display: flex;
  cursor: pointer;
  width: auto;
  @media only screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  /* .radio-outer-circle {
    width: 3rem;
    height: 3rem;
    min-width: 3rem;
    min-height: 3rem;
    border: 2px solid #0d5bc6;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    transition: all 0.1s linear;
  } */

  /* .radio-inner-circle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #0d5bc6;
    transition: all 0.1s linear;
  }
  .unselected {
    border: 2px solid #666;
  } */
  /* .unselected-circle {
    width: 0;
    height: 0;
  } */
  /* .helper-text {
    color: #000;
    padding-right: 8px;
  } */
  /* label {
    font-size: 1rem;
    color: ${colors.black.regular};
    font-weight: ${fontWeights.semiBold};
  } */

  .custom-radio-btn {
    width: 18px;
    height: 18px;
    border: 2px solid #007dcb;
    border-radius: 50%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.2rem;
  }

  .custom-radio-btn .checkMark {
    width: calc(100% - 5px);
    height: calc(100% - 5px);
    border-radius: 50%;
    background: linear-gradient(122.03deg, #007dcb 42.62%, #002069 152.63%);
    display: none;
  }

  .custom-radio-btn input {
    display: none;
  }
  .custom-radio-btn input:checked + .checkMark {
    display: inline-block;
  }
  .label {
    font-size: 14px;
    color: ${colors.black.strong};
    /* font-weight: ${fontWeights.semiBold}; */
    margin-right: 1.5rem;
  }
`;

export const Wrapper = styled(FlexibleDiv)`
  width: auto;
  height: auto;
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)};
  background: red;
  padding: 0;
`;
