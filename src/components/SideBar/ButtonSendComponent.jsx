import "./Button.scss";
import { BiCheck } from "react-icons/bi";

// --------------------- COMPONENT ------------------------
const ButtonSendComponent = (props) => {
  return (
    <div>
      {props.estado !== 4 && (
        <button className={Estados(props.estado)}>{Show(props.estado)}</button>
      )}
    </div>
  );
};

export default ButtonSendComponent;

function Estados(state) {
  switch (state) {
    case 1:
      return "button";
    case 2:
      return "button button--loading";
    case 3:
      return "button button--icon";
    default:
      return "button";
  }
}

function Show(val) {
  switch (val) {
    case 1:
      return "send";
    case 2:
      return "";
    case 3:
      return <BiCheck size="2rem" />;
    default:
      return;
  }
}
