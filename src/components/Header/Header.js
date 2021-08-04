import React from 'react';
import lotrLogo from '../../lotr-logo.png';
import './Header.css'

const Header = () =>  {

        return (
            <div>             
                <img src={lotrLogo} className="appLogo" alt="logo" />
            </div>
        );
    
}

export default Header;