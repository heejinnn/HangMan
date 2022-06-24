import React, {useState} from 'react';
import LetterGrid from './LetterGrid';
import ButtonGrid from './ButtonGrid';


const Hangman = ({puzzle, maxError}) => {
    // 내가 누른 알파벳
    const [guessedLetters, setGuessedLetters] = useState([]);
    // 현재까지 오류 개수
    const [errorCnt, setErrorCnt] = useState(0);

    const guessedLetterHandler = (letter) =>{
        let val = letter.toLowerCase();
        // spread
        setGuessedLetters(prev => [...prev, val])

        if(puzzle.toLowerCase().indexOf(val) === -1){
            setErrorCnt(errorCnt + 1);
        }
        else{
        }

    }


    return(
        <>
            <LetterGrid puzzle={puzzle} guessedLetters={guessedLetters} />
            <div id='left'>
                LEFT : {maxError - errorCnt}
            </div>
            <ButtonGrid guessedLetterHandler={guessedLetterHandler} isClickable={errorCnt !== maxError}/>
        </>
    );
};

export default Hangman;