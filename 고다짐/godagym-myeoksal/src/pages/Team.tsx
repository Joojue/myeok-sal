import { useNavigate } from "react-router-dom";
import {
  DarkContainer,
  ListHeader,
  PageWrap,
  SelectTeamWrap,
  TeamWrap,
} from "./Pages.style";
import BasicModal from "../components/BasicModal";
import CreateTeam from "../components/CreateTeam";
import { useState } from "react";

const Team = () => {
  const navigator = useNavigate();

  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const logoutHandler = () => {
    //로그아웃 로직
    navigator("/");
  };

  return (
    <PageWrap>
      <BasicModal open={open} handleClose={handleClose}>
        <CreateTeam handleClose={handleClose} />
      </BasicModal>
      <ListHeader>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="/images/logo.png" />
          <p>참여 팀 목록</p>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <span onClick={() => handleOpen()}>팀 생성</span>
          <span onClick={() => logoutHandler()}>로그아웃</span>
        </div>
      </ListHeader>
      <DarkContainer>
        <SelectTeamWrap>
          <TeamWrap onClick={() => navigator("/list")}>
            근코 업고 튀어 !
          </TeamWrap>
          <TeamWrap>근창없는 근창팀</TeamWrap>
          <TeamWrap>여기 글씨, 배경색 어떻게 할까용</TeamWrap>
        </SelectTeamWrap>
      </DarkContainer>
    </PageWrap>
  );
};

export default Team;
