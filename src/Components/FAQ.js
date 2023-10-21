import React from 'react'
import QuestionBody from './QuestionBody'
import NavbarOthers from './NavbarOthers'

const items = [
  {
    question: "Do you love me?",
    answer: "Absolutely,my babe, I love you so so so soooooo... much! <3",
    no: "1"
  },
  {
    question: "You don't find me attractive, do you?",
    answer: "I don't know but whenever I see you/your pic, little Rajat keep on  trying to look outside its boundaries!!",
    no: "2"
  },
  {
    question: "You don't love me anymore, right?",
    answer: "Its not the case my bubu. I have got more into comfort with you that I started taking you as granted, but since you have pointed it out. I will not be like that!! PUPU",
    no: "3"
  },
  {
    question: "When we will meet?",
    answer: "As soon as I get the joining, I will think of something.",
    no: "4"
  },
  {
    question: "You don't miss me, do you?",
    answer: "You are correctly staying with an absolute wrong idea. I miss you a lot my jaan!",
    no: "5"
  },
  {
    question: "Whom do you talk to the most?",
    answer: "Ofcourse you my baby!",
    no: "6"
  },
  {
    question: "When will you give me gifts like other bf's do?",
    answer: "Again, wait for sometime. Sabr ka fal milega tumko.",
    no: "7"
  },
  {
    question: "What is our anniversary date?",
    answer: "29th October",
    no: "8"
  },
  {
    question: "The best date we had till now?",
    answer: "\"The one where\" we went to the trampoline park!",
    no: "9"
  },
  {
    question: "Which is the thing about me that attracts you the most? ",
    answer: "Your smile!! (Coz you know I love your curve ;) )",
    no: "10"
  },
  {
    question: "What is the thing you love doing to me?",
    answer: "Annoying you! ",
    no: "11"
  },
  {
    question: "Our taste don't match, is it?",
    answer: "None of us will be able to tell this ever baby, coz you know my taste and I know your taste and we can never taste ourselves. Hence, we can't tell the difference. Though one thing I know is that you taste heavenly (Place my fav emoji for you here).",
    no: "12"
  },
  {
    question: "What will you do when you will meet me?",
    answer: "Kuch baate batayi nahi jaati, nazar lag jaati h! ;)",
    no: "13"
  },
  {
    question: "Baby, which colour suits me? ",
    answer: "Wheatish! IYKYK",
    no: "14"
  },
  {
    question: "Why do you keep calling me with weird names?",
    answer: "Coz you are pompu!!",
    no: "15"
  },
  {
    question: "",
    answer: "(Now that I have answered all your questions, I deserve the approval to all my demands!)",
    no: "16"
  },

]

export default function FAQ() {
  return (
    <>
    <NavbarOthers/>
      {
        items.map((item)=>{
          return <QuestionBody question={item.question} answer={item.answer} no={item.no}/>;
        })
      }
    </>
  )
}