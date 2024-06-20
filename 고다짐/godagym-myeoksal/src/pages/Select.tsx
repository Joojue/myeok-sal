import { useNavigate } from "react-router-dom";
import { removeItem, saveItem } from "../utils/localstorage";
import { DarkContainer, PageWrap, SelectTeamWrap } from "./Pages.style";

const Select = () => {
  const navigator = useNavigate();

  const selectHandler = (team: string) => {
    removeItem("team");
    if (team === "팀1") {
      saveItem("team", "users");
    } else if (team === "팀2") {
      saveItem("team", "2team");
    }
    console.log("ㅇㅇ");
    navigator("/list");
  };
  return (
    <PageWrap>
      <DarkContainer
        style={{
          marginTop: 0,
          padding: "1rem",
          boxSizing: "border-box",
          borderTop: "none",
        }}
      >
        <div style={{ width: "40%", margin: "auto" }}>
          <img src="/images/logo-big.jpeg" style={{ width: "100%" }} />
        </div>
        <h1
          style={{
            textAlign: "center",
            whiteSpace: "pre-wrap",
            lineHeight: "150%",
            letterSpacing: "0.25rem",
          }}
        >
          {`본인의 팀을\n`}
          <span style={{ color: "#fc711c" }}>선택하세요!</span>
        </h1>
        <div
          style={{
            marginTop: "1.5rem",
            color: "#fc711c",
          }}
        >
          <SelectTeamWrap onClick={() => selectHandler("팀1")}>
            <h2>성공팀^^</h2>
          </SelectTeamWrap>
          <SelectTeamWrap onClick={() => selectHandler("팀2")}>
            <h2>실패팀ㅋ</h2>
          </SelectTeamWrap>
        </div>
      </DarkContainer>
    </PageWrap>
  );
};

export default Select;
