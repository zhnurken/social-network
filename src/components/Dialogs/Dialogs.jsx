import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElement = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messagesElement = props.state.messages.map((m) => <Message message={m.message} />);
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElement}</div>
      <textarea className={s.messagesTextarea}></textarea>
      <button className={s.messagesButton}>Отправить</button>
    </div>
  );
};

export default Dialogs;
