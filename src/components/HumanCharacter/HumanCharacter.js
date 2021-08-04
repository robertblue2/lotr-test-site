import React from 'react';
import './HumanCharacter.css'


const HumanCharacter = ({character}) =>  {

   
        return (
            <div className="nameContainer">
                <h1 className="name" >{character.name}</h1>
            </div>

        );
    
}

export default HumanCharacter;