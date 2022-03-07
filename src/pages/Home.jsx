import React from 'react'
import { useContext } from 'react'
import FeedbackContext from "../context/FeedbackContext";

function Home() {
    const {feedback} = useContext(FeedbackContext)

  return (
 
    <ul>
        {feedback.map((item) => (
            <li key={item.id}>{item.text}</li>
        ))}  
           <button onClick={() => {console.log('delete')} }>deletar</button>  
         </ul>
  )
}

export default Home