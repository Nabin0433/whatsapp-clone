import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';
function SidebarChat() {
    return (
        <div className='sidebarchat'>
            <div className='sidebar_info'>
                <Avatar src='https://th.bing.com/th/id/R3b6f7ee66eb48c8ecbd4c0533b27c814?rik=WG%2bY%2b6KVwe%2fAuA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_205260.png&ehk=dZZ2lzMYqZ33FS99BFJHQ5DzaeBe%2fi%2bu32Hw98lnGjA%3d&risl=&pid=ImgRaw' />
                <h2>meeee</h2>
                <p>some text</p>
                <small>
                <sapn className='timespan'>yy/mm/dd</sapn>
                </small>
            </div>
        </div>
    )
}

export default SidebarChat;
