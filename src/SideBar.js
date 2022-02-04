import React from 'react';
import SideBarRow from './SideBarRow';
import './SideBar.css';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieIcon from '@mui/icons-material/Movie';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import RoomIcon from '@mui/icons-material/Room';

function SideBar() {
    return (
        <div className="sidebar">
            <SideBarRow title="Home" Icons={HomeIcon}/>
            <SideBarRow title="History" Icons={HistoryIcon}/>
            <SideBarRow title="Watch Later" Icons={WatchLaterIcon}/>
            <SideBarRow title="Library" Icons={VideoLibraryIcon}/>
            <hr/>
            <SideBarRow title="Music" Icons={QueueMusicIcon}/>
            <SideBarRow title="Sports" Icons={SportsSoccerIcon}/>
            <SideBarRow title="Gaming" Icons={SportsEsportsIcon}/>
            <SideBarRow title="Movies" Icons={MovieIcon}/>
            <SideBarRow title="News" Icons={AnnouncementIcon}/>
            <SideBarRow title="Spotlight" Icons={RoomIcon}/>
            <SideBarRow title="Help" Icons={HelpIcon}/>
            <SideBarRow title="Settings" Icons={SettingsIcon}/>
        </div>
    )
}

export default SideBar
