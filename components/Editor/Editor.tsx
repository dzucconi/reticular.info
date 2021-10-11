import React, { useMemo, useState } from "react";
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

  const changedValue = useMemo(() => changeValue(value), [changeValue, value]);

  return (
    <Container>
      <Input
        autoFocus
        value={value}
        onChange={handleChange}
        placeholder="Begin typing"
      />
      <Output readOnly value={changedValue} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Textarea = styled.textarea`
  appearance: none;
  flex: 1;
  height: 100%;
  border-radius: 0%;
  border: 0;
  padding: 1rem;
  font-size: 2rem;
`;

const Input = styled(Textarea)`
  color: black;
  background-color: white;
`;

const Output = styled(Textarea)`
  color: white;
  background-color: black;
`;
