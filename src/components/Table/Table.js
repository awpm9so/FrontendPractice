import React from 'react'
import './Table.css'

export default props => (


    <table className="table">
            <thead>
                <tr>
                    <th >First name</th>
                    <th >Last name</th>
  
                </tr>
            </thead>
            <tbody>
                { 
                props.data.map(item => (
                    <tr >                       
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>
                        <select>
                            {
                            props.data.map(item =>(                                                           
                            <option value="сat1">{item.fname}</option>                                                                                                                               
                            ))}
                            </select>
                        </td>
                    </tr>
                ))}
            </tbody>
    </table>
)