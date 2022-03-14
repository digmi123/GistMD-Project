import AddPatient from "./Pages/AddPatient";
import HomePage from "./Pages/HomePage";
import {BrowserRouter} from "react-router-dom";
import { Route, Routes} from "react-router";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Components/UI/Header";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <ToastContainer position="top-center"/>
        <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/add" element={<AddPatient/>}/>
        <Route path="/update" element={<AddPatient/>}/>
        </Routes>
     
    </div>
    </BrowserRouter>
  );
}

      {/* <AddPatient/>
      <HomePage/> */}

export default App;
