import { TextField } from "@mui/material";
import { LoginBtn, LoginWrap } from "../pages/Pages.style";

const SignUp = () => {
  return (
    <div>
      <div style={{ width: "40%", margin: "auto" }}>
        <img src="/images/logo-big-white.png" style={{ width: "100%" }} />
      </div>
      <LoginWrap style={{ marginTop: 0 }}>
        <TextField
          id="outlined-basic"
          label="핸드폰"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              fontSize: "0.775rem",
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
              fontSize: "0.775rem",
              color: "#fc711c",
              fontWeight: "bold",
            },
          }}
        />
      </LoginWrap>
      <LoginWrap>
        <TextField
          id="outlined-basic"
          label="비밀번호"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              fontSize: "0.775rem",
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
              fontSize: "0.775rem",
              color: "#fc711c",
              fontWeight: "bold",
            },
          }}
        />
      </LoginWrap>
      <LoginWrap>
        <TextField
          id="outlined-basic"
          label="비밀번호 확인"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              fontSize: "0.775rem",
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
              fontSize: "0.775rem",
              color: "#fc711c",
              fontWeight: "bold",
            },
          }}
        />
      </LoginWrap>
      <div style={{ marginTop: "1rem", width: "100%" }}>
        <LoginBtn>
          <button>회원가입</button>
        </LoginBtn>
      </div>
    </div>
  );
};

export default SignUp;
