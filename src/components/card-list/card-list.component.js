import React from "react";
import './card-list.style.css'
import { Cards } from "../cards/cards.component";

export const CardList = (props) => {
  return(
    <div className='card-list'>
      { props.monsters.map(monster => (
            <Cards key={monster.id} monster={monster} />
        )) 
      } 
    </div>
  )
}