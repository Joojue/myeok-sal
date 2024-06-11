import { Link } from "react-router-dom";
import { Container, Header, TotalChip, Wrap } from "../App.style";
import PyoList from "../components/PyoList";

import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { getData } from "../apis/get";
import { Inbodys } from "../types/inbody";

const Pyo = () => {
  const [teamMates, setTeamMates] = useState<DocumentData>([]);

  const totalFatRemaining = teamMates.reduce(
    (acc: number, curr: DocumentData) => {
      const sumOfParts = curr.first + curr.second + curr.third + curr.fourth;
      return acc + (curr.total - sumOfParts);
    },
    0
  );

  useEffect(() => {
    getData().then((result) => {
      setTeamMates(result.slice(0, 6));
    });
  }, []);

  return (
    <Wrap>
      <Container>
        <Link to="/">
          <span>
            <img
              src="/images/left-arrow.svg"
              style={{ width: "24px", cursor: "pointer" }}
            />
          </span>
        </Link>
        <h3>빼바오 '오로지 팀성공'</h3>
        <Header style={{ fontWeight: 700 }}>
          <span>팀원</span>
          <span>1주차</span>
          <span>2주차</span>
          <span>3주차</span>
          <span>4주차</span>
          <span
            style={{
              whiteSpace: "pre-wrap",
              fontSize: "0.775rem",
            }}
          >{`남은\n체지방`}</span>
          <span style={{ padding: "0.25rem 0.5rem", flex: 1.5 }}>상태</span>
        </Header>
        {teamMates.map((info: Inbodys, index: number) => (
          <PyoList inbodys={info} key={index} />
        ))}
        <div style={{ marginTop: "3rem" }}>
          <h2 style={{ textAlign: "center" }}>목표 감량 체지방량 25kg</h2>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <h2 style={{ textAlign: "center" }}>
            남은 체지방량 {totalFatRemaining.toFixed(1)}kg
          </h2>
        </div>
        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <TotalChip>#파이팅</TotalChip>
          {totalFatRemaining <= 20 && <TotalChip>#-5kg</TotalChip>}

          {totalFatRemaining <= 15 && <TotalChip>#-10kg</TotalChip>}

          {totalFatRemaining <= 10 && <TotalChip>#-15kg</TotalChip>}
        </div>
        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          {totalFatRemaining <= 7 && <TotalChip>#다왔다</TotalChip>}

          {totalFatRemaining <= 5 && <TotalChip>#-20kg</TotalChip>}

          {totalFatRemaining <= 2 && <TotalChip>#할수있다</TotalChip>}

          {totalFatRemaining <= 0 && <TotalChip>#팀성공</TotalChip>}
        </div>
      </Container>
    </Wrap>
  );
};

export default Pyo;
