import React, {useState} from "react"
import "./App.css"
import Form from "./components/Form"
import CardWeather from "./components/CardWeather"
import LocalizationCard from "./components/LocalizationCard"
import styled from "@emotion/styled"

const AppContainer = styled.div`
max-width: 1000px;
margin: 0 auto;
display:grid;
grid-template-columns:repeat(2, 1fr);
grid-template-rows:80vh;
`

function App() {
  /* const [error, modifyError] = useState(false) */
  const [mainCountry, addMainCountry] = useState({
    country:""
  })
  const [api, addApi] = useState(false)
  const [print, addPrint] = useState(false)
  const [apiContain, addApiContain] = useState({})
  /* const [apiLocalization, addLocalization] = useState({}) */
    const getApi = async(country)=>{
    const Api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=7daaca17f73b8537056bf2d813d49c18`)
     const data = await Api.json()
    addApiContain(data)
  }
  if(api){
    getApi(mainCountry.country)
    addApi(false)
  }
  return (
    <AppContainer>
      <Form 
      addMainCountry={addMainCountry} 
      addApi={addApi}
      addPrint={addPrint}
      />
      {print?
        <CardWeather apiContain={apiContain} />
        : <LocalizationCard />
      }
    </AppContainer>
  );
}

export default App;
