import React, {useEffect, useState} from 'react'
import './Table.css'
import axios from 'axios';
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';



function Table() {

    const [patientsData, setPatientsData] = useState([]);
    const [questionData, setQuestionData] = useState([]);

    const navigate = useNavigate();

    useEffect(async ()=>{
        setPatientsData(await getPatients())
        setQuestionData(await getQuestionData())
    }, [])


    //Server requests
    const getQuestionData = async ()=>{
    const response = await axios.get("http://localhost:5000/question/getQuestionData")
    if(response.status === 200){
        return response.data
    }
}

    const getPatients = async ()=>{
        const response = await axios.get("http://localhost:5000/patients/getPatients");
        if(response.status === 200){
            return response.data
        }
        else{
            response.send("Unable to get patients data");
        }
    }

    const deletePatientById = async (patientId)=>{
        console.log(patientId);
        const response = await axios.delete(`http://localhost:5000/patients/deletePatient/${patientId}`)
        if(response.status === 200){
            toast.success(response.data)
            const updatedPatients = patientsData.filter((patient)=>{
                return patient._id !== patientId
            })
            setPatientsData(updatedPatients)
        }
        else{
            response.send("Unable to get patients data");
        }
    }


  return (
    <>
    <div className="add-patient-btn-container">
            <button className="btn btn-add-patient"onClick={()=>{navigate('/add')}}>Add patient</button>
    </div>

    <div style={{marginTop: "15px"}}>
        <table className='styled-table'>
            <thead>
            <tr>
                <th style={{textAlign: "center"}}>No.</th>
                {questionData.map((question,i)=>{
                    return(<th style={{textAlign: "center"}} key={i}>{question.text}</th>)
                })}
                <th>Actions</th>
            </tr>
            </thead>
        
            <tbody>
                    {patientsData && patientsData.map((record, index)=>{
                        return (
                            <tr key={index}>
                            <th scope="row">{ index+1 }</th>
                            {questionData.map((question,index) => {
                                console.log(question);
                                if(record[question.id]){
                                    return <td key={index} table-data={question.text}>{record[question.id]}</td>
                                }
                                return <td key={index} table-data={question.text}>{"N/A"}</td>
                            })}
                            <td table-data={"Actions"} style={{display:"flex",justifyContent:"flex-end"}}>
                                <Link to={`/update/${record._id}`}>
                                    <button className='btn btn-edit'>Edit</button>
                                </Link>
                                <button className='btn btn-delete' onClick={()=> deletePatientById(record._id)}>Delete</button>
                            </td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Table