const getweatherdetail= async ()=>{
console.log(input.value);
if (input.value) {
      const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=85839bd3f5694d3f5526c18ceeeb0ea8`)
    if (response.status == 200) {
        const weatherDetails = await response.json()
        console.log(weatherDetails);
         result.innerHTML=` <div class="last">
                    <p id="par">${weatherDetails.name}</p>
                    <p id="para">${(weatherDetails.main.temp-273.15).toFixed(0)}°C</p>
                </div>

                <div class="last">
                    <h4 class="head2">Wind: ${weatherDetails.wind.speed}</h4>
                    <h4 class="head2">Pressure: ${weatherDetails.main.pressure}</h4>
                    <h4 class="head2">Humidity: ${weatherDetails.main.humidity}</h4>
                </div>`
        }
    }
   
  } 

       

