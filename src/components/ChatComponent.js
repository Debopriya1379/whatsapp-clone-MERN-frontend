import {React,useState} from 'react'
import '../components/chatComponent.css'
import Axios from '../Axios.js'

import {Avatar, IconButton} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFile from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function ChatComponent({messages}) {

    const[input,setInput] = useState('')

    const sendMessage = async(e)=>{
        e.preventDefault();
        await Axios.post('/messages/new',{
            "message": input,
            "name": "demo",
            "timestamp": " demo time",
            "received": true
        })
        setInput('')
    }

    return (
        <div className="Chat">

            <div className="Chat_Header">
                <Avatar/>
                <div className="Chat_HeaderInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="Chat_HeaderRight">
                    <IconButton>
                        <SearchOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="Chat_Body">

                {
                    messages.map((message)=>{
                        return(
                            <p className={`Chat_Message ${message.received && 'Chat_Receiver'}`}>
                        <span className="Chat_Name">{message.name}</span>
                        {message.message}   {/*p tag main content*/}
                        <span className="Chat_Timestamp">
                            {/* {new Date().toUTCString()} */}
                            {message.timestamp}
                        </span>
                        </p>
                        )
                    })
                }
            </div>

            <div className="Chat_Footer">
                <InsertEmoticonIcon/>
                <form>
                    <input value={input} onChange={e=> setInput(e.target.value)} type="text" placeholder="Type a message" />
                    <button onClick={sendMessage} type="submit">Send a message</button>                
                </form>
                <MicIcon/>
            </div>

        </div>
    )
}

export default ChatComponent
