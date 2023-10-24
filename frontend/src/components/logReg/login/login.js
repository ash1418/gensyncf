import React, { useState } from "react";
import {Link , useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
   
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/student/login', formData)
      .then((response) => {
        
        const token = response.data.token;

        //return  <Link to={'/'}>back</Link>
        console.log('Login successful:', response.data);
        // Handle success (e.g., show a success message or redirect)
        toast.success('Login successful');
        
        localStorage.setItem('token',token)
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error);
        
        // Handle errors (e.g., display an error message)
      });
    // Send the formData to your backend for registration
    // You can use Axios or Fetch for this purpose.
    // Example: axios.post('/student/register', formData)
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to={'/Register'}>Register</Link>
    </>
  );
};

export default Login;

