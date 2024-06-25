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
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#fc711c",
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    "& .MuiOutlinedInput-notchedOutline": {
                      color: "#fc711c",
                      borderColor: "#fc711c",
                      borderWidth: "1px",
                    },
                  },
                  "& .MuiInputLabel-outlined": {
                    color: "#fc711c",
                    fontWeight: "bold",
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
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#fc711c",
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    "& .MuiOutlinedInput-notchedOutline": {
                      color: "#fc711c",
                      borderColor: "#fc711c",
                      borderWidth: "1px",
                    },
                  },
                  "& .MuiInputLabel-outlined": {
                    color: "#fc711c",
                    fontWeight: "bold",
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
