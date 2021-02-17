import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton  } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';


function Sidebar(){
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <Avatar src=''/>
                <div className='sidebar_headerRight' >
                    <IconButton>
                     < DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                     < ChatIcon/>
                    </IconButton>
                    <IconButton>
                     < MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar_search' >
                <div className='sidebar_searchContainer'>
                    <SearchRoundedIcon />
                    <input placeholder='search people'type='text'/>
                </div>
            </div>
            <div className='sidebar_chat' >
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
};

export default Sidebar;
