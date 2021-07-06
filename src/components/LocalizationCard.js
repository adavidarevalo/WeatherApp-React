import React, {useState} from "react"
import styled from "@emotion/styled"
const LocalizationCardDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
div{
background:  rgba(255, 255, 255, .8);
padding: 35px 50px;
border-radius: 5px;
box-shadow: 2px 2px 20px 20px rgb(0 0 0 / 20%);
p{
  text-align: center;
}
}
`


const LocalizationCard=()=> {
    const [info, addInfo] = useState({})
    const [locationInfo, addGeolocation] = useState("")
    if(info){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
                getApi(position.coords.latitude, position.coords.longitude )
            }, (e)=>{
              Error(e.message)
            })
        }
        const getApi = async(latitude, longitude)=>{
          try{
              const Api = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=7daaca17f73b8537056bf2d813d49c18`)
              const data = await Api.json()
              addInfo({...data})
          } catch(error){
          }
        } 
    }
    const Error = (error) => {
      console.log("Error", error)
   switch(error.code) {
    case error.PERMISSION_DENIED:
      addGeolocation(`User denied the request for Geolocation.`)
      break;
    case error.POSITION_UNAVAILABLE:
      addGeolocation(`Location information is unavailable.`)
      break;
    case error.TIMEOUT:
      addGeolocation(`The request to get user location timed out`)
      break;
    case error.UNKNOWN_ERROR:
      addGeolocation(`An unknown error occurred.`)
      break;
  }
}
    if(!info.timezone) return (
    <LocalizationCardDiv>
      <div>
        <p>{locationInfo}</p>
      </div>
    </LocalizationCardDiv>);
    return(
        <LocalizationCardDiv>
          <div>
            <h2>El clima de <span>{info.timezone}</span> es:</h2>
          <p>{(info.daily[0].temp.day-273.15).toFixed(1)}<span> °C</span></p>
          <p>The maximum temperature is: {(info.daily[0].temp.max-273.15).toFixed(1)} °C</p>
          <p>The minimum temperature is: {(info.daily[0].temp.min-273.15).toFixed(1)} °C</p> 
          </div>
        </LocalizationCardDiv>
    )
}

export default LocalizationCard;


