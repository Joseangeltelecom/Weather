const container = document.querySelector(".content")
const input = document.querySelector(".input")
const form = document.querySelector(".form")

form.addEventListener("submit", async function getData(e, city) {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=28fe7b5f9a78838c639143fc517e4343`
  try {
    e.preventDefault()
    const response = await fetch(endpoint, { mode: "cors" })
    if (!response.ok) throw new Error(`City ${city} not found`)
    const data = await response.json()
    console.log(data)
    container.innerHTML = ` 
    <div class="cards" >
        <h1 class="card-title">${data.name}</h1>
        <h2 class="card-subtitle mb-2 text-muted"> Temperature: ${data.main.temp} °C</h2>

        <p class="card-text ">Humidity: ${data.main.humidity} %</p>
        <p class="card-text ">Wind Speed: ${data.wind.speed} km/h</p>
        <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>
    </div>
`
    return data
  } catch (error) {
    alert(error)
    return null
  }
})
