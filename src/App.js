
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Index from './Components/Index';
import OneTransaction from './Components/OneTransaction'
import TransactionEdit from './Components/TransactionEdit'
import NewTransaction from './Components/NewTransaction'


function App() {


  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/:id" element={<OneTransaction />} />
            <Route path="/transactions/:id/edit" element={<TransactionEdit />} />
             <Route path="/transactions/new" element={<NewTransaction />} /> 

            {/* 
           
            
           
            <Route path="*" element={<FourOFour />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
