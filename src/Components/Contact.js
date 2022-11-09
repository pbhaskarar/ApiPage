import React, { useState } from 'react'
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import '../App.css'


const Contact = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => setData(json))
    },[])
  return (
    <div>
        <center>
            <h1>Data Is Here</h1>
            {
                data.map(item =>  
                <Table striped bordered hover variant="dark">
                <thead>
                  <tr className='wid'>
                    <th className='wid'>#</th>
                    <th className='wid'>name</th>
                    <th className='wid'>UserName</th>
                    <th className='wid'>email</th>
                    <th className='wid'>phone</th>
                    <th className='wid'>website</th>

                  </tr>
                </thead>
                <tbody>
                  <tr className='wid'>
                    <td className='wid'>{item.id}</td>
                    <td className='wid'>{item.name}</td>
                    <td className='wid'>{item.username}</td>
                    <td className='wid'>{item.email}</td>
                    <td className='wid'>{item.phone}</td>
                    <td className='wid'>{item.website}</td>
                  </tr>
                </tbody>
                </Table>)
            }
        </center>
    </div>
  )
}

export default Contact