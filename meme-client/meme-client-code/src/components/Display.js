import React, { useEffect, useState } from "react";
import MemeCollection from "./MemeCollection";
import NewMeme from "./NewMeme";
// import BotArmy from "./YourBotArmy";

function Display() {
  let [memes, setMemes] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/memes")
      .then((resp) => resp.json())
      .then(data => setMemes(data))
  }, [])

  

//   let addBot= (bot)=>{
//     setBot(bots.map((b)=>(b.id === bot.id ? {...b, army:true} : b)))
// }
// let removeBot =(bot)=>{
//     setBot(bots.map((b)=>(b.id === bot.id ? {...b, army:false} : b)))
// }

// let deleteBot = (bot)=>{
//     let botRemoved =  bots.filter((b)=> b.id !==bot.id);
//     setBot((bot)=>botRemoved)
// }
  return (
    <div>

<NewMeme/>
 <MemeCollection 
            memes= {memes}
            // addBot={addBot}
            // deleteBot={deleteBot}
 />




 </div>
  )
}

export default Display;