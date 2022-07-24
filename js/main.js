document.querySelector('button').addEventListener('click', getFetch)

const apiKey = config.SECRET_API_KEY

function getFetch(){
const userChoice = document.querySelector('input').value
const fetchPromise = fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${userChoice}`)

fetchPromise
    .then(res => res.json()) 
    .then(data => {
          console.log(data)
            const picOfDay = new NasaPOD(data.date, data.title, data.explanation, data.url) 
            picOfDay.showInfo()
          })
    .catch(err => {
          console.log(err)
          })

}

class NasaPOD {
      constructor(date, title, description, image) {
            this.date = date
            this.title = title
            this.description = description
            this.image = image
      }

      showInfo() {
            document.querySelector('h1').innerText = this.date
            document.querySelector('h2').innerText = this.title
            document.querySelector('p').innerText = this.description
            document.body.style.backgroundImage = `url('${this.image}')`
      }
}