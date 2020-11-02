import React from 'react';
import './Header.css';
import NyxLogoAlt from '../../assets/images/nyx-end-trans.png';
import { ExitToApp } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';


function Header() {



    return (
        <div className="header_container">
            <div className="title_container">
                <h1 className="title">Atlas<span className="subtitle">task manager</span></h1>
            </div>
     
            <div className="search_bar">
                <TextField
                    fullWidth
                    className="search_box"
                    variant="standard"
                    color="primary"
                    id="input-with-icon-textfield"
                    placeholder="What are you looking for?"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment className="search_icon" position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
            <div className="exit">
                <h3>Logout</h3>
                <ExitToApp />
            </div>
        </div>
        
    )
}

export default Header;
