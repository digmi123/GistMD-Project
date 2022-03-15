import AddOrEditPatient from "./Pages/AddOrEditPatient";
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
        <Route path="/add" element={<AddOrEditPatient/>}/>
        <Route path="/update/:id" element={<AddOrEditPatient/>}/>
        </Routes>
     
    </div>
    </BrowserRouter>
  );
}

      {/* <AddPatient/>
      <HomePage/> */}

export default App;
