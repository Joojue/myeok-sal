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
              fontSize: "0.775rem",
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
          label="비밀번호"
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
              fontSize: "0.775rem",
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
          label="비밀번호 확인"
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
              fontSize: "0.775rem",
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
          <button>회원가입</button>
        </LoginBtn>
      </div>
    </div>
  );
};

export default SignUp;
