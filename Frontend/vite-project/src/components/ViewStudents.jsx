import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import axios from 'axios';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import UpdateSharpIcon from '@mui/icons-material/UpdateSharp';
import { useNavigate } from 'react-router-dom';

const DataTable = () => {
  const [data, setData] = useState([]);
  var navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3000/view")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);



const delValue =(id) =>
  {
    console.log(id);
    axios.delete("http://localhost:3000/remove/"+id)
    .then((res)=>{
      alert(res.data.message);
      window.location.reload();
    }) 

      
     .catch( (err)=>console.log(err));
      
    };

    const updateValue =(val) =>
      {
        console.log("up clicked");
        navigate("/i",{state:{val}});

      };

  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" component="div" sx={{ padding: '1rem' }}>
        Data Table
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((val) => (
            <TableRow key={val.id}>
              <TableCell>{val.id}</TableCell>
              <TableCell>{val.name}</TableCell>
              <TableCell>{val.age}</TableCell>
              <TableCell>{val.email}</TableCell>
              <TableCell>
                <Button 
                  variant="contained" 
                  color="error" 
                  onClick={()=>{delValue(val._id) }}
                  startIcon={<DeleteForeverSharpIcon />} 
                  sx={{ mr: 1 }}
                >
                  Delete
                </Button>
                <Button 
                  variant="contained" 
                  color="primary" 
                  startIcon={<UpdateSharpIcon />}
                  onClick={()=>{updateValue(val) }}
                  
                >
                  Update
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default DataTable;
