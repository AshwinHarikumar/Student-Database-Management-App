import React, { useEffect, useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import { Message } from '@mui/icons-material';
import axios from 'axios';
import { Navigate, useLocation } from 'react-router-dom';

// function handleClick() {
//   alert('Data Added Successfully');
// }
// const Add=(props)=>{}

const AddDataForm = (props) => {
  var [formData, setFormData] = useState({
    id: '',
    name: '',
    age: '',
    email: '',
  });
  var location= useLocation();
  console.log("loc",location.state)
  var navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[e.target.name]: value, });
  };

  const handleSubmit = () => { 
    console.log("clicked");

    if(location.state !==null){
      axios
      .put("http://localhost:3000/edit/"+location.state.val._id,formData)
    .then((res)=>{
      alert(res.data.message)
      navigate('/f')
    })
    .catch((err)=>console.log(err));
  }
    else{
    axios.post("http://localhost:3000/add",formData)
    .then((res)=>{

      console.log(res);
      alert(res.data.message);

    })
    .catch((err)=>{
      console.log(err)
    })
  }};
useEffect(()=>{
  if(location.state !== null)
    {
      setFormData({...formData,
        id:location.state.val.id,
        name:location.state.val.name,
        age:location.state.val.age,
        email:location.state.val.email,
      
      
      })
    }
},[])
  return (
    <Paper style={{ padding: '1rem', marginBottom: '2rem' }}>
      <Typography variant="h6" component="div">
        Add New Data
      </Typography>

        <TextField
          name="id"
          label="ID"
          value={formData.id}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="age"
          label="Age"
          value={formData.age}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button  variant="contained" color="primary" style={{ marginTop: '1rem' }} onClick={handleSubmit}>
          Add
        </Button>
      
    </Paper>
  );
};

export default AddDataForm;
