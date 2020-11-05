import React from 'react';
import './Main.css';
import MainFeed from './mainFeed/MainFeed';
import AnnouncementIcon from '@material-ui/icons/AnnouncementOutlined';
import TrackChangesIcon from '@material-ui/icons/TrackChangesOutlined';
import HistoryIcon from '@material-ui/icons/HistoryOutlined';

function Main() {
    return (
        <div className="main_container">
            <div className="feed">
                <h2 className="feed_title"><span><AnnouncementIcon className="feed_icon"/></span>Announcements</h2>
                <MainFeed />
            </div>
            <div className="targets">
                <h2 className="feed_title"><span><TrackChangesIcon className="feed_icon"/></span>Targets</h2>
            </div>
            <div className="jobs">
            <h2 className="feed_title"><span><HistoryIcon className="feed_icon"/></span>Latest Jobs</h2>
            </div>   
        </div>
    )
}

export default Main;
