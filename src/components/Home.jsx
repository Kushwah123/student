import React from "react";
import {db, app, auth } from "../firebase";
import { useState,useEffect } from "react";
import { Link} from "react-router-dom";
import Pagination from "./Pagination1";
import axios from "axios";
import Data from "./Data";
import User from "./User";

function Home() {
  const [users, setUser] = useState(Data);
  const [search, setSearch] = useState('');
  const [ischecked, setIschecked] = useState([]);
  const [delmsg, setDelmsg]= useState('');
  const [searchuser, setSearchuser] = useState(Data)

  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

       
  const searchitem = () => { 
    const arr = users.filter((item)=> {
    console.log(item.Student,search)
    
    if(search == '') {
      return item;
    }else if (item.Student && item.Student.toLowerCase().includes(search.toLowerCase())){
      
       return item;
       
    }
  })
  setSearchuser(arr);
}
  // const searchitem = users.find((item) => {
  //   if (item.Student === search || item.Father === search|| item.id === search) {
  //   //  console.log(item)
  //     return item;
  //   }
  // });
    console.log(searchitem)
  const [showPerPage, setShowPerPage] = useState(12);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  
  useEffect(() => {
    
  }, []);

  // const loadUsers = async () => {
  //  const result = await axios.get("https://script.google.com/macros/s/AKfycbznK27p8xNA_NoqD_Q9QWWjnSf8BI0UcYpSPZT37teNiaNHOOR22NSouaAQWJeUyvgu/exec");
  //  const res = await result.data.content;
  //  console.log(res)
  //  setUser(res.content);
  // };
  
  const userdata = () => {
    console.log("Hi")
    return (
      <div className="container py-4">
        <h1>Hello</h1>
        {/* <Link className="btn btn-primary" to="/">
          back to Home
        </Link>
       */}
        {/* <h1 className="display-4">User Id: {users.id}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item">name: {users.Student}</li>
          <li className="list-group-item">user name: {users.Father}</li>
          <li className="list-group-item">email: {users.email}</li>
          <li className="list-group-item">phone: {users.mob}</li>
          <li className="list-group-item">website: {users.website}</li>
        </ul> */}
      </div>
    );
  }
  const deleteUser =  (id) => {
    
    // function to remove a todo item from the todo array
 
    // here we are filtering - the idea is remove an item from the todo array on a button click
    const removeItem = users.filter((todo) => {
      // return the rest of the todos that don't match the item we are deleting
      return todo.id !== id;
    });
    // removeItem returns a new array - so now we are setting the todos to the new array
    setUser(removeItem);

  };
  const handlecheckbox = (e)=> {
     const {value, checked, name} = e.target;
    console.log(value,checked,name)
    if(value === "allselect") {
      setIschecked([...ischecked, value]);
      const   user = ischecked.map(check => {return {...check, ischecked: checked}})
      setIschecked(user);
         console.log(ischecked);
    }
    else if(checked) 
    {
      setIschecked([...ischecked, value]);
      console.log(ischecked);
    }else{
      setIschecked(ischecked.filter((e)=>e!==value));
    }

   
    }
    const handelsubmit = (id) => {
      const removeItem = users.filter((todo) => {
        // return the rest of the todos that don't match the item we are deleting
       // return todo.id !== id;
       return ischecked.find((a)=>{
        return todo== a
       })
      });
      // removeItem returns a new array - so now we are setting the todos to the new array
      setUser(removeItem);
      console.log(removeItem);
      console.log(ischecked);
      
      
    
  }


  


    return (
      <>    
         <h2 style={{float: "left"}}>{ userName? `Welcome - ${userName}` : "Login please"}</h2>
      <div className="container">
      <div className="py-2">
      <div className="py-2 d-flex  justify-content-center">
      <input
              type="text"
              className="form-control-lg text-center"
              placeholder="search by name email role"
              //name="name"
               //value={name}
               onChange={e => setSearch(e.target.value)}
            />
            <div className=" ">
            <button className="form-control-lg" onClick={searchitem}> Search</button>
            </div>
            </div>
        <table class="table border shadow">
          <thead className="thead-dark" >
            <tr>
              <th scope="col">SN</th>
              
              
              
              <th scope="col">Name</th>
              <th scope="col">Father's Name</th>
              <th scope="col">Address</th>
              <th scope="col">Class</th>
              <th scope="col">Mobile No.</th>
              <th scope="col">Total Fees Deposite</th>
              <th scope="col">Balance</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody >
            {searchuser.slice(pagination.start, pagination.end).map((user, index) => (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.Student}</td>
                <td>{user.Father}</td>
                <td>{user.Add}</td>
                <td>{user.Class}</td>
                <td>{user.Contact}</td>
                <td>{user.Diposit}</td>
                <td>{user.Balance}</td>
                <td>
                {/* <a  className="btn btn-danger " 
                    onClick={() => deleteUser(user.id)}>
                    delete
                  </a> */}
                <Link class="btn btn-primary " to={`/Student/${user.id}`}>
                    View
                  </Link>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={users.length}
        />
      </div>
    </div>
    </>
    );
  }
  
  export default Home;
  