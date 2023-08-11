import React,{useState} from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
//import { Link,  } from "react-router-dom";
//import Data from "./Data";
import Marks from "./Marks";


const Resultshow = () => {
           const { id } = useParams();
           const [users, setUser] = useState(Marks);
           const [search, setSearch] = useState('');
           const [searchuser, setSearchuser] = useState({
            "id": "",
            "STUDENT-NAME": "",
          "FATHER'S- NAME": "",
          "Class": "",
          "HINDI": "",
          "ENGLISH": "",
          "MATHS": "",
          "SCINCE": "",
          "S-st": "",
          "COMPUTER": "",
          "DRAWING": "",
          "GK": 33,
          "PHYSICAL-EDUCATION": "",
          "TOTAL": "",
          "PRECENTAGE": ""
          
           });
            
           const searchitem = () => { users.find((item) => {
            if (item.id == id ) {
              setSearchuser(item)
             
            }
          });
        }
        useEffect(()=>{searchitem()},[searchuser])
       
  return (
    <div className="container py-4">
      <div className="py-2">
      <Link className="btn btn-primary" to="/Result">
        back to Home
      </Link>
      </div>
         <div className=" report">   
      <h1 className="display-4 text-danger">SHRI S R CONVENT SCHOOL </h1>
      <h5 className="display-6">Quarterly Exam Report 2022-23</h5>
       
    
      <ul className="list-group w-25 bordered">
      
                                       
       </ul> 
       <div className="studentdata">
      <table  >
      <tr id="top1">
        <td><h5>Roll-No</h5></td>
        <td> <h5>Student-Name</h5></td>
        <td><h5>Father's-Name</h5></td>
        <td><h5>Class</h5></td>
        <td><h5>Section</h5></td>
      </tr>
      <tr>
        <td><h5>{searchuser.id}</h5></td>
        <td><h5> {searchuser.STUDENT}</h5></td>
        <td><h5>Mr. {searchuser.FATHER}</h5></td>
        <td><h5>{searchuser.Class}</h5></td>
        <td><h5>A</h5></td>
      </tr>
      </table>
      </div>
      </div> 
        <table className="Bottom">
  <tr>
    <th>SUBJECT</th>
    <th>MAX. MARKS</th>
    <th>OBTAINED MARKS</th>
  </tr>
  <tr>
    <td>HINDI</td>
    <td>50</td>
    <td>{searchuser.HINDI}</td>
  </tr>
  <tr>
    <td>ENGLISH</td>
    <td>50</td>
    <td>{searchuser.ENGLISH}</td>
  </tr>
  <tr>
    <td>MATH'S</td>
    <td>50</td>
    <td>{searchuser.MATHS}</td>
  </tr>
  <tr>
    <td>SCIENCE</td>
    <td>50</td>
    <td>{searchuser.SCINCE}</td>
  </tr>
  <tr>
    <td>SOCIAL SCIENCE</td>
    <td>50</td>
    <td>{searchuser.SCINCE}</td>
  </tr>
  
  <tr>
    <td>COMPUTER</td>
    <td>50</td>
    <td>{searchuser.COMPUTER}</td>
  </tr>
  <tr>
    <td>General Knowledge</td>
    <td>50</td>
    <td>{ searchuser.GK}</td>
  </tr>

  <tr>
    <td>PHYSICAL-EDUCATION</td>
    <td>50</td>
    <td>{searchuser.PHYSICALEDUCATION}</td>
  </tr>
  <tr>
    <td>DRAWING</td>
    <td>50</td>
    <td>{searchuser.DRAWING}</td>
  </tr>
  <tr>
 
    <td>TOTAL</td>
    <td>450 </td>
    <td>{searchuser.TOTAL}</td>
  </tr>
  
</table>
    
    </div>
  );
};

export default Resultshow;