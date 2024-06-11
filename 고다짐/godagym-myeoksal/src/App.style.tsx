import { styled } from "styled-components";

interface PropType {
  state: string;
}

export const Wrap = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
`;

export const Container = styled.div`
  border-radius: 10px;
  width: 100%;
  max-width: 350px;
  height: 600px;
  background-color: white;
  padding: 1rem;
  box-sizing: border-box;
  h3 {
    text-align: center;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  span {
    flex: 1;
    text-align: center;
  }
`;

export const Chip = styled.div<PropType>`
  flex: 1.5;
  text-align: center;
  font-size: 0.675rem;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  white-space: pre-wrap;
  background-color: ${({ state }) =>
    state === "ing"
      ? "#fff3f3"
      : state === "indi"
      ? "#cafee2"
      : state === "team"
      ? "#dfedfc"
      : "inherit"};
  color: ${({ state }) =>
    state === "ing"
      ? "#FF6060"
      : state === "indi"
      ? "#009b39b6"
      : state === "team"
      ? "#0C59A5"
      : "inherit"};
`;

export const TotalChip = styled.span`
  background-color: #f7f7f7;
  color: #808080;
  padding: 0.5rem;
  border-radius: 10px;
`;
