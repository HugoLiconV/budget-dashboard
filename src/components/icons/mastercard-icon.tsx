import styled from "styled-components";

const Icon = styled.i`
  & {
    font-size: 20px;
    display: inline-block;
    height: 1em;
    isolation: isolate;
    position: relative;
    line-height: 1em;
    vertical-align: middle;
    width: 1.611em;
  }

  &::before,
  &::after {
    border-radius: 0.5em;
    content: "";
    display: inline-block;
    height: 1em;
    position: absolute;
    width: 1em;
  }

  &::before {
    background-color: #eb001b;
    left: 0;
    top: 0;
  }

  &::after {
    background-color: #f79e1b;
    mix-blend-mode: hard-light;
    right: 0;
    top: 0;
  }
`;

export default Icon;
