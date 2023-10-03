import React from 'react'
import { useState } from 'react'
import bird from './assets/svg/bird.svg'
import cat from './assets/svg/cat.svg'
import cow from './assets/svg/cow.svg'
import dog from './assets/svg/dog.svg'
import gator from './assets/svg/gator.svg'
import horse from './assets/svg/horse.svg'
import heart from './assets/svg/heart.svg'

const svgMap = {bird,cat,cow,dog,gator,horse}

function Animal({name}) {

    const [clicks,setClicks] = useState(0);

    const clickeado = () =>{
        setClicks(clicks+1);
    }

  return (
    <div onClick={clickeado}>
        <img width="100px" height="100px" src={svgMap[name]}/>
        <img src={heart} style={{width:10+10*clicks+'px'}}/>
    </div>
  )
}

export default Animal