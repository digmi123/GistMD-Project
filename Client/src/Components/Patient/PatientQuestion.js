import React, { useEffect } from 'react'
import {useState} from 'react'
import './PatientQuestion.css'


function PatientQuestion(props) {
  

  const [value, setValue] = useState("")

  useEffect(()=>{
    setValue(props.filledValues)
  }, [props.filledValues])


  switch(props.question.type) {
  case "text":
  case "number":
    return <input className="input-container" type = {props.question.type} value={value} onChange={(e)=>{(setValue(e.target.value))}} name={props.question.id} key= {props.question.id} placeholder={props.question.id}/>

  case "select":
    return (
          <select className= "select-container" name={props.question.id} value={value} onChange={(e)=>{(setValue(e.target.value))}}>
            {props.question.options.map((option,i) => (
              <option key={i}>{option}</option>
            ))}
          </select>
    )
  default:
    return <h1>Error</h1>
}
}

export default PatientQuestion