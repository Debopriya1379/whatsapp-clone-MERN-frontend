import React from 'react'
import '../components/sidebar.css'
import SidebarChat from './SidebarChat';

import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Avatar, IconButton} from '@mui/material'


function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="sidebar__header">
                <Avatar src="https://sites.google.com/site/priyalseportfolio1/_/rsrc/1388330390187/who-am-i/global-entrepreneurs/mark-zuckerberg/9.jpg?height=400&width=300"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="Sidebar_search">
                <div className="Sidebar_SearchContainer">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Seacrch chats" />
                </div>
            </div>

            <div className="Sidebar_Chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
