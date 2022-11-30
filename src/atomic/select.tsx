import React from "react";
import { useSelect, UseSelectStateChange } from "downshift";
import styled from "styled-components";
import { MdClear } from "react-icons/md";
import { Manager, Popper, Reference } from "react-popper";
import { Modifier } from "@popperjs/core";
import { Option } from "pages/create-record/constants";

const StyledSelect = styled.div`
  .toggle-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f4f7fe;
    padding: 12px 16px;
    border-radius: 10px;
    color: #1b2559;
  }
  margin-bottom: 16px;
`;

const ToggleButton = styled.button`
  background: transparent;
  width: 100%;
  border: none;
  /* outline: none; */
  cursor: pointer;
  text-align: left;
  font-size: 16px;
  .placeholder {
    color: #8f9bba;
  }
  &:disabled {
    color: #8f9bba;
  }
`;

const IconButton = styled.button`
  font-size: 16px;
  border: none;
  background: transparent;
  /* outline: none; */
  padding: 2px;
  display: inline-flex;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const DropdownList = styled.ul<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  margin: 0;
  background: #fff;
  list-style: none;
  text-align: left;
  padding: 16px;
  border-radius: 10px;
  li {
    padding: 8px;
    cursor: pointer;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

type Props = {
  name?: string;
  selectedItem: Option | undefined | null;
  options: Option[];
  onClearSelectedItem: () => void;
  label: string;
  disabled?: boolean;
  placeholder?: string;
  handleSelectedItemChange:
    | ((changes: UseSelectStateChange<Option>) => void)
    | undefined;
};

export default function Select({
  selectedItem,
  handleSelectedItemChange,
  onClearSelectedItem,
  options,
  label,
  placeholder,
  disabled,
  name,
}: Props) {
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    reset,
  } = useSelect<Option>({
    items: options,
    onSelectedItemChange: handleSelectedItemChange,
  });

  React.useEffect(() => {
    if (!selectedItem) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  const modifiers: Modifier<string, object>[] = React.useMemo(
    () => [
      {
        name: "sameWidth",
        enabled: true,
        fn: ({ state }) => {
          state.styles.popper.width = `${state.rects.reference.width}px`;
        },
        phase: "beforeWrite",
        requires: ["computeStyles"],
      },
    ],
    []
  );
  return (
    <StyledSelect>
      <Manager>
        <label {...getLabelProps()}>{label}</label>
        <HiddenInput
          type="text"
          name={name}
          value={selectedItem?.value}
          readOnly
        />
        <Reference>
          {({ ref }) => (
            <div className="toggle-container" ref={ref}>
              <ToggleButton
                type="button"
                {...getToggleButtonProps()}
                disabled={disabled}
              >
                <span className={!selectedItem ? "placeholder" : ""}>
                  {selectedItem?.name || placeholder}
                </span>
              </ToggleButton>
              {selectedItem && (
                <IconButton onClick={onClearSelectedItem}>
                  <MdClear />
                </IconButton>
              )}
            </div>
          )}
        </Reference>
        <Popper placement="auto" modifiers={modifiers}>
          {({ ref, style }) => (
            <div ref={ref} style={{ ...style, zIndex: 2 }}>
              <DropdownList {...getMenuProps()} isOpen={isOpen}>
                {options.map((category, index) => (
                  <li
                    style={
                      highlightedIndex === index
                        ? { backgroundColor: "#bde4ff" }
                        : {}
                    }
                    key={`${category.value}${index}`}
                    {...getItemProps({ item: category, index })}
                  >
                    {category.name}
                  </li>
                ))}
              </DropdownList>
            </div>
          )}
        </Popper>
      </Manager>
    </StyledSelect>
  );
}
