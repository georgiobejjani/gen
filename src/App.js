import './App.scss';
import { Route, Routes } from "react-router-dom";
import Homepage from './Containers/Homepage';
import ContactUs from './Containers/ContactUs';
import Partners from './Containers/Partners';
function App() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/partners" element={<Partners />} />
    </Routes>
  );
}

export default App;
