import styled from "styled-components";
import { useState } from "react";

export default function Kontakte() {
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [savedData, setSavedData] = useState({});
  
    function handleChange(event){
        setCheckboxChecked(event.target.checked)
        console.log(event.target.checked)
    }

    function savedInput(event) {
    event.preventDefault();
    const form = event.target;
    const { name, email, nachricht  } = form.elements;
    if(checkboxChecked){
        setSavedData({name: name.value, email: email.value, nachricht: nachricht.value});
        window.confirm("Wir haben Deine Daten erfolgreich übernommen. Danke!")
    } else{
        window.confirm("Bitte bestätige dass Du die Datenschutzbedingungen gelesen hat und akzeptierst diese!")
    }
    
    
  }
  console.log(savedData);
  return (
    <Section>
      <form onSubmit={savedInput}>
        <fieldset>
          <legend>Kontaktformular: </legend>
          <div><label htmlFor="name">Name: </label>
          <input
         
            type="text"
            name="name"
            id="name"
            pattern=".*[^\s]{1,}.*"
            placeholder="Nazar..."
            required
          ></input>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            pattern=".*[^\s]{1,}.*"
            placeholder="email@908989.com"
            required
          ></input></div>
          
          <label htmlFor="nachricht">Nachricht: </label>
          <textarea
            name="nachricht"
            id="nachricht"
            rows="9"
            maxLength="250"
            pattern=".*[^\s]{1,}.*"
            required
          ></textarea>

        <CheckboxAndButton>
            <form>
                <input type="checkbox" onChange={handleChange}></input>
                <label htmlFor="check">Ich habe die AGB gelesen und stimme den Datenschutzbedingungen zu.</label>
            </form>
            <button type="submit">Submit</button>
        </CheckboxAndButton>

        </fieldset>
      </form>

      <Output>
        <h3>Das sind die von Die eingegebene persönliche Daten:</h3> 
        <p><b>Name: </b> {savedData.name}</p>
        <p><b>Email: </b> {savedData.email}</p>
        <p><b>Nachricht: </b>{savedData.nachricht}</p>
      </Output>
    </Section>
    
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: 100px auto;
  flex-direction: column;
  fieldset {
    display: flex;
    margin:auto;
    justify-content: center;
    flex-direction: column;
    min-height: 300px;
    gap: 10px;
    min-width: 300px;
    max-width: 500px;
    input{
        margin:10px}
  }
`;

const CheckboxAndButton =styled.div`
display:flex;
flex-direction: row;
form{
    max-width: 400px;
    text-align: center;
};
button{
    height: 30px;
    margin:auto;
    border-radius: 5px;
    cursor: pointer;
}
`
const Output =styled.div`
width:300px;
margin:auto;
p{
    text-align: left;
    min-width:100px}
`