const url = `https://api.adviceslip.com/advice`

const fetchAdvice = async () =>{
    const response = await fetch(url)
    const data = await response.json()

    document.querySelector(".title").innerHTML = `Advice # ${data.slip.id}`
    document.querySelector(".text").innerHTML = `"${data.slip.advice}"`
}
fetchAdvice()