import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import AddJobDetails from './components/AddJob';
import AddBlog from './components/addBlog';
import CompanyForm from './components/AddCompany';
import AddNotes from './components/AddNotes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <NavbarComponent />
          <main className="flex-grow">
            <Routes>
              <Route path='/addJob' element={<AddJobDetails />} />
              <Route path='/addBlog' element={<AddBlog />} />
              <Route path='/addCompany' element={<CompanyForm />} />
              <Route path='/addNotes' element={<AddNotes />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
