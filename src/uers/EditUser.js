import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate=useNavigate();
    const {id}=useParams();

    const [user, setUsers] = useState({
        name: "",
        userName: "",
        email: ""
    });
    const { name, userName, email } = user;

    const onInputChange = (e) => {
        setUsers({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(()=>{
       loadUser()
    },[]); 

    const loadUser=async()=>{
        const result = await axios.get(`http://localhost:8080/raja/${id}`)
        setUsers(result.data)
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        // Add logic here to save user data (e.g., send data to API)
        await axios.put(`http://localhost:8080/raja/${id}`,user);
        navigate("/")
        console.log(user);
    };

    const handleCancel = () => {
        setUsers({
            name: "",
            userName: "",
            email: ""
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-4">Edit</h2>

                        {/* UserName input field */}
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="mb-3">
                                <label htmlFor="userName" className="form-label">UserName:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your UserName"
                                    name="userName"
                                    value={userName}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>

                            {/* Name input field */}
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your Name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>

                            {/* Email input field */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your Email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>

                            {/* Submit and Cancel buttons */}
                            <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                            <Link type="button" className="btn btn-danger btn-sm" to={"/"}>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
