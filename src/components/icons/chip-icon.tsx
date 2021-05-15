import styled from "styled-components";

const Icon = styled.i`
  background: #f7f5f7;
  width: 35px;
  height: 28px;
  border-radius: 8px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;

  .border-bottom {
    border-bottom: 1px solid #e6e6e6;
  }

  .border-right {
    border-right: 1px solid #e6e6e6;
  }

  .child {
    width: 100%;
    height: 100%;
    margin: 0px;
  }
`;

function ChipIcon() {
  return (
    <Icon>
      <div className="child border-bottom border-right" />
      <div className="child border-bottom border-right" />
      <div className="child border-bottom" />
      <div className="child border-bottom" />
      <div className="child border-bottom" />
      <div className="child border-bottom" />
      <div className="child border-right" />
      <div className="child border-right" />
      <div className="child" />
    </Icon>
  );
}

export default ChipIcon;
