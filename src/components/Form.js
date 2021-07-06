import React, {useState} from "react"
import styled from "@emotion/styled"
const FormDiv = styled.div`
display: flex;
justify-content:center;
align-items: center;
form{
  background:  rgba(255, 255, 255, .8);
  width: 100%;
  max-width:350px;
  height:100%;
  max-height: 200px;
  padding: 20px 10px;
  border-radius:5px;
  box-shadow: 2px 2px 20px 20px rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  label{
    font-size: 1.7rem;
    font-weight: 500;
    letter-spacing: 2px;
  }
  input{
    height: 25px;
    padding: 0px 10px;
    border:none;
    outline: none;
    background: #8c8a8a;
    color:#fff;
    width: 100%;
    max-width: 250px;
    margin-top: 10px ;
    ::placeholder{
      color:#fff;
    }
  }
  button{
    border:none;
    width: 150px;
    padding: 10px 15px;
    border-radius: 5px;
    background: #2b2765;
    color:#fff;
    font-size: .8999rem;
    transition: background .5s ease;
    &:hover,
    &:active{
      background: #010c3e;
    }
  }
}
`
const FormError = styled.p`
color:red;
margin: 0px 0px 15px 0px;
`
function Form({addMainCountry, addApi, addPrint}) {
    const [country, modifyCountry] = useState()
    const [error, modifyError] = useState(false)
    const addCountry = e =>{
        modifyCountry({
            [e.target.name]: e.target.value
        })
    }
    const clickCountry = () =>{
        if(country === undefined){
            modifyError(true)
            return
        }
        modifyError(false)
        addMainCountry(country)
        addApi(true)
        addPrint(true)
    }
 return(
     <FormDiv>
         <form>
             <label>Country</label>
             <br/>
             <input 
             type="text" 
             placeholder="Place your Country here."
             name="country"
             onChange={addCountry}
             ></input>
             <br/>
             {error? <FormError>Fill in all the data</FormError>: null}
             <button 
             type="button" 
             onClick={clickCountry}
             >Get Weather</button>
         </form>
     </FormDiv>
 )   
}
export default Form;