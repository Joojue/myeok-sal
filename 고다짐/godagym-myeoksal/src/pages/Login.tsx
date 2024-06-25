import {
  DarkContainer,
  LoginBtn,
  LoginWrap,
  PageWrap,
  SelectTeamWrap,
} from "./Pages.style";

import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import BasicModal from "../components/BasicModal";
import SignUp from "../components/SignUp";
import { getTest } from "../apis/test";

const Login = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getTest()
      .then((result) => {
        console.log(result);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <PageWrap>
      <BasicModal open={open} handleClose={handleClose}>
        <SignUp />
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
            <LoginWrap>
              <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                inputProps={{
                  autoComplete: "off", // 자동 완성 비활성화
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#fc711c",
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#fc711c", // 여기서 경계 색상 적용
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#fc711c", // 포커스 시 경계 색상 적용
                    },
                  },
                  "& .MuiInputLabel-outlined": {
                    color: "#fc711c",
                    fontWeight: "bold",
                    "&.Mui-focused": {
                      color: "#fc711c", // 포커스 시 라벨 색상 적용
                    },
                  },
                }}
              />
            </LoginWrap>
            <LoginWrap>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                inputProps={{
                  autoComplete: "off", // 자동 완성 비활성화
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#fc711c",
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#fc711c", // 여기서 경계 색상 적용
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#fc711c", // 포커스 시 경계 색상 적용
                    },
                  },
                  "& .MuiInputLabel-outlined": {
                    color: "#fc711c",
                    fontWeight: "bold",
                    "&.Mui-focused": {
                      color: "#fc711c", // 포커스 시 라벨 색상 적용
                    },
                  },
                }}
              />
            </LoginWrap>
            <div style={{ marginTop: "1rem", width: "100%" }}>
              <LoginBtn>
                <button>로그인</button>
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
