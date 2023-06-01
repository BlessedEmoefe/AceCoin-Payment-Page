import React, { useState } from "react";
import styled from "styled-components";

const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    cursor: pointer;
    user-select: none;
 
  `;

  const CheckboxInput = styled.input`
    margin-right: 10px;
    height:15px;
    width:15px;
    outline: none;
    border: solid white;
  `;

  return (
    <CheckboxLabel>
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {label ? label : "Remember me"}
    </CheckboxLabel>
  );
};

export default Checkbox;
