import {
  DarkContainer,
  LoginBtn,
  PageWrap,
  SelectTeamWrap,
} from "./Pages.style";

import { useState } from "react";
import BasicModal from "../components/BasicModal";
import SignUp from "../components/SignUp";
import TextInput from "../components/TextInput";
import { useNavigate } from "react-router-dom";
import { lengCalc } from "../utils/lengCalc";

const Login = () => {
  const navigator = useNavigate();

  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [id, setId] = useState("");
  const [idError, setIdError] = useState(false);

  const [pwd, setPwd] = useState("");
  const [pwdError, setPwdError] = useState(false);

  const loginHandler = () => {
    if (lengCalc(id)) {
      setIdError(true);
      return;
    } else {
      setIdError(false);
      if (lengCalc(pwd)) {
        setPwdError(true);
        return;
      } else {
        setPwdError(false);

        //api 로직
        console.log(id, pwd);
        setId("");
        setPwd("");
        navigator("/team");
      }
    }
  };

  return (
    <PageWrap>
      <BasicModal open={open} handleClose={handleClose}>
        <SignUp handleClose={handleClose} />
      </BasicModal>
      <DarkContainer
        style={{
          marginTop: 0,
          padding: "1rem",
          boxSizing: "border-box",
          borderTop: "none",
        }}
      >
        <div style={{ width: "40%", margin: "auto", marginTop: "4rem" }}>
          <img src="/images/logo-big.jpeg" style={{ width: "100%" }} />
        </div>
        <div
          style={{
            color: "#fc711c",
          }}
        >
          <SelectTeamWrap>
            <div style={{ marginBottom: "1rem" }}>
              <TextInput
                label="ID"
                value={id}
                setValue={setId}
                error={idError}
                helperText="아이디를 입력해주세요."
              />
              <TextInput
                label="Password"
                type="password"
                value={pwd}
                setValue={setPwd}
                error={pwdError}
                helperText="비밀번호를 입력해주세요."
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                    loginHandler();
                  }
                }}
              />
            </div>
            <div style={{ width: "80%", margin: "auto" }}>
              <LoginBtn>
                <button onClick={loginHandler}>로그인</button>
              </LoginBtn>
              <LoginBtn>
                <button onClick={handleOpen}>회원가입</button>
              </LoginBtn>
            </div>
          </SelectTeamWrap>
        </div>
      </DarkContainer>
    </PageWrap>
  );
};

export default Login;
