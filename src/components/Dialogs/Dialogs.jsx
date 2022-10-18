import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to="path">{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Nurken" id="1" />
        <DialogItem name="Banu" id="2" />
        <DialogItem name="Asylym" id="3" />
        <DialogItem name="Almas" id="4" />
        <DialogItem name="Bauka" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="Hello" />
        <Message message="Privet" />
      </div>
    </div>
  );
};

export default Dialogs;
