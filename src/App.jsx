import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Lesson0 from './pages/Lesson0';
import Lesson1 from './pages/Lesson1';
import Lesson2 from './pages/Lesson2';
import Lesson3 from './pages/Lesson3';
import QuickRef from './pages/QuickRef';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lesson/0" element={<Lesson0 />} />
          <Route path="/lesson/1" element={<Lesson1 />} />
          <Route path="/lesson/2" element={<Lesson2 />} />
          <Route path="/lesson/3" element={<Lesson3 />} />
          <Route path="/quick-ref" element={<QuickRef />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
