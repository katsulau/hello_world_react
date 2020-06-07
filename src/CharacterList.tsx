import { FC } from "react";
import React from "react";

export interface Character {
    name: string;
    age: number;
}


interface CharacterListProps {
    school: string;
    characters: Character[];
}


const CharacterList: FC<CharacterListProps> = ({
    school = '校名不明',
    characters,
}) => (
    <>
    <div>{school}</div>
    {characters.map( character => (
        <div>
             <div>{character.name}</div>
             <div>{character.age}</div>
        </div>
     ))}
    </>
);

export default CharacterList;