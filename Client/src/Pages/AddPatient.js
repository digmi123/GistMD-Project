import React from 'react'
import PatientQuestion from '../Components/Patient/PatientQuestion'
import {useState} from 'react'
import questionData from '../questionData'

function AddPatient() {


  return (
    <form>
        <h1>Patient questionnaire</h1>
        {questionData.map((question)=>{
            return (
                <div key={question.id}>
                    <PatientQuestion question={question}/>
                </div>
            )
        })}
        <button>Submit</button>
    </form>
  )
}

export default AddPatient