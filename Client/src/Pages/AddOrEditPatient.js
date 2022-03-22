import React, { useEffect } from 'react'
import PatientQuestion from '../Components/Patient/PatientQuestion'
import {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import './AddOrEditPatient.css'


function AddOrEditPatient() {

  const [selectedUser, setSelectedUser] = useState();
  const [questionData, setQuestionData] = useState([]);

  //While clicking Add or Update in the existing form
  const handleSubmitAdd = async (e)=>{
  const patient = {}
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  console.log(Object(data.entries()));
  
  let i=0;
  for(var pair of data.entries()) {
    if(questionData[i].required && !pair[1]){
      return toast.error(`field ${pair[0]} is required`)
    }
   patient[pair[0]] = pair[1];
   i++;
}
  await addPatient(patient);
  navigate("/");
}

  const handleSubmitEdit = async (e)=>{
  const patient = {}
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  
  let i=0;
  for(var pair of data.entries()) {
    if(questionData[i].required && !pair[1]){
      return toast.error(`field ${pair[0]} is required`)
    }
   patient[pair[0]] = pair[1];
   i++;
}
console.log(patient);
  await editPatient(patient);
  navigate("/");
}



const {id} = useParams();


useEffect(async ()=>{
  if(id){
    setSelectedUser(await getSingleUser(id))
    console.log(setSelectedUser)
  }
  setQuestionData(await getQuestionData())
},[id])




//Server requests
const getQuestionData = async()=>{
  const response = await axios.get("http://localhost:5000/question/getQuestionData")
  if(response.status === 200){
    return response.data
  }
}



const getSingleUser = async(data)=>{
  const response = await axios.get(`http://localhost:5000/patients/getPatient/${id}`, data)
  if(response.status === 200){
    toast.success(response.data)
    return response.data
  }
}

const editPatient = async (data)=>{
  const response = await axios.put(`http://localhost:5000/patients/updatePatient/${id}`, data)
    if(response.status === 200){
    toast.success(response.data)
  }
}

const addPatient = async (data)=>{
  const response = await axios.post("http://localhost:5000/patients/addPatient", data)
  if(response.status === 200){
    toast.success(response.data)
  }
}

  const navigate = useNavigate();

  return (
    <div style={{marginTop:"50px"}}>
    <form className="form-container" onSubmit={id ? handleSubmitEdit : handleSubmitAdd}>
        <h1>Patient questionnaire</h1>
        {questionData.map((question,i)=>{
            return (
                    <PatientQuestion key={i} className="question-container" filledValues={selectedUser ? selectedUser[question.id]:""} question={question}/>
            )
        })}
        <div className='btn-container'>
        <button className="btn-form" type='submit'>{id ? "Update":"Add"}</button>
        <button className="btn-form" onClick={()=>{navigate("/")}}>Back</button>
        </div>
    </form>
    </div>
  )
}

export default AddOrEditPatient