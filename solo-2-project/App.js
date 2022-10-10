import React from "react"
import Card from "./Card"
import data from "./data"
import Header from "./Header"

export default function App() {
    const elemenets = data.map((el) => {
        return (
            <Card 
                key={el.id}
                {...el}
            
            />
        )
    })
    return(
        <div>
        <Header/>
        {elemenets}
        </div>
    )
}