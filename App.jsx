// import {config} from './js/config'


// console.log(config)
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
            <h1>Travel back to a time</h1>
            <input type="date" name="date" value={date} onChange={event => setDate(event.currentTarget.value)}/>
            <button type="button" name="button" onClick={fetchPOD}>Blast off</button>
            <img src={imageInfo.url} alt="" />
            <h2>{imageInfo.title}</h2>
            <p>{imageInfo.explanation}</p>
        </>
    )
}
