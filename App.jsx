
export default class App extends React.Component {

    state = { date: '', imageInfo: {} }

    fetchPOD = () => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res => res.json())
        .then(data => this.setState({ imageInfo: data }))
  }

    render () {
        return (
            <>
                <h1>Travel back to a time</h1>
                <input type="date" name="date" value={this.state.date} onChange={event => this.setState({ date: event.currentTarget.value })}/>
                <button type="button" name="button" onClick={this.fetchPOD}>Blast off</button>

                <img src={this.state.imageInfo.url} alt="" />
                <h2>{this.state.imageInfo.title}</h2>
                <p>{this.state.imageInfo.explanation}</p>
            </>
        )
    }
}
