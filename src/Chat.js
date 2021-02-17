import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert';

import './Chat.css'
function Chat() {
    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar />
                <div className='chat_headerinfo'>
                    <h3>some one</h3>
                    <p>last online</p>
                </div>
                <div className='chat_headerright'>
                    <IconButton >
                        <SearchRoundedIcon/>
                    </IconButton>
                      <IconButton >
                        <AttachFile />
                    </IconButton>
                      <IconButton >
                        <MoreVert/>
                    </IconButton>
                </div>
                
            </div>
        </div>
    )
};

export default Chat;
