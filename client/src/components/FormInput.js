import styled from "styled-components";
import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errorMessage, id, ...inputsProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div>
      <Label>{label}</Label>
      <Input
        {...inputsProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputsProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <Span>{errorMessage}</Span>
    </div>
  );
};
export default FormInput;

const Input = styled.input`
  display: flex;
  padding: 15px;
  margin: 10px 0px;
  width: 460px;
  border-radius: 5px;
  border: 1px solid gray;
  :invalid ~ span {
    display: block;
  }
`;
const Label = styled.label`
  font-size: 30px;
  color: gray;
  width: 120px;
`;
const Span = styled.span`
  font-size: 12px;
  padding: 3px;
  color: red;
  display: none;
`;
