import MsgInput from './MsgInput' //데이터 업데이트용

const MsgItem = ({id, userId, timestamp,text, onUpdate, onDelete, startEdit, isEditing, myId, user}) => (
  <li className="messages__item">
    <h3>
      {user.nickname}{' '}
      <sub>
        {new Date(timestamp).toLocaleString('ko-KR', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })}
      </sub>
    </h3>
    {isEditing ? (
      <>
        {/* id 는  onUpdate할 아이디*/}
        <MsgInput mutate={onUpdate} text={text} id={id} />
      </>
    ) : (
      text
    )}
    {myId === userId && (
      <div className="messages__buttons">
        <button onClick={startEdit}>수정</button>
        <button onClick={onDelete}>삭제</button>
      </div>
    )}
  </li>
)
export default MsgItem