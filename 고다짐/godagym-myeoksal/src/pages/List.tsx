import { useNavigate } from "react-router-dom";
import { DarkContainer, ListHeader, PageWrap } from "./Pages.style";
import Profile from "../components/Profile";
import { Inbodys } from "../types/inbody";
import { useEffect, useState } from "react";
import { getData, getInfo, updateData } from "../apis/get";
import { DocumentData } from "firebase/firestore";
import { idToName } from "../utils/enumChanger";
import { getItem } from "../utils/localstorage";

const List = () => {
  //TODO: 팀 불러오기 로직 필요. 로그인한 회원 id 주고 그 회원의 팀을 얻어와서 그
  const navigator = useNavigate();

  const [teamMates, setTeamMates] = useState<DocumentData>([]);
  const [totalFatRemaining, setTotalFatRemaining] = useState<
    number | undefined
  >(undefined);

  useEffect(() => {
    const totalFat = teamMates.reduce((acc: number, curr: DocumentData) => {
      const sumOfParts = curr.first + curr.second + curr.third + curr.fourth;
      return acc + (curr.total - sumOfParts);
    }, 0);

    setTotalFatRemaining(totalFat);
  }, [teamMates]);

  useEffect(() => {
    const updateSuccessStatus = async () => {
      if (totalFatRemaining) {
        const isSuccess = totalFatRemaining <= 0;
        await updateData("팀성공여부", { isSucc: isSuccess }, getItem("team"));
      }
    };
    updateSuccessStatus();
  }, [totalFatRemaining]);

  useEffect(() => {
    const updateTeamMatesState = async () => {
      const result = await getInfo("팀성공여부", getItem("team"));

      if (result?.isSucc) {
        await Promise.all(
          teamMates.map(async (el: { id: number }) => {
            await updateData(
              idToName[el.id],
              { state: "team" },
              getItem("team")
            );
          })
        );

        const updatedResult = await getData(getItem("team"));
        setTeamMates(updatedResult.slice(0, 1));
      }
      const updatedResult = await getData(getItem("team"));
      setTeamMates(updatedResult.slice(0, 1));
    };

    updateTeamMatesState();
  }, [totalFatRemaining]);

  return (
    <PageWrap>
      <ListHeader>
        <img
          src="/images/white-left-arrow.svg"
          style={{ width: "24px", cursor: "pointer", color: "white" }}
          onClick={() => navigator("/team")}
        />
        <span>근코 업고 튀어 !</span>
      </ListHeader>
      <DarkContainer>
        {teamMates.map((info: Inbodys, index: number) => (
          <Profile inbodys={info} key={index} />
        ))}
      </DarkContainer>
    </PageWrap>
  );
};

export default List;
