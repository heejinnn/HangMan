import React from 'react';
import Button from './Button';

const ButtonGrid = ({guessedLetterHandler, isClickable}) => {

    let letters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
    ];

    let buttons = letters.map((letter, index)=>(
        <Button key={index} value={letter} click={guessedLetterHandler} />
    ));

    let className = 'buttons';

    if(!isClickable){
        className += ' click';
        console.log(className);
        console.log("click");
        
    }

    return (
        <div className={className}>
            {buttons}
        </div>
    );
};

export default ButtonGrid;