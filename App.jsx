// import {config} from './js/config'
import Header from './components/Header'
import Button from './components/Button'
import SpaceInfo from './components/SpaceInfo'
// import React from 'react'
// import { useState } from 'react'



export default function App() {
    const [date, setDate] = React.useState('')
    const [imageInfo, setImageInfo] = React.useState({})

    const fetchPOD = () => {
        const isDateInFuture = new Date(date) > new Date()
        if (isDateInFuture){
            return setImageInfo({
                title: 'The future has not been captured yet..', 
                url: 'https://www.science.org/do/10.1126/science.aaa7852/full/sn-interstellarh.jpg', 
                explanation: '' 
            })
        }
        fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
        .then(res => res.json())
        .then(data => setImageInfo(data))
        
  }


    return (
        <>
        <p>THis is a paragraph.</p>
            <Header getDate={date} fetchDate={setDate}/>
            <Button getFetch={fetchPOD}/>
            <SpaceInfo spaceTitle={imageInfo.title} spaceImg={imageInfo.url} spaceExplanation={imageInfo.explanation}/>
        </>
    )
}
