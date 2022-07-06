import classNames from "classnames";
import React from "react";
import styled from "styled-components";

const Container = styled.div<{ completed: number; isOverflow: boolean }>`
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
  const completed = Math.min((value * 100) / max, 100);
  const isOverflow = value > max;

  const overflowBackground =
    "bg-gradient-to-r from-red-300 via-red-400 to-red-500";
  const background =
    "bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600";

  return (
    <Container
      completed={completed}
      className={className}
      isOverflow={isOverflow}
    >
      <div className="progress-bar-container">
        <div
          className={classNames("fill", {
            [overflowBackground]: isOverflow,
            [background]: !isOverflow,
          })}
        ></div>
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
