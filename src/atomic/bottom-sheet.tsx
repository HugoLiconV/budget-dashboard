import React from "react";
import { BottomSheet as BottomSheetBase } from "react-spring-bottom-sheet";
import styled from "styled-components";
import "react-spring-bottom-sheet/dist/style.css";

const Container = styled.div`
  background-color: rgba(255, 255, 255, 1);
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
    <Container>
      <BottomSheetBase
        open={isOpen}
        onDismiss={onDismiss}
        defaultSnap={({ snapPoints, lastSnap }) =>
          lastSnap ?? Math.max(...snapPoints)
        }
        snapPoints={({ maxHeight }) => [maxHeight - maxHeight / 5, maxHeight]}
        header={header}
        footer={footer}
      >
        {children}
      </BottomSheetBase>
    </Container>
  );
};

export default BottomSheet;
