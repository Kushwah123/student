import React,{useState} from "react";
import { useEffect } from "react";
import { Link,  } from "react-router-dom";
import Data from "./Data";


const User = () => {
    
           const [users, setUser] = useState(Data);
           const [search, setSearch] = useState('');
           const [searchuser, setSearchuser] = useState({
            "id": "",
            "Student": "",
            "Father": "",
            "Add": " ",
            "Contact": "",
            "Column1": "",
            "Class": "",
            "September": "",
            "Exam1": "",
            "October ": "",
            "November": "",
            "December": "",
            "Exam2": "",
            "Diposit": "",
            "Discount": "",
            "Balance": "",
            "Monthly fee": ""
           });
            
           const searchitem = () => { users.find((item) => {
            if (item.Student === search || item.Father === search|| item.id == search || item.Contact == search) {
          
             setSearchuser(item)
            }
          });
        }
        useEffect(()=>{console.log(searchuser)},[searchuser])
       
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <div className="py-2">
      <input
              type="text"
              className=" form-control-lg "
              placeholder="search by name email role"
              //name="name"
               //value={name}
               onChange={e => setSearch(e.target.value)}
            />
            <div className="py-2">
            <button className=" form-control-lg px-4 "onClick={searchitem}> Find</button>
            </div>
            </div>

            
      <h1 className="display-4">Student Id:{searchuser.id} </h1>
       
      <hr />
      <tr>   
        <td className="  colSpan={2}">name</td>
        <td className=" ">Father: </td>
        <td className=" ">Class </td>
        <td className=" ">Contact</td>
        <td className=" ">Address</td>

        <td className=" ">July</td>
        <td className=" ">August</td>
        <td className=" ">September</td>
        <td className=" ">Exam1</td>
        <td className=" ">October</td>
        <td className=" ">November</td>
        <td className=" ">December</td>
        <td className=" ">Exam2</td>
        <td className=" ">Diposit</td>
        <td className=" ">Balance</td>

      </tr>
      <tr>
        <td className="  colSpan={2}"> {searchuser.Student}</td>
        <td className=" "> {searchuser.Father}</td>
        <td className=" "> {searchuser.Class}</td>
        <td className=" "> {searchuser.Contact}</td>
        <td className=" "> {searchuser.Add}</td>

        <td className=" "> {searchuser.July}</td>
        <td className=" "> {searchuser.August}</td>
        <td className=" ">{searchuser.September}</td>
        <td className=" "> {searchuser.Exam1}</td>
        <td className=" "> {searchuser.October }</td>
        <td className=" "> {searchuser.November }</td>
        <td className=" "> {searchuser.December }</td>
        <td className=" "> {searchuser.Exam2 }</td>
        <td className=" ">{searchuser.Diposit}</td>
        <td className=" "> {searchuser.Balance}</td>
        </tr>
            
    </div>
  );
};

export default User;