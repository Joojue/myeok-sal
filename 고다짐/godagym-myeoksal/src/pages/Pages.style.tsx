import styled from "styled-components";

export const PageWrap = styled.div`
  margin: auto;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
`;

export const DarkContainer = styled.div`
  margin-top: 4rem;
  background-color: black;
  border-top: 2px solid #f7f7f7;
  color: white;
  min-height: 100vh;
  height: 100%;
`;

export const ListHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 500px;
  height: 4rem;
  display: flex;
  padding: 0.5rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  z-index: 1;
  color: white;

  p {
    font-size: 1.25rem;
    font-weight: 700;
  }
  span {
    font-size: 0.875rem;
    background-color: #fc711c;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 15px;
    color: white;
    cursor: pointer;
  }
`;

export const DetailImgWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  margin: auto;
  img {
    width: 100%;
    margin: 1rem 0;
    border-radius: 30rem;
  }
`;

export const DetailProfileBox = styled.div`
  width: 100%;
  margin: auto;
  p {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const OpenBtn = styled.div`
  margin: auto;
  text-align: center;
  button {
    width: 80%;
    border: none;
    outline: none;
    border-radius: 0.75rem;
    cursor: pointer;
    padding: 0.75rem 1rem;
    font-family: "Pretendard Variable";
    font-size: 1.25rem;
    color: white;
    background-color: #fc711c;
    font-weight: 500;
  }
`;

export const InputWrap = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 3rem 0;
  section {
    display: flex;
    justify-content: center;
  }
  button {
    margin-top: 1rem;
  }
  p {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: #fc711c;
  }
`;

export const StyledSelect = styled.select`
  display: flex;
  width: 6rem;
  height: 2rem;
  align-items: center;
  padding-left: 0.5rem;
  border-radius: 0.5rem;
  border: 2px solid #fc711c;
  background-color: white;
  font-family: "Pretendard Variable";
  font-size: 0.975rem;
  font-weight: 600;
  box-sizing: border-box;
  color: #fc711c;
`;

export const StyledInput = styled.input`
  display: flex;
  width: 8rem;
  height: 2rem;
  align-items: center;
  border-radius: 0.5rem;
  border: 2px solid #fc711c;
  padding-left: 1rem;
  background-color: inherit;
  font-family: "Pretendard Variable";
  font-size: 0.9375rem;
  font-weight: 500;
  color: black;
  line-height: 100%;
  box-sizing: border-box;
  margin-left: 1rem;
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }
`;

export const SelectTeamWrap = styled.div`
  border-radius: 0.35rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 0;
  box-sizing: border-box;
`;

export const TeamWrap = styled.div`
  width: 100%;
  height: 120px;
  background-color: #ffd5ba;
  color: #fc711c;
  line-height: 120px;
  text-align: center;
  margin-top: 1rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
`;

export const LoginWrap = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 1rem;
  text-align: center;
`;

export const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
  margin-bottom: 0.5rem;
  button {
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.625rem;
    outline: none;
    border: none;
    background-color: #fc711c;
    color: white;
    font-family: "Pretendard Variable";
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const TeamSticker = styled.div`
  width: 3.5rem;
  height: 1rem;
  line-height: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0.25rem;
  background-color: #ffd5ba;
  color: #fc711c;
  font-size: 0.775rem;
`;
