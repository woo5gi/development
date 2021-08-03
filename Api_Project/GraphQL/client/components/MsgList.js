import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import MsgItem from './MsgItem'
import MsgInput from './MsgInput'
import fetcher from '../fetcher'
import useInfiniteScroll from '../hooks/useInfiniteScroll'

const UserIds = ['roy', 'jay']
//랜덤하게 아이디 생성
const getRandomUserId = () => UserIds[Math.round(Math.random())]

// const originalMsgs = Array(50).fill(0).map((_,i) => ({

//   id: i + 1,
//   userId:getRandomUserId(),
//   timestamp: 1234567890123 + i * 1000 * 60,
//   text: `${i+1} mock text`
// })).reverse()

// console.log(JSON.stringify(originalMsgs))

const MsgList = ({ smsgs , users}) => {
  const { query } = useRouter(smsgs)
  const userId = query.userId || query.userid || '';
  const [msgs, setMsgs] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [hasNext, setHasNext] = useState(true)
  const fetchMoreEl = useRef(null)
  const intersecting = useInfiniteScroll(fetchMoreEl)
  // const onCreate = async text => {
  //   const newMsg ={
  //     id: msgs.length + 1,
  //     userId: getRandomUserId(),
  //     timestamp: Date.now(),
  //     text: `${msgs.length+ 1} ${text}`,
  //   }

    const onCreate = async text => {
    const newMsg = await fetcher('post', '/messages', { text, userId })
    if (!newMsg) throw Error('something wrong')
    setMsgs(msgs => [newMsg, ...msgs])
  }

    // input으로 입력한 데이터 저장
    // setMsgs(msgs => ([newMsg, ...msgs]))
    // console.log(newMsg);
   
  const onUpdate = async (text, id) => {
    const newMsg = await fetcher('put', `/messages/${id}`, { text, userId })
    if (!newMsg) throw Error('something wrong')
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id)
      if (targetIndex < 0) return msgs
      const newMsgs = [...msgs]
      newMsgs.splice(targetIndex, 1, newMsg)
      return newMsgs
    })
    doneEdit()
  }

  const doneEdit = () => setEditingId(null)
  
  const getMessages = async () => {
    const newMsgs = await fetcher('get', '/messages', { params: { cursor: msgs[msgs.length - 1]?.id || '' } })
    if (newMsgs.length === 0) {
      setHasNext(false)
      return
    }
    setMsgs(msgs => [...msgs, ...newMsgs])
  }

  useEffect(() => {
    if (intersecting && hasNext) getMessages()
  }, [intersecting])

  const onDelete = async id => {
    const receivedId = await fetcher('delete', `/messages/${id}`, { params: { userId } })
    console.log(typeof  receivedId, typeof id)
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === receivedId + '')
      if (targetIndex < 0) return msgs
      const newMsgs = [...msgs]
      newMsgs.splice(targetIndex, 1)
      return newMsgs
    })
  }

  return (
    <>
      {userId && <MsgInput mutate={onCreate} />}
      <ul className="message">{
        msgs.map(x => 
        <MsgItem 
        key={x.id} 
        {...x} 
        onUpdate={onUpdate}
        startEdit={() => setEditingId(x.id)}
        isEditing={editingId === x.id}
        onDelete={() => onDelete(x.id)}
        myId={userId}
        user={users[x.userId]}
         />)
      }
      </ul>
      <div ref={fetchMoreEl} />
    </>
  )
}
export default MsgList