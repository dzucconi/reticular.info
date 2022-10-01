import { FormEvent, useState } from "react";
import styled from "styled-components";

export const Console = () => {
  const [input, setInput] = useState("");
  const [commands, setCommands] = useState<string[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCommands((prevCommands) => [...prevCommands, input]);
    setInput("");
  };

  return (
    <Panel>
      <History>
        {commands.map((command) => {
          return <div key={command}>{command}</div>;
        })}
      </History>

      <Form onSubmit={handleSubmit}>
        <Input
          placeholder={new Date().toLocaleTimeString()}
          onInput={(e) => setInput(e.currentTarget.value)}
          value={input}
        />
      </Form>
    </Panel>
  );
};

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: monospace;
  padding: 2rem;
`;

const History = styled.div`
  overflow: auto;
`;

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  font-family: monospace;

  &:focus {
    outline: none;
  }
`;
