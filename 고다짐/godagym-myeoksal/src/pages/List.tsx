import { Link } from "react-router-dom";
import { DarkContainer, ListHeader, PageWrap } from "./Pages.style";
import Profile from "../components/Profile";
import { Inbodys } from "../types/inbody";
import { useEffect, useState } from "react";
import { getData, getInfo, updateData } from "../apis/get";
import { DocumentData } from "firebase/firestore";
import { idToName } from "../utils/enumChanger";

const List = () => {
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
        await updateData("팀성공여부", { isSucc: isSuccess });
      }
    };
    updateSuccessStatus();
  }, [totalFatRemaining]);

  useEffect(() => {
    const updateTeamMatesState = async () => {
      const result = await getInfo("팀성공여부");

      if (result?.isSucc) {
        await Promise.all(
          teamMates.map(async (el: { id: number }) => {
            await updateData(idToName[el.id], { state: "team" });
          })
        );

        const updatedResult = await getData();
        setTeamMates(updatedResult.slice(0, 6));
      }
      const updatedResult = await getData();
      setTeamMates(updatedResult.slice(0, 6));
    };

    updateTeamMatesState();
  }, [totalFatRemaining]);

  return (
    <PageWrap>
      <ListHeader>
        <p>오로지 팀성공!</p>
        <Link to="/pyo">
          <span>감량 현황 한눈에 보기</span>
        </Link>
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
