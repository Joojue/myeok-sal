import { LoginBtn } from "../pages/Pages.style";
import { lengCalc } from "../utils/lengCalc";
import TextInput from "./TextInput";
import { useState } from "react";

interface PropType {
  handleClose: () => void;
}

const SignUp = (props: PropType) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");

  const signHandler = () => {
    if (lengCalc(id) || lengCalc(name) || lengCalc(pwd) || lengCalc(pwd2)) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    console.log(id, name, pwd);
    props.handleClose();
  };

  return (
    <>
      <div style={{ width: "40%", margin: "auto" }}>
        <img src="/images/logo-big-white.png" style={{ width: "100%" }} />
      </div>
      <div style={{ width: "100%" }}>
        <TextInput label="아이디" value={id} setValue={setId} small />
        <TextInput label="닉네임" value={name} setValue={setName} small />
        <TextInput label="비밀번호" value={pwd} setValue={setPwd} small />
        <TextInput
          style={{ marginBottom: "1rem" }}
          label="비밀번호 확인"
          value={pwd2}
          setValue={setPwd2}
          small
        />
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <LoginBtn>
          <button style={{ letterSpacing: 3 }} onClick={signHandler}>
            회원가입완료
          </button>
        </LoginBtn>
      </div>
    </>
  );
};

export default SignUp;
