import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElement = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messagesElement = state.messages.map((m) => <Message message={m.message} />);
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body)
  }
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>
        <div>{messagesElement}</div>
        <div>
          <div><textarea  className={s.messagesTextarea} 
                          value={ newMessageBody }
                          onChange={onNewMessageChange}></textarea></div>
          <div><button className={s.messagesButton} onClick={ onSendMessageClick }>Отправить</button></div>
        </div>
        </div>
    </div>
  );
};

export default Dialogs;
