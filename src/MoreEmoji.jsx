import React, {Fragment, useState, useEffect} from 'react';

function MoreEmoji(props) {
  const [counter, setCounter] = useState(1);

  let emojis = [];
  for(let i=0; i<counter; i++){
    emojis.push(props.emoji)
  }

 // This will render whenever the Component's function is called
 console.log(`From Component: ${emojis.join('')}`)

  // This will render whenever the Component's depenency changes.
  useEffect(()=>{
    document.title = emojis.join('');
    console.log(
      `From useEffect with dependency [counter]: ${emojis.join('')}`
    )
  },[counter])


  // This will render once when the Compnent did mount.
  useEffect(()=>{
    document.title = `Hello: ${props.emoji}`
    console.log(`Hello: ${props.emoji}`)
    // returned function will be called when unmounting
    return () => {
      console.log(`Goodbye ${props.emoji}`)
      document.title = `Goodbye ${props.emoji}`;
    }
  },[])

  return (
    <>
      {emojis.map((emoji, i) => <span key={i}>{emoji}</span>)}
      <br/>
      <button onClick={()=>setCounter(counter+1)}>More</button>
      <button onClick={()=>setCounter(0)}>Reset</button>
    </>
  )
}

export default MoreEmoji;