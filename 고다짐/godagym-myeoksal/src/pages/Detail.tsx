import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getInfo, updateData } from "../apis/get";
import { useNavigate, useParams } from "react-router-dom";
import { idToName } from "../utils/enumChanger";
import {
  DarkContainer,
  DetailImgWrap,
  DetailProfileBox,
  ListHeader,
  OpenBtn,
  PageWrap,
} from "./Pages.style";

import BasicModal from "../components/BasicModal";
import KGInput from "../components/KGInput";
import Comments from "../components/Comments";
import { Chip } from "../App.style";
import { getItem } from "../utils/localstorage";

const Detail = () => {
  const { id } = useParams();
  const navigator = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [info, setInfo] = useState<DocumentData>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const updateHandler = (name: string, input: DocumentData) => {
    updateData(name, input, getItem("team")).then(() => {
      getInfo(idToName[Number(id)], getItem("team")).then((result) => {
        setInfo(result);
      });
    });
    alert("입력 됐습니다!");
    handleClose();
  };

  useEffect(() => {
    getInfo(idToName[Number(id)], getItem("team")).then((result) => {
      setInfo(result);
    });
  }, [id]);

  useEffect(() => {
    getInfo("팀성공여부", getItem("team")).then((result) => {
      if (result?.isSucc) {
        updateData(
          idToName[Number(id)],
          { state: "team" },
          getItem("team")
        ).then(() => {
          getInfo(idToName[Number(id)], getItem("team")).then((result) => {
            setInfo(result);
          });
        });
      } else {
        if (
          info?.first + info?.second + info?.third + info?.fourth >
          info?.total
        )
          updateData(
            idToName[Number(id)],
            { state: "indi" },
            getItem("team")
          ).then(() => {
            getInfo(idToName[Number(id)], getItem("team")).then((result) => {
              setInfo(result);
            });
          });
        else {
          updateData(
            idToName[Number(id)],
            { state: "ing" },
            getItem("team")
          ).then(() => {
            getInfo(idToName[Number(id)], getItem("team")).then((result) => {
              setInfo(result);
            });
          });
        }
      }
    });
  }, [info?.first + info?.second + info?.third + info?.fourth]);

  return (
    <PageWrap>
      <BasicModal open={open} handleClose={handleClose}>
        <KGInput updateHandler={updateHandler} id={Number(id)} />
      </BasicModal>
      <ListHeader>
        <img
          src="/images/white-left-arrow.svg"
          style={{ width: "24px", cursor: "pointer", color: "white" }}
          onClick={() => navigator("/list")}
        />
        <span style={{ fontSize: "1rem", padding: "0.5rem 1rem" }}>
          {getItem("team")} 팀원 {info?.name}
        </span>
      </ListHeader>
      <DarkContainer style={{ height: "100%" }}>
        <DetailImgWrap>
          <img
            src={info?.img}
            style={{ width: "128px", objectFit: "contain" }}
          />
        </DetailImgWrap>
        <DetailProfileBox>
          <p>{info?.name}</p>
          <p>{info?.kind}형</p>
          <p>목표 감량 체중 : {info?.total}kg</p>
          <p>1주차 감량 : {info?.first}kg</p>
          <p>2주차 감량 : {info?.second}kg</p>
          <p>3주차 감량 : {info?.third}kg</p>
          <p>4주차 감량 : {info?.fourth}kg</p>
          <p
            style={{
              backgroundColor: "#fc711c",
              color: "white",
              width: "40%",
              margin: "auto",
              fontSize: "1.125rem",
              padding: "1rem 1.5rem",
              borderRadius: "5.625rem",
              marginBottom: "1rem",
            }}
          >
            남은 감량 체중 :{" "}
            {(
              info?.total -
              info?.first -
              info?.second -
              info?.third -
              info?.fourth
            ).toLocaleString()}
            kg
          </p>
          <Chip
            state={info?.state}
            style={{
              width: "20%",
              margin: "auto",
              marginBottom: "1rem",
              fontSize: "1.25rem",
              fontWeight: 700,
              padding: "1rem 1.5rem",
            }}
          >
            {info?.state === "ing"
              ? "도전중..."
              : info?.state === "indi"
              ? `개인성공!`
              : "팀성공!"}
          </Chip>
        </DetailProfileBox>
        <OpenBtn onClick={handleOpen}>
          <button>감량 체중 입력하기</button>
        </OpenBtn>
        <div
          style={{
            marginTop: "2rem",
            textAlign: "center",
            paddingBottom: "2rem",
          }}
        >
          <Comments id={Number(id)} info={info} />
        </div>
      </DarkContainer>
    </PageWrap>
  );
};

export default Detail;
