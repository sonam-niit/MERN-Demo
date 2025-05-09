import axios from "axios";
import { useState } from "react";


function App() {

  const [users,setUsers]= useState([]);
  const fetchData =async ()=>{
    try {
      const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(resp.data)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container">
      <h1 className="text-bg-warning text-center p-2">User's list</h1>
      <button  class="btn btn-primary w-100" onClick={fetchData}>FetchData</button>
      <table className="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user)=>(
              <tr>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
