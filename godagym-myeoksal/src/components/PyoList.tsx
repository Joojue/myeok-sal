import { Chip, Header } from "../App.style";
import { Inbodys } from "../types/inbody";

interface PropType {
  inbodys: Inbodys;
}

const PyoList = (props: PropType) => {
  return (
    <Header>
      <span style={{ fontSize: "0.775rem" }}>{props.inbodys.name}</span>
      <span>{props.inbodys.first}</span>
      <span>{props.inbodys.second}</span>
      <span>{props.inbodys.third}</span>
      <span>{props.inbodys.fourth}</span>
      <span>
        {(
          props.inbodys?.total -
          props.inbodys?.first -
          props.inbodys?.second -
          props.inbodys?.third -
          props.inbodys?.fourth
        ).toLocaleString()}
      </span>
      <Chip state={props.inbodys.state}>
        {props.inbodys.state === "ing"
          ? "도전중..."
          : props.inbodys.state === "indi"
          ? `개인성공!`
          : "팀성공!"}
      </Chip>
    </Header>
  );
};

export default PyoList;
