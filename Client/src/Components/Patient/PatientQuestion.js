import React from 'react'


function PatientQuestion(props) {

  switch(props.question.type) {
  case "text":
  case "number":
    return <input type = {props.question.type} key= {props.question.id} placeholder={props.question.text}/>

  case "select":
    return (
          <select defaultValue={props.question.options[0]}>
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