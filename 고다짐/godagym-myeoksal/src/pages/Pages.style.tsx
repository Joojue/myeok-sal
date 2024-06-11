import styled from "styled-components";

export const PageWrap = styled.div`
  margin: auto;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
`;

export const DarkContainer = styled.div`
  margin-top: 4rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-top: 2px solid #f7f7f7;
  color: white;
`;

export const ListHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 500px;
  height: 4rem;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;

  p {
    font-size: 1.25rem;
    font-weight: 700;
  }
  span {
    background-color: #fc711c;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.775rem;
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
