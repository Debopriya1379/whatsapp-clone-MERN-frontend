import React from 'react'
import '../components/chatComponent.css'

import {Avatar, IconButton} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFile from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function ChatComponent() {
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
                <p className="Chat_Message">
                    <span className="Chat_Name">Sonny</span>
                    This is a meseage   {/*p tag main content*/}
                    <span className="Chat_Timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="Chat_Message">
                    <span className="Chat_Name">Sonny</span>
                    This is a meseage   {/*p tag main content*/}
                    <span className="Chat_Timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="Chat_Message Chat_Receiver">
                    <span className="Chat_Name">Sonny</span>
                    This is a meseage   {/*p tag main content*/}
                    <span className="Chat_Timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="Chat_Message">
                    <span className="Chat_Name">Sonny</span>
                    This is a meseage   {/*p tag main content*/}
                    <span className="Chat_Timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>

            <div className="Chat_Footer">
                <InsertEmoticonIcon/>
                <form>
                    <input type="text" placeholder="Type a message" />
                    <button type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>

        </div>
    )
}

export default ChatComponent
