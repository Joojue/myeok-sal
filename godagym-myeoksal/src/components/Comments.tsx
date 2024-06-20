import { useEffect, useState } from "react";
import { getComments, postComments } from "../apis/get";
import { idToName } from "../utils/enumChanger";
import { DocumentData } from "firebase/firestore";
import { Comment } from "../types/comments";
import { CommentsBox, CommentsWrap } from "./Component.style";
import { OpenBtn, StyledInput } from "../pages/Pages.style";
import { getItem } from "../utils/localstorage";

interface PropType {
  id: number;
  info?: DocumentData;
}

const Comments = (props: PropType) => {
  const [comments, setComments] = useState<DocumentData>();

  const [input, setInput] = useState("");

  const postHandler = () => {
    if (input.trim().length === 0) {
      alert("내용을 입력해주세요");
      return;
    } else {
      postComments(idToName[props.id], input, getItem("team")).then(() => {
        alert("댓글이 작성되었습니다!");
        getComments(idToName[props.id], getItem("team")).then((result) => {
          setComments(result);
        });
      });
      setInput("");
    }
  };

  useEffect(() => {
    getComments(idToName[props.id], getItem("team")).then((result) => {
      setComments(result);
    });
  }, [props.id]);

  return (
    <div style={{ color: "white" }}>
      <CommentsWrap>
        {comments?.length > 0 ? (
          comments?.map((comment: Comment, index: number) => (
            <CommentsBox key={index}>
              <span
                style={{
                  textAlign: "left",
                  width: "70%",
                  marginLeft: "0.5rem",
                  wordBreak: "break-all",
                  lineHeight: "160%",
                }}
              >
                {comment.content}
              </span>
              <span style={{ width: "30%", fontSize: "0.775rem" }}>
                {new Date(
                  comment.time.seconds * 1000 +
                    comment.time.nanoseconds / 1000000
                )
                  .toLocaleString()
                  .slice(0, 11)}
              </span>
            </CommentsBox>
          ))
        ) : (
          <div>
            <p style={{ marginBottom: "1rem" }}>아직 댓글이 없습니다.</p>응원의
            문구를 작성해주세요!
          </div>
        )}
      </CommentsWrap>
      <div
        style={{
          margin: "auto",
          marginTop: "2rem",
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledInput
          style={{
            marginLeft: 0,
            width: "100%",
            color: "white",
            height: "2rem",
            marginRight: "0.5rem",
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <OpenBtn style={{ width: "20%" }}>
          <button
            style={{
              width: "100%",
              padding: "0.25rem 0",
              fontSize: "0.875rem",
              height: "2rem",
            }}
            onClick={postHandler}
          >
            등록!
          </button>
        </OpenBtn>
      </div>
    </div>
  );
};

export default Comments;
