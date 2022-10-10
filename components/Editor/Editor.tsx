import React, { useMemo, useRef, useState } from "react";
import styled from "styled-components";

interface EditorProps {
  changeValue?(value: string): string;
}

const IDENTITY = (x: string) => x;

export const Editor: React.FC<EditorProps> = ({ changeValue = IDENTITY }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const changedValue = useMemo(() => changeValue(value), [changeValue, value]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <Input
        ref={inputRef as any}
        autoFocus
        value={value}
        onChange={handleChange}
        placeholder="Begin typing"
      />

      <Output
        readOnly
        value={changedValue}
        placeholder="Begin typing"
        onFocus={handleFocus}
        onClick={() => {
          navigator.clipboard.writeText(changedValue);
        }}
      />
    </>
  );
};

const Textarea = styled.textarea`
  position: fixed;
  top: 0;
  bottom: 0;
  appearance: none;
  flex: 1;
  height: 100%;
  border-radius: 0%;
  border: 0;
  padding: 1rem;

  &:focus {
    outline: none;
  }
`;

const Input = styled(Textarea)`
  color: black;
  background-color: white;
  right: 0;
  font-size: 1rem;
  width: 33.33%;

  &:hover {
    z-index: 1;
  }
`;

const Output = styled(Textarea)`
  width: 90%;
  left: 0;
  color: white;
  background-color: black;
  font-size: 3rem;
  padding: 1em;
`;
