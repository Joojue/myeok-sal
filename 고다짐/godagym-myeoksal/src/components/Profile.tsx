import { ChallengeBox, CheerBox, ProfileBox, Section } from "./Component.style";
import { Inbodys } from "../types/inbody";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { getComments, getInfo } from "../apis/get";
import { Comment } from "../types/comments";
import { getItem } from "../utils/localstorage";

interface PropType {
  inbodys: Inbodys;
}

const Profile = (props: PropType) => {
  const navigator = useNavigate();

  const [isSucc, setIsSucc] = useState(false);
  const [comments, setComments] = useState<DocumentData>();

  useEffect(() => {
    getComments(props.inbodys.name, getItem("team")).then((result) => {
      setComments(result);
    });
  }, [props.inbodys.name]);

  useEffect(() => {
    getInfo("팀성공여부", getItem("team")).then((result) => {
      if (result?.isSucc) {
        setIsSucc(true);
      } else {
        setIsSucc(false);
      }
    });
  }, []);

  return (
    <Section
      onClick={() => navigator(`/${props.inbodys.id}`)}
      style={{ cursor: "pointer" }}
    >
      <img
        src={props.inbodys.img}
        style={{ width: "84px", objectFit: "contain" }}
      />
      <ProfileBox>
        <p style={{ fontWeight: 700 }}>{props.inbodys.name}</p>
        <p style={{ color: "#dfedfc" }}>{props.inbodys.kind}형</p>
        <p style={{ marginTop: "1rem", color: "#dfedfc", fontWeight: 600 }}>
          목표 {props.inbodys.total}
        </p>
      </ProfileBox>
      <ChallengeBox>
        <section>
          <span>{props.inbodys.first}</span>
          <span>{props.inbodys.second}</span>
        </section>
        <section>
          <span>{props.inbodys.third}</span>
          <span>{props.inbodys.fourth}</span>
        </section>
        <section
          style={{ marginTop: "1rem", fontWeight: 600, color: "#fcdddd" }}
        >
          {isSucc ? (
            <span style={{ fontWeight: 700, color: "#dfedfc" }}>성공 !!</span>
          ) : props.inbodys?.total -
              props.inbodys?.first -
              props.inbodys?.second -
              props.inbodys?.third -
              props.inbodys?.fourth <
            0 ? (
            <span style={{ fontWeight: 700, color: "#dfedfc" }}>성공 !!</span>
          ) : (
            `현재 ${(
              props.inbodys?.total -
              props.inbodys?.first -
              props.inbodys?.second -
              props.inbodys?.third -
              props.inbodys?.fourth
            ).toLocaleString()}`
          )}
        </section>
      </ChallengeBox>
      <CheerBox>
        {comments?.length > 0 ? (
          comments?.slice(0, 3).map((comment: Comment, index: number) => (
            <div key={index}>
              <p>{comment.content}</p>
            </div>
          ))
        ) : (
          <span style={{ fontSize: "0.675rem", textAlign: "center" }}>
            아직 댓글이 없어요ㅠ
          </span>
        )}
      </CheerBox>
    </Section>
  );
};

export default Profile;
