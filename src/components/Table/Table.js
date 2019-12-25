import React from 'react'


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
                    </tr>
                ))}
            </tbody>
    </table>
)