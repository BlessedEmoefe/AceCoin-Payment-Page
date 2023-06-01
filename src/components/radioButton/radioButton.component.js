import React from "react";
// import PropTypes from "prop-types";
import {
  RadioButtonContainer,
  // , Wrapper
} from "./radioButton.styles";

export const Radio = ({ selected, onChange, text, value }) => {
  // const [active, setActive] = useState(true);
  return (
    <RadioButtonContainer
      paddingVertical="0"
      onClick={() => {
        onChange();
      }}
    >
      {/* <div
        style={selected ? { background: "pink" } : { background: "green" }}
        className={
          selected ? `radio-outer-circle unselected` : "radio-outer-circle"
        }
      >
        <div
          className={
            selected
              ? `radio-inner-circle unselected-circle`
              : "radio-inner-circle"
          }
        />
      </div>
      <div className="helper-text">{text}</div> */}

      {/* <Wrapper >
        <input type={"radio"} id="male" name="gender" />
        <span></span>
      </Wrapper>

      <Wrapper >
        <input type={"radio"} id="female" name="gender" />
        <span>Female</span>
      </Wrapper> */}

      <label className="custom-radio-btn">
        <input type={"radio"} id="male" name="gender" checked />
        <span className="checkMark"></span>
      </label>
      <label htmlFor="male" className="label">
        Male
      </label>

      <label className="custom-radio-btn">
        <input type={"radio"} id="male" name="gender" />
        <span className="checkMark"></span>
      </label>
      <label htmlFor="female" className="label">
        Female
      </label>
    </RadioButtonContainer>
  );
};
