import { useEffect, useState } from 'react';
import './static/style.css';
import axios from "axios";
import Waiting from "./Waiting";
import Hangman from './Hangman';

function App() {
  const [puzzle, setPuzzle] = useState("");
  const [loading, setLoading] = useState(true);

  // API -> JS 비동기 함수 async() await, Promise
  const getPuzzle = async() =>{
    try{
      const p = await axios.get(
        'https://puzzle.mead.io/puzzle?wordCount=1'
        );
      let word = p.data.puzzle;
      setPuzzle(word);
      console.log(word);
    }catch(error){
      console.log("정보를 불러오지 못함");
    }finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    getPuzzle();
  },[]);

  const reload = () =>{
    window.location.reload();
  }

  return (
    <>
      {loading ? 
        <Waiting/> : 
        <>
          <Hangman puzzle={puzzle} maxError={5} />
          <button id='resetBtn' onClick={reload}>새로고침</button>
        </>}

    </>
  );
}

export default App;
