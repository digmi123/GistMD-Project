import React, {useEffect, useState} from 'react'
import questionData from '../../questionData'
import './Table.css'
import axios from 'axios';
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';


function Table() {

    const [patientsData, setPatientsData] = useState([])

    useEffect(()=>{
        getPatients()
    }, [])

    const getPatients = async ()=>{
        const response = await axios.get("http://localhost:5000/patients/getPatients");
        if(response.status === 200){
            setPatientsData(response.data)
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
    <div style={{marginTop: "80px"}}>
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
                            <td>{record.name}</td>
                            <td>{record.gender}</td>
                            <td>{record.age}</td>
                            <td>{record.language}</td>
                            <td>{record.procedure}</td>
                            <td style={{display:"flex"}}>
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
  )
}

export default Table