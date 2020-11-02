import React from 'react';
import './Sidebar.css';
import MenuItem from './MenuItem/MenuItem';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import MessageIcon from '@material-ui/icons/MessageOutlined';
import BuildIcon from '@material-ui/icons/BuildOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import LocalLibraryIcon from '@material-ui/icons/LocalLibraryOutlined';
import StorageIcon from '@material-ui/icons/StorageOutlined';
import MoneyIcon from '@material-ui/icons/AttachMoneyOutlined';
import Logo from './logo/Logo';

function Sidebar() {
    return (
        <div className="sidebar_container">
            <div className="logo_container">
                <Logo />
            </div>

            <div className="menu">
                <MenuItem active text="Home" Icon={HomeIcon}/>
                <MenuItem text="Messages" Icon={MessageIcon}/>
                <MenuItem text="Jobs" Icon={BuildIcon}/>
                <MenuItem text="Drive" Icon={StorageIcon}/>
                <MenuItem text="Targets" Icon={MoneyIcon}/>
                <MenuItem text="Settings" Icon={SettingsIcon}/>
            </div>
            

        </div>
    )
}

export default Sidebar;
