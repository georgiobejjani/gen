import './App.scss';
import { Route, Routes } from "react-router-dom";
import Homepage from './Containers/Homepage';
import ContactUs from './Containers/ContactUs';
import Partners from './Containers/Partners';
import NewsPageItem from './Containers/NewsPageItem';
import NewsPage from './Containers/NewsPage';
import AboutUsPage from './Containers/AboutUsPage';
import TeamPage from './Containers/TeamPage';
function App() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsPageItem/>} />
        <Route path="/aboutus" element={<AboutUsPage/>} />
        <Route path="/team" element={<TeamPage/>}/>
        <Route path="/capabilities" element={<TeamPage/>}/>
    </Routes>
  );
}

export default App;
