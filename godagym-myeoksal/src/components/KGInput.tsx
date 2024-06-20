import { DocumentData } from "firebase/firestore";
import { idToName } from "../utils/enumChanger";
import { useState } from "react";
import {
  InputWrap,
  OpenBtn,
  StyledInput,
  StyledSelect,
} from "../pages/Pages.style";

interface PropType {
  updateHandler: (name: string, input: DocumentData) => void;
  id: number;
}

const KGInput = (props: PropType) => {
  const [week, setWeek] = useState<string>("none");
  const [kg, setKg] = useState<string>("");

  return (
    <InputWrap>
      <p>주차와 수치를 입력해주세요 :)</p>
      <section>
        <StyledSelect
          id="week"
          name="week"
          onChange={(e) => setWeek(e.target.value)}
        >
          <option value="none">주차 선택</option>
          <option value="first">1주차</option>
          <option value="second">2주차</option>
          <option value="third">3주차</option>
          <option value="fourth">4주차</option>
        </StyledSelect>
        <StyledInput
          type="number"
          value={kg}
          onChange={(e) => setKg(e.target.value)}
        />
      </section>
      <OpenBtn>
        <button
          onClick={() =>
            week === "none"
              ? alert("주차를 선택해주세요")
              : props.updateHandler(idToName[props.id], {
                  [week]: kg.trim().length === 0 ? null : Number(kg),
                })
          }
        >
          감량 체중 입력
        </button>
      </OpenBtn>
    </InputWrap>
  );
};

export default KGInput;
