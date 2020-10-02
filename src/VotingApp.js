import React from 'react';
//import images from './img'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
export default function VotingApp(){
    

    let defaultItems=[
        {name: 'Starbucks', vote: 0, imgUrl: require("./img/starbucks-226353.png")},
        {name: 'Lavazza', vote: 10,imgUrl: require("./img/lavazza-bnr.jpg")},
        {name: 'Red Bay', vote: 10,imgUrl: require("./img/red-bay.jpeg")},
        {name: 'Cafe Du Monde', vote: 10,imgUrl: require("./img/cafe-du-monde-logo.jpg")},
        {name: 'Dunkin Donuts', vote: 10,imgUrl: require("./img/dunkin_donut.jpeg")},
        {name: 'Gloria Jeans', vote: 10,imgUrl: require("./img/Gloria_Jean's_Coffees_logo.jpg")},
        {name: 'Kickapoo', vote: 10,imgUrl: require("./img/kickapoo.jpg")}
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
            <h1>Coffee Brand Rating App</h1>
            {items.sort(function(a,b){
                return b.vote - a.vote;
            }).map(item=><div id="vote-row">
                <span id="vote-num">{item.vote}</span>
                <img src={item.imgUrl} className="brand-logo"/>
                {/* <h3 id="vote-name">{item.name}</h3> */}
                <div id="voting-btn">
                <button onClick={()=>addVote(item)} id="btn-add"><FontAwesomeIcon icon={faThumbsUp} /></button>
                <button onClick={()=>removeVote(item)} id="btn-remove"><FontAwesomeIcon icon={faThumbsDown} /></button>
                </div>
            </div>)}
        </div>
    )
     
    


}