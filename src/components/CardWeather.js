import React from "react"
import styled from "@emotion/styled"
const CardWeatherDiv = styled.div`
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
const CardWeatherP = styled.p`
font-size: 4rem;
margin: 0;
span{
  font-size: 2rem;
}
`

const CardWeather = ({apiContain}) => {
  const {name, main } = apiContain
  if(!name) return (
    <CardWeatherDiv>
      <div>
        <p>404: Not Found</p>
        <p>Try Again</p>
      </div>
    </CardWeatherDiv>
  );
    return(
        <CardWeatherDiv>
          <div>
          <h2>El clima de <span>{name}</span> es:</h2>
          <CardWeatherP>{(main.temp-273.15).toFixed(1)}<span> °C</span></CardWeatherP>
          <p>The maximum temperature is: {(main.temp_max-273.15).toFixed(1)} °C</p>
          <p>The minimum temperature is: {(main.temp_min-273.15).toFixed(1)} °C</p>
          </div>  
        </CardWeatherDiv>
    )
}
export default CardWeather;