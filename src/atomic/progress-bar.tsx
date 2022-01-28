import React from "react";
import styled from "styled-components";

const Container = styled.div<{ completed: number }>`
  .labels-container {
    display: flex;
    justify-content: space-between;
  }

  .value {
    text-align: center;
  }

  .progress-bar-container {
    height: 20px;
    width: 100%;
    background-color: #e0e0de;
    border-radius: 50px;

    .fill {
      height: 100%;
      width: ${(p) => p.completed}%;
      background-color: #4318ff;
      transition: width 1s ease-in-out;
      border-radius: inherit;
      text-align: right;
    }
  }
`;

type Props = {
  value: number;
  max: number;
  min: number;
  className?: string;
  formater?: (value: number) => string;
};

const ProgressBar = ({ max, value, min, className, formater }: Props) => {
  const completed = (value * 100) / max;

  return (
    <Container completed={completed} className={className}>
      <div className="progress-bar-container">
        <div className="fill"></div>
      </div>
      <div className="labels-container">
        <span className="min">{formater ? formater(min) : min}</span>
        <span className="max">{formater ? formater(max) : max}</span>
      </div>
      <p className="value">{formater ? formater(value) : value}</p>
    </Container>
  );
};

export default ProgressBar;
