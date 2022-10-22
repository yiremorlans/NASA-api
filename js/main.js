const apiKey = config.SECRET_API_KEY

document.querySelector('button').addEventListener('click', getFetch)
async function getFetch(){
      try {
            
            const userChoice = document.querySelector('input').value
            const fetchPromise = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${userChoice}`)
            const data = await fetchPromise.json()
            const picOfDay = new NasaPOD(data.date, data.title, data.explanation, data.url) 
            picOfDay.showInfo()
            console.log(data) 

      } catch (error) {

            console.log(error)
      }
      
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