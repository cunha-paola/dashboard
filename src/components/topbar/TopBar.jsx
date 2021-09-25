import React from 'react';
import "./topbar.css";
import { ExitToApp, Language, NotificationsNone, Settings } from '@material-ui/icons';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">PC<strong>29</strong></span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <img src="https://images.pexels.com/photos/2120871/pexels-photo-2120871.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
