import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function DisplayVote(props){
    return(
        <div>
              {props.arrayItems.sort(function(a,b){
                return b.vote - a.vote;
            }).map((item,index) =>
            <div id="vote-row" key={index}>
            <span id="vote-num">{item.vote}</span>
            <img src={item.imgUrl} className="brand-logo"/>
            {/* <h3 id="vote-name">{item.name}</h3> */}
            <div id="voting-btn">
            <button onClick={()=>props.functionAdd(item)} id="btn-add"><FontAwesomeIcon icon={faThumbsUp} /></button>
            <button onClick={()=>props.functionMinus(item)} id="btn-remove"><FontAwesomeIcon icon={faThumbsDown} /></button>
            </div>
        </div>
        
        )}
        </div>
      
    
    )
}