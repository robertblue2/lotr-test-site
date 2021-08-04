import React, {useState, useEffect} from 'react';
import HumanCharacter from '../HumanCharacter/HumanCharacter';


const HumanCharacters = ({jsonData}) =>  {

    const [characters, setCharacters] = useState(null)

    useEffect(() => {
        filterCharacters()
    }, [jsonData])

    
    const filterCharacters = () => {
        if (jsonData) {  
            setCharacters(jsonData.filter(character => character.race === 'Human'))
        }
    }

    console.log('characters', characters)

        return (
            <div>
                {characters && characters.map((character) => <HumanCharacter key={character._id} character={character}/>)} 
            </div>
        );
    
}

export default HumanCharacters;