
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route,Routes} 
from 'react-router-dom';
import Home from './components/Home';
import User from "./components/User";
import Result from "./components/Result"
import Navbar from "./components/Navbar";
import Student from "./components/Student"
import Login from "./components/Login";
import Resultshow from "./components/Resultshow";
import Allresult from "./components/Allresult";
import Result10 from "./components/Result10";
import Signup from "./components/Signup";
import Protected from "./components/Protected";



function App() {


 
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
      <Routes>
<Route  path="/" element={< Protected Component={Home} />}/>
<Route path="/Signup" element={<Signup/>}/>
<Route  path="/User" element={< User />}/>
{/* <Route  path="/Result" element={<Allresult />}/> */}
<Route  path="/Result" element={< Result />}/>
<Route exact path='/Student/:id' element={<Student/>}/>
<Route exact path='/Resultshow/:id' element={<Resultshow/>}/>
<Route exact path='/Result10/:id' element={<Result10/>}/>
<Route path ='/Login' element={<Login/>}/>
<Route path="/Protected" element={<Protected/>}/>
    </Routes> 

    {/* * <Switch>
      
      <Route exact path='/' component={Home}/>
      <Route exact path='/About' component={About}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/users/edit/:id' component={EditUser}/>
      <Route exact path='/User' component={User}/>
      <Route exact path='/Login' component={Login}/>
      <Route exact path='/Users/AddUser' component={AddUser}/>
       </Switch>  */}
     
    </div>
    </BrowserRouter>
  );
}

export default App;
