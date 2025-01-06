import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const [users,setUsers]=useState([]);

    const{id}=useParams();
    useEffect(()=>{
      loadUser(); 
    },[]);

    const loadUser=async()=>{
        const result=await axios.get("http://localhost:8080/get");
        setUsers(result.data);
    };
    const deleteuser=async(id)=>{
      await axios.delete(`http://localhost:8080/raja/${id}`);
      loadUser();
    }
  return (
<div className="container">
    <div className="py-4">
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">name</th>
      <th scope="col">userName</th>
      <th scope="col">email</th>
      <th scope="col">actions</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>
            <Link className="btn btn-primary btn-sm" to={`/viewuser/${user.id}`}>View</Link>
             <Link className="btn btn-primary mx-2 btn-sm" to={`/edituser/${user.id}`}
             >Edit</Link>
           <button className="btn btn-danger mx-2 btn-sm"
           onClick={()=>deleteuser(user.id)}
           >Delete</button>
           </td>
          </tr>
      
        ))
    }
  </tbody>
</table>
        </div>
    </div>
  )
}
