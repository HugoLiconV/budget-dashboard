import React from "react";
import styled from "styled-components";
import { Option } from "./constants";

type SelectProps = {
  options: Option[];
  onChange: (option: Option) => void;
  required?: boolean;
} & React.ButtonHTMLAttributes<HTMLSelectElement>;

const StyledSelect = styled.select`
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3E%3Cpath d='M15.3 9.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3z'/%3E%3C/svg%3E");
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1.5em 1.5em;
`;

const Select: React.FC<SelectProps> = ({ options, onChange, ...props }) => {
  function onSelectOption(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue = event.target.value;
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    if (selectedOption) {
      onChange(selectedOption);
    }
  }

  return (
    <StyledSelect onChange={onSelectOption} {...props}>
      <option value="" selected hidden>
        {props.placeholder}
      </option>
      {options.map(({ value, name }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
