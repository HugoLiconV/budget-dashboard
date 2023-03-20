import React from "react";
import { BottomSheet as BottomSheetBase } from "react-spring-bottom-sheet";
import styled from "styled-components";
import "react-spring-bottom-sheet/dist/style.css";

const StyledBottomSheet = styled(BottomSheetBase)`
  --rsbs-bg: #fff;
`;

type Props = {
  isOpen: boolean;
  onDismiss: () => void;
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

const BottomSheet: React.FC<Props> = ({
  isOpen,
  onDismiss,
  children,
  header,
  footer,
}: Props) => {
  return (
    <StyledBottomSheet
      style={{ background: "#0095ff" }}
      open={isOpen}
      onDismiss={onDismiss}
      defaultSnap={({ snapPoints }) => Math.max(...snapPoints)}
      snapPoints={({ maxHeight }) => [maxHeight - maxHeight / 5, maxHeight]}
      header={header}
      footer={footer}
    >
      {children}
    </StyledBottomSheet>
  );
};

export default BottomSheet;
