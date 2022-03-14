import React from 'react'
import PatientQuestion from '../Components/Patient/PatientQuestion'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import questionData from '../questionData'
import axios from 'axios'
import { toast } from 'react-toastify'

function AddPatient() {

// const initialState = {
//     name:"",
//     gender:"",
//     age:"",
//     language:"",
//     procedure:""
//     //Todo: To make it scaleable means that if we add something not hard coded
// };

    // const [state, setState] = useState(initialState);
    // const {name, gender, age, language, procedure} = initialState;

  const handleSubmit = async (e)=>{
  const patient = {}
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  //console.log(data.get("PatientName"));
  for(var pair of data.entries()) {
   patient[pair[0]] = pair[1]
}
  //setState(data.getAll)
  await addPatient(patient);
  navigate("/");
}


const addPatient = async (data)=>{
  const response = await axios.post("http://localhost:5000/patients/addPatient", data)
  if(response.status === 200){
    toast.success(response.data)
  }
}


  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit}>
        <h1>Patient questionnaire</h1>
        {questionData.map((question)=>{
            return (
                <div key={question.id}>
                    <PatientQuestion question={question}/>
                </div>
            )
        })}
        <button type='submit'>Save</button>
        <button onClick={()=>{navigate("/")}}>Back</button>
    </form>
  )
}

export default AddPatient