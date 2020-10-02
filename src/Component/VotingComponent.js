import React from 'react'

export default function DisplayVote(props){
    return(
        <div>
            <h2>{props.name} ({props.array.length})</h2>
           <List array={props.array} function={props.function} />
        </div>
    )
}