import React from 'react';
import lotrLogo from '../lotr-logo.png';

const Header = () =>  {

        return (
            <div>
                <img src={lotrLogo} className="App-logo" alt="logo" />
            </div>
        );
    
}

export default Header;