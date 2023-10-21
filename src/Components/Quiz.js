import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import QuizBody from './QuizBody';
import NavbarOthers from './NavbarOthers';

export default function Quiz() {
  const [pieces,setPieces] = useState(0);

  let quizItems = [
    {
        question: "Which colour did you wear in the oldest picture I have of yours?" ,
        answer: "pink" ,
        hint: "No hint!"
    },
    {
        question: "Write the fourth city in chronological order, I have been to." ,
        answer: "jodhpur" ,
        hint: "No hint!"
    },
    {
        question: "On which date I proposed to you? (DD/MM/YYYY)" ,
        answer: "05/09/2019" ,
        hint: "Its rememberable to every Indian!"
    },
    {
        question: "Write the cuisine I like the most?" ,
        answer: "india" ,
        hint: "No hint!"
    },
    {
        question: "Where did we have our first walk together(before or after relationship)" ,
        answer: "vyas" ,
        hint: "No hint!"
    },
    {
        question: "Have I ever been the class monitor? (Yes/No)" ,
        answer: "yes" ,
        hint: "No hint!"
    },
    {
        question: "What colour did you wear in the picture I drew your potrait from?" ,
        answer: "white" ,
        hint: "No hint!"
    },
    {
        question: "Which body part you gave me my first hicckie?" ,
        answer: "neck" ,
        hint: "No hint!"
    },
    {
        question: "How much did I pay on our first date?" ,
        answer: "700" ,
        hint: "You were shocked!"
    },
    {
        question: "What was the name of the fest in which I invited you at my college? " ,
        answer: "ankuran" ,
        hint: "No hint!"
    },
    {
        question: "My first prize in my school life was for which competetion?" ,
        answer: "draw" ,
        hint: "No hint!"
    },
    {
        question: "In 4th standard, which hand of mine got fractured?" ,
        answer: "left" ,
        hint: "No hint!"
    },
    {
        question: "What colour did you wear in the picture I put as my whatsApp wallpaper first time?" ,
        answer: "pink" ,
        hint: "You can find it in this gift."
    },
    {
        question: "On which date you gave me your first gift?" ,
        answer: "29/10/2019" ,
        hint: "Yes!! You have your hint."
    }
  ]



   useEffect(()=>{
   },[]);

  return (
    <div>
      <Confetti  width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={pieces} 
      />
      <NavbarOthers/>
      <div style={{width:"100vw",height:"100vh",overflowX:"hidden", overflowY:"auto"}}>
      <QuizBody question={quizItems[0].question} answer={quizItems[0].answer} hint={quizItems[0].hint} setPieces={setPieces}/>
      <QuizBody question={quizItems[1].question} answer={quizItems[1].answer} hint={quizItems[1].hint} setPieces={setPieces}/>
      <QuizBody question={quizItems[2].question} answer={quizItems[2].answer} hint={quizItems[2].hint} setPieces={setPieces}/>
      <QuizBody question={quizItems[3].question} answer={quizItems[3].answer} hint={quizItems[3].hint} setPieces={setPieces}/>
      <QuizBody question={quizItems[4].question} answer={quizItems[4].answer} hint={quizItems[4].hint} setPieces={setPieces}/>
      <QuizBody question={quizItems[5].question} answer={quizItems[5].answer} hint={quizItems[5].hint} setPieces={setPieces}/>
      <QuizBody question={quizItems[6].question} answer={quizItems[6].answer} hint={quizItems[6].hint} setPieces={setPieces}/>
      <QuizBody question={quizItems[7].question} answer={quizItems[7].answer} hint={quizItems[7].hint} setPieces={setPieces}/>
      <QuizBody question={quizItems[8].question} answer={quizItems[8].answer} hint={quizItems[8].hint} setPieces={setPieces}/>
      <QuizBody question={quizItems[9].question} answer={quizItems[9].answer} hint={quizItems[9].hint} setPieces={setPieces}/>
      <QuizBody question={quizItems[10].question} answer={quizItems[10].answer} hint={quizItems[10].hint} setPieces={setPieces}/>
      <QuizBody question={quizItems[11].question} answer={quizItems[11].answer} hint={quizItems[11].hint} setPieces={setPieces}/>
      <QuizBody question={quizItems[12].question} answer={quizItems[12].answer} hint={quizItems[12].hint} setPieces={setPieces}/>
      <QuizBody question={quizItems[13].question} answer={quizItems[13].answer} hint={quizItems[13].hint} setPieces={setPieces}/>
      </div>
    </div>
  )
}
