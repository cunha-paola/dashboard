import { AccountCircle, ExitToApp, Home, List, LiveTv, Movie, NotificationsNone, People, PermMedia, PlayCircleFilled, Report, Settings, Store, Timeline } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Platform</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <Home className="sidebarIcon" /> Home
              </li>
            </Link>
            <Link to="/users" className="link">  
              <li className="sidebarListItem">
                <People className="sidebarIcon" /> Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Movie className="sidebarIcon" /> Media
              </li>
            </Link>
            <li className="sidebarListItem">
              <List className="sidebarIcon" /> Content
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" /> Reporting
            </li>
            <li className="sidebarListItem">
              <Store className="sidebarIcon" /> Store
            </li>
            <li className="sidebarListItem">
              <Settings className="sidebarIcon" /> Settings
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
        <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PlayCircleFilled className="sidebarIcon" /> Films
            </li>
            <li className="sidebarListItem">
              <LiveTv className="sidebarIcon" /> TV Shows
            </li>
            <li className="sidebarListItem">
              <PermMedia className="sidebarIcon" /> Bundles
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
        <h3 className="sidebarTitle">Account</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <AccountCircle className="sidebarIcon" /> Account
            </li>
            <li className="sidebarListItem">
              <NotificationsNone className="sidebarIcon" /> Notifications
            </li>
            <li className="sidebarListItem">
              <ExitToApp className="sidebarIcon" /> Log out
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
