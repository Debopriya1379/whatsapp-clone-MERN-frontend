import React from 'react'
import '../components/sidebarChat.css'

import {Avatar} from '@mui/material'


function SidebarChat() {
    return (
        <div className="SidebarChat">
            <Avatar/>
            <div className="SidebarChat_info">
                <h2>Room Name</h2>
                <p>This is the last Chat</p>
            </div>
        </div>
    )
}

export default SidebarChat
