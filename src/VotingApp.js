import React from 'react';
//import images from './img'

import VotingComponent from './Component/VotingComponent';
export default function VotingApp(){
    

    let defaultItems=[
        {name: 'Starbucks', vote: 0, imgUrl: require("./img/starbucks-226353.png")},
        {name: 'Lavazza', vote: 30,imgUrl: require("./img/lavazza-bnr.jpg")},
        {name: 'Red Bay', vote: 5,imgUrl: require("./img/red-bay.jpeg")},
        {name: 'Cafe Du Monde', vote: 90,imgUrl: require("./img/cafe-du-monde-logo.jpg")},
        {name: 'Dunkin Donuts', vote: 6,imgUrl: require("./img/dunkin_donut.jpeg")},
        {name: 'Gloria Jeans', vote: 28,imgUrl: require("./img/Gloria_Jean's_Coffees_logo.jpg")},
        {name: 'Kickapoo', vote: 59,imgUrl: require("./img/kickapoo.jpg")}
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
            <VotingComponent arrayItems = {items}
                                functionAdd = {addVote}
                                functionMinus = {removeVote} />
        </div>
    )
     
    


}