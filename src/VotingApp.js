import React from 'react';
export default function VotingApp(){
    

    let defaultItems=[
        {name: 'React', vote: 0},
        {name: 'Angular', vote: 10}
    ]
    const[items,setItems] = React.useState(defaultItems);

    const addVote=(item)=>{
        let newItems = [...items]
        let index = newItems.findIndex(i=>i.name === item.name)
        newItems[index].vote++
        setItems(newItems)
        
       
    }
    const removeVote=(item)=>{
        let newItems = [...items]
        let index = newItems.findIndex(i=>i.name === item.name)
        newItems[index].vote--
        setItems(newItems)
       
    }
    return(
        <div id="vote-container">
            <h1>JavaScript Voting App</h1>
            {items.sort(function(a,b){
                return b.vote - a.vote;
            }).map(item=><div id="vote-row">
                <span id="vote-num">{item.vote}</span>
                <h3 id="vote-name">{item.name}</h3>
                <div id="voting-btn">
                <button onClick={()=>addVote(item)} id="btn-add">+</button>
                <button onClick={()=>removeVote(item)} id="btn-remove">-</button>
                </div>
            </div>)}
        </div>
    )
     
    


}