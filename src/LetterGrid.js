import React from 'react';
import Letter from './Letter';
import ButtonGrid from './ButtonGrid';

const LetterGrid = ({puzzle, guessedLetters}) => {
    let count =0;
    let letters = puzzle.split('')
                        .map((letter, index)=>{
                            let isClicked = guessedLetters.indexOf(letter.toLowerCase()) > -1;
                            if(isClicked===true){        
                                count++;
                            }
                            return (
                                <Letter key={index} letter={letter} isClicked={isClicked}/>
                            )
                        });
    if (count===letters.length){
        return (
            <ButtonGrid guessedLetterHandler={guessedLetters} isClickable={count !== letters.length}/>
        );
    }
    return (
        <div className='letters'>
            {letters}
        </div>
    );
};

export default LetterGrid;