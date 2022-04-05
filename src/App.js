import './App.css';
import { Routes, Route } from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import DashBoard from './Component/DashBoard/DashBoard';
import ReviewPage from './Component/ReviewPage/ReviewPage';
import About from './Component/About/About';
import Question from './Component/Question/Question';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='reviews' element={<ReviewPage/>}/>
        <Route path="dashboard" element={<DashBoard/>}/>
        <Route path='blogs' element={<Question/>}/>
        <Route path='about' element={<About/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
