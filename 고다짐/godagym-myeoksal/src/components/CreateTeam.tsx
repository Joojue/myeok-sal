import React, { useState } from "react";
import {
  InputWrap,
  OpenBtn,
  StyledInput,
  StyledSelect,
  TeamSticker,
} from "../pages/Pages.style";
import { lengCalc } from "../utils/lengCalc";

interface PropType {
  handleClose: () => void;
}

const CreateTeam = (props: PropType) => {
  const [teamMates, setTeamMates] = useState<string[]>([]);
  const [users, _setUsers] = useState(mock);
  const [teamName, setTeamName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUserId = Number(event.target.value);
    const selectedUser = users.find((user) => user.id === selectedUserId);

    if (selectedUser) {
      if (!teamMates.includes(selectedUser.name)) {
        setTeamMates((prev) => [...prev, selectedUser.name]);
      }
    }
  };

  const handleRemove = (name: string) => {
    setTeamMates((prev) => prev.filter((teamMate) => teamMate !== name));
  };

  const handleCreate = () => {
    if (lengCalc(teamName)) {
      alert("팀명을 입력하세요.");
      return;
    }
    if (teamMates.length === 0) {
      alert("1명 이상의 팀원을 선택하세요.");
      return;
    }
    alert(
      `팀 추가가 완료되었습니다. 팀이름 : ${teamName} 팀원 명단:${teamMates}`
    );
    props.handleClose();
  };
  return (
    <InputWrap>
      <p style={{ marginBottom: "1rem" }}>팀명을 입력하세요!</p>
      <StyledInput
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        style={{
          paddingLeft: "0.5rem",
          marginLeft: 0,
          width: "100%",
          marginBottom: "2rem",
        }}
      />
      <p style={{ marginBottom: "1rem" }}>팀원을 선택하세요!</p>
      <StyledSelect onChange={handleChange} style={{ width: "100%" }}>
        <option value="">선택</option>
        {users.map((user, index) => (
          <option key={index} value={user.id}>
            {user.name}
          </option>
        ))}
      </StyledSelect>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          minHeight: "50px",
          marginBottom: "1rem",
        }}
      >
        {teamMates.map((name, index) => (
          <TeamSticker key={index}>
            <span>{name}</span>
            <img
              src="/images/x-mark.svg"
              alt="Remove"
              style={{ cursor: "pointer" }}
              onClick={() => handleRemove(name)}
            />
          </TeamSticker>
        ))}
      </div>
      <OpenBtn>
        <button style={{ letterSpacing: 5 }} onClick={handleCreate}>
          팀생성하기
        </button>
      </OpenBtn>
    </InputWrap>
  );
};

export default CreateTeam;

const mock = [
  {
    id: 1,
    name: "김지우",
  },
  {
    id: 2,
    name: "이힘찬",
  },
];
