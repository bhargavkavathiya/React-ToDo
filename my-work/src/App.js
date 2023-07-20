
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/MainPage/MainPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DrawerPage from './Pages/DrawerPage/DrawerPage';
import Setting from './Pages/Setting/Setting';

function App() {
  return (
    <>
        <ToastContainer position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <BrowserRouter>
          <Routes>
            <Route path="/" Component={DrawerPage} />
          </Routes>
        </BrowserRouter>
      </>
    
  );
}

export default App;
