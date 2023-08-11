import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Data from "./Data"

const User = () => {
  const [data, setData] = useState(Data)
  const [user, setUser] = useState({
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
  const { id } = useParams();
  console.log(id)
const searchitem = () => { data.find((item) => {
    if (item.id == id ) {
       console.log(item)
     setUser(item)
      const url = "https://wa.me/919045657301?text=" + " Name : "+item.Student+"%0a";
      window.open(url, 'blank').focus();
    }
  });
}
useEffect(()=>{searchitem();},[])
  console.log(searchitem)

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4"> { user.Student} S/O {user.Father}</h1>
      <hr />
      
        
      <tr>   
        <td className="  colSpan={2}">Name</td>
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
        <td>January</td>
        <td>Fabuary</td>
        <td>March</td>
        <td className=" ">Diposit</td>
        <td className=" ">Balance</td>
        

      </tr>
      <tr>
        <td className="  colSpan={2}"> {user.Student}</td>
        <td className=" "> {user.Father}</td>
        <td className=" "> {user.Class}</td>
        <td className=" "> {user.Contact}</td>
        <td className=" "> {user.Add}</td>

        <td className=" "> {user.July}</td>
        <td className=" "> {user.August}</td>
        <td className=" ">{user.September}</td>
        <td className=" "> {user.Exam1}</td>
        <td className=" "> {user.October }</td>
        <td className=" "> {user.November }</td>
        <td className=" "> {user.December }</td>
        <td className=" "> {user.Exam2 }</td>
        <td className=" "> {user.January }</td>
        <td className=" "> {user.Fabuary }</td>
        <td className=" "> {user.March }</td>
        <td className=" ">{user.Diposit}</td>
        <td className=" "> {user.Balance}</td>
        </tr>
            
        
    
    </div>
  );
};

export default User;