import styled from "styled-components";

export const Section = styled.section`
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  box-sizing: border-box;
  border-bottom: 2px solid #f7f7f7;
  font-size: 0.875rem;
  z-index: 33;
  color: white;
`;

export const ProfileBox = styled.div`
  width: 25%;
  height: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  p {
    margin-bottom: 0.5rem;
  }
`;

export const ChallengeBox = styled.div`
  width: 30%;
  padding: 0.5rem;
  box-sizing: border-box;
  section {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 0.5rem;
  }
`;

export const CheerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 25%;
  height: 100%;
  p {
    text-align: center;
    padding: 0.35rem 0.25rem;
    font-size: 0.675rem;
    background-color: #dfedfc;
    color: #0c59a5;
    border-radius: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;

export const CommentsWrap = styled.div`
  width: 80%;
  max-height: 8.5rem;
  overflow-y: auto;
  margin: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #fc711c;
    border-radius: 25px;
  }
`;

export const CommentsBox = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 0.875rem;
    padding: 0.25rem 0.25rem;
    box-sizing: border-box;
  }
`;
