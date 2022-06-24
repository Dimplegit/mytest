 import React,{useState , useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";



 const Home = () => {
    const [users,setUser] =useState([]);

    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers = async () =>{
         const result = await axios.get("http://localhost:3003/post");
         console.log(result.data);

    };
    


    return(
    <div className="container">
        <div className="py-4">
        <h1> Home page </h1>
        
      <table class="table border shadow"></table>
        <table class="thead-dark">

        </table>
        <table class="table">
        
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col"> userName</th>
      <th scope="col">E-mail</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
 users.map((user, index) => (
   <tr>
<th scope="row">{index +1} </th>
<td>{user.name}</td>
<td>{user.username}</td>
<td>{user.email}</td>
<td>
    <Link class="btn btn-primary">view</Link>
    <Link class="btn btn-outline-primary">Edit</Link>
    <Link class="btn btn-danger">Delete</Link>
</td>
</tr>

        ))
 }
    
  </tbody>
</table>
    </div>
    </div>
    );
 };


 export default Home;