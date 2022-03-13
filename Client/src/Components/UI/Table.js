import React, {useState} from 'react'
import questionData from '../../questionData'
import data from '../../data'


function Table() {

    const [tableData, setData] = useState(data)
    console.log(tableData)

  return (
    <div>
        <table>
            <thead>
            <tr>
                {questionData.map((question,i)=>{
                    return(<th key={i}>{question.text}</th>)
                })}
            </tr>
            </thead>
        
            <tbody>
                    {tableData && tableData.map((record,i)=>{
                        return (
                            <tr key={i}>
                            <td>{record.name}</td>
                            <td>{record.gender}</td>
                            <td>{record.age}</td>
                            <td>{record.language}</td>
                            <td>{record.procedure}</td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    </div>
  )
}

export default Table